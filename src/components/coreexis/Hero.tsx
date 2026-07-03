import LiveActivityFeed from "./LiveActivityFeed";

export default function Hero() {
  return (
    <section className="cx-grid-bg relative overflow-hidden px-6 pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div
        className="cx-orb h-72 w-72 bg-[color:var(--cx-accent)]"
        style={{ top: "-4rem", left: "8%" }}
        aria-hidden="true"
      />
      <div
        className="cx-orb h-64 w-64 bg-[color:var(--cx-accent-soft)]"
        style={{ top: "6rem", right: "10%", animationDelay: "2.5s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--cx-accent-soft)]">
          Limited Fast-Track Pricing
        </span>

        <h1 className="font-[var(--cx-font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-[color:var(--cx-text)] sm:text-6xl">
          How I Automate{" "}
          <span className="text-[color:var(--cx-accent)]">$150/Day</span>{" "}
          Using This Exact Coreexis AI Tool &amp; Blueprint
        </h1>

        <p className="mt-5 max-w-xl text-base text-[color:var(--cx-text-muted)] sm:text-lg">
          No experience, no team, no guesswork - just the tool and the exact
          playbook, ready to run in the next 10 minutes.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href="#pricing"
            className="cx-cta-glow rounded-md bg-[color:var(--cx-accent)] px-10 py-4 text-base font-bold uppercase tracking-wide text-[#0a0b0d] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:text-lg"
          >
            Get Instant Access
          </a>
          <div className="flex items-center gap-2 text-xs text-[color:var(--cx-text-dim)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-[color:var(--cx-text-muted)]"
              fill="currentColor"
            >
              <path d="M12 1 3 5v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V5l-9-4Zm0 2.2 7 3.11V11c0 4.3-3 8.05-7 9.13-4-1.08-7-4.83-7-9.13V6.31l7-3.11Z" />
            </svg>
            <span>Secure Payment via PayPal - Buyer Protection Included</span>
          </div>
        </div>

        <div className="mt-10">
          <LiveActivityFeed />
        </div>
      </div>
    </section>
  );
}
