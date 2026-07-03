import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getActiveUserCount } from "@/lib/redis";

export const dynamic = "force-dynamic";

export interface ActivityResponse {
  activeUsers: number;
  events: { id: string; label: string; createdAt: string }[];
}

export async function GET() {
  try {
    const [activeUsers, recentEvents] = await Promise.all([
      getActiveUserCount(),
      prisma.orderEvent.findMany({
        orderBy: { createdAt: "desc" },
        take: 3,
        select: { id: true, label: true, createdAt: true },
      }),
    ]);

    const payload: ActivityResponse = {
      activeUsers,
      events: recentEvents.map((e) => ({
        id: e.id,
        label: e.label,
        createdAt: e.createdAt.toISOString(),
      })),
    };

    return NextResponse.json(payload);
  } catch (error) {
    console.error("GET /api/activity failed:", error);
    return NextResponse.json<ActivityResponse>(
      { activeUsers: 0, events: [] },
      { status: 200 }
    );
  }
}
