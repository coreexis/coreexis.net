import { NextRequest, NextResponse } from "next/server";
import { markPresence } from "@/lib/redis";

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = (await req.json()) as { sessionId?: string };

    if (!sessionId || typeof sessionId !== "string" || sessionId.length > 128) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await markPresence(sessionId);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST /api/activity/heartbeat failed:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
