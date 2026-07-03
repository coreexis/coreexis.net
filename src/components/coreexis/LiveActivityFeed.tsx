"use client";

import { useEffect, useRef, useState } from "react";

interface ActivityEvent {
  id: string;
  label: string;
  createdAt: string;
}

interface ActivityResponse {
  activeUsers: number;
  events: ActivityEvent[];
}

const HEARTBEAT_INTERVAL_MS = 25000;
const POLL_INTERVAL_MS = 6000;
const SESSION_STORAGE_KEY = "cx_session_id";

function getOrCreateSessionId(): string {
  try {
    const existing = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

async function sendHeartbeat(sessionId: string) {
  try {
    await fetch("/api/activity/heartbeat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
      keepalive: true,
    });
  } catch {
    // Non-critical.
  }
}

async function fetchActivity(): Promise<ActivityResponse | null> {
  try {
    const res = await fetch("/api/activity", { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as ActivityResponse;
  } catch {
    return null;
  }
}

export default function LiveActivityFeed() {
  const [activeUsers, setActiveUsers] = useState<number | null>(null);
  const [events, setEvents] = useState<ActivityEvent[]>([]);
  const sessionIdRef = useRef<string | null>(null);

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
    const sessionId = sessionIdRef.current;

    sendHeartbeat(sessionId);
    const heartbeatTimer = setInterval(
      () => sendHeartbeat(sessionId),
      HEARTBEAT_INTERVAL_MS
    );

    const poll = async () => {
      const data = await fetchActivity();
      if (data) {
        setActiveUsers(data.activeUsers);
        setEvents(data.events);
      }
    };
    poll();
    const pollTimer = setInterval(poll, POLL_INTERVAL_MS);

    return () => {
      clearInterval(heartbeatTimer);
      clearInterval(pollTimer);
    };
  }, []);

  if (activeUsers === null) return null;

  return (
    <div className="cx-live-feed w-full max-w-sm rounded-lg border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-card)]/80 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-xs font-mono tracking-wide text-[color:var(--cx-text-muted)]">
        <span className="cx-live-dot h-2 w-2 rounded-full bg-[color:var(--cx-accent)]" />
        <span>
          <span className="text-[color:var(--cx-text)] font-semibold">
            {activeUsers}
          </span>{" "}
          active on Coreexis right now
        </span>
      </div>

      {events.length > 0 && (
        <div className="mt-2 space-y-1.5">
          {events.map((event) => (
            <p
              key={event.id}
              className="cx-ticker-row truncate font-mono text-[11px] text-[color:var(--cx-text-dim)]"
            >
              {event.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
