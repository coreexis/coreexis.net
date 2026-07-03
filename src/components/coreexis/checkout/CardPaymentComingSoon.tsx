export default function CardPaymentComingSoon() {
  return (
    <div className="flex items-center justify-between rounded-md border border-dashed border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)]/50 px-4 py-3 opacity-60">
      <div className="flex items-center gap-2.5">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[color:var(--cx-text-muted)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
        <span className="text-xs text-[color:var(--cx-text-muted)]">
          Debit / Credit Card
        </span>
      </div>
      <span className="rounded-full bg-[color:var(--cx-line)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--cx-text-dim)]">
        Coming Soon
      </span>
    </div>
  );
}
