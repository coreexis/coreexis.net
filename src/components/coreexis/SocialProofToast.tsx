"use client";

import { useEffect, useState } from "react";

interface ToastItem {
  id: string;
  kind: "purchase" | "update";
  label: string;
}

/**
 * Product update announcements — these are real Coreexis changelog entries
 * you control, not simulated user behavior. Keep this array in sync with
 * what actually shipped; don't announce features that don't exist yet.
 */
const PRODUCT_UPDATES: string[] = [
  "New: faster setup flow added to the AI Tool",
  "The Blueprint updated with a new automation workflow",
];

const DISPLAY_DURATION_MS = 5000;
const GAP_BETWEEN_TOASTS_MS = 4000;

interface ActivityEvent {
  id: string;
  label: string;
  createdAt: string;
}

async function fetchRecentEvents(): Promise<ActivityEvent[]> {
  try {
    const res = await fetch("/api/activity", { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as { events: ActivityEvent[] };
    return data.events;
  } catch {
    return [];
  }
}

export default function SocialProofToast() {
  const [queue, setQueue] = useState<ToastItem[]>([]);
  const [current, setCurrent] = useState<ToastItem | null>(null);
  const [visible, setVisible] = useState(false);

  // Build the rotation: real purchase events (if any exist yet) interleaved
  // with genuine product-update announcements. If there are no real events
  // yet (brand new store), only update announcements are shown — no
  // fabricated purchases fill the gap.
  useEffect(() => {
    let cancelled = false;

    async function buildQueue() {
      const events = await fetchRecentEvents();
      if (cancelled) return;

      const purchaseToasts: ToastItem[] = events.map((e) => ({
        id: `purchase-${e.id}`,
        kind: "purchase",
        label: e.label,
      }));

      const updateToasts: ToastItem[] = PRODUCT_UPDATES.map((label, i) => ({
        id: `update-${i}`,
        kind: "update",
        label,
      }));

      // Interleave so it doesn't read as one long block of the same kind.
      const merged: ToastItem[] = [];
      const maxLen = Math.max(purchaseToasts.length, updateToasts.length);
      for (let i = 0; i < maxLen; i++) {
        if (purchaseToasts[i]) merged.push(purchaseToasts[i]);
        if (updateToasts[i]) merged.push(updateToasts[i]);
      }
      setQueue(merged);
    }

    buildQueue();
    const refresh = setInterval(buildQueue, 30000);
    return () => {
      cancelled = true;
      clearInterval(refresh);
    };
  }, []);

  useEffect(() => {
    if (queue.length === 0) return;
    let index = 0;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    function showNext() {
      setCurrent(queue[index % queue.length]);
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        showTimer = setTimeout(() => {
          index += 1;
          showNext();
        }, GAP_BETWEEN_TOASTS_MS);
      }, DISPLAY_DURATION_MS);
    }

    showNext();
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue]);

  if (!current) return null;

  return (
    <div
      className={`cx-toast fixed bottom-5 left-5 z-40 max-w-xs transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 rounded-lg border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-card)] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <span
          className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
            current.kind === "purchase"
              ? "bg-[color:var(--cx-accent-dim)]"
              : "bg-[color:var(--cx-line)]"
          }`}
        >
          {current.kind === "purchase" ? (
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-[color:var(--cx-accent)]"
              fill="currentColor"
            >
              <path d="M12 2 4 6v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V6l-8-4Zm-1 13.4-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6Z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-[color:var(--cx-text-muted)]"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
            </svg>
          )}
        </span>
        <p className="text-xs leading-snug text-[color:var(--cx-text-muted)]">
          {current.label}
        </p>
      </div>
    </div>
  );
}
