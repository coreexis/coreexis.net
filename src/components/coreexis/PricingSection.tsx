import { PRICING_TIERS } from "@/lib/pricing";

function PayPalTrustBadge() {
  return (
    <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[color:var(--cx-text-dim)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3 w-3 text-[color:var(--cx-text-muted)]"
        fill="currentColor"
      >
        <path d="M12 1 3 5v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V5l-9-4Zm0 2.2 7 3.11V11c0 4.3-3 8.05-7 9.13-4-1.08-7-4.83-7-9.13V6.31l7-3.11Z" />
      </svg>
      <span>Secure Payment via PayPal</span>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-t border-[color:var(--cx-line)] px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)] sm:text-3xl">
            Choose Your Access
          </h2>
          <p className="mt-2 text-sm text-[color:var(--cx-text-muted)]">
            All prices in USD. Cancel the tool subscription anytime.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-xl border px-6 py-7 cx-hover-lift ${
                tier.highlight
                  ? "border-[color:var(--cx-accent)] bg-[color:var(--cx-bg-card)] sm:-translate-y-3 sm:shadow-[0_0_40px_-8px_rgba(255,90,31,0.35)]"
                  : "border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--cx-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0a0b0d]">
                  {tier.badge}
                </span>
              )}

              <h3 className="font-[var(--cx-font-display)] text-lg font-semibold text-[color:var(--cx-text)]">
                {tier.name}
              </h3>
              <p className="mt-1 text-xs text-[color:var(--cx-text-muted)]">
                {tier.description}
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                {tier.originalPriceUsd && (
                  <span className="text-sm text-[color:var(--cx-text-dim)] line-through">
                    ${tier.originalPriceUsd}
                  </span>
                )}
                <span className="font-[var(--cx-font-display)] text-3xl font-bold text-[color:var(--cx-text)]">
                  ${tier.priceUsd}
                </span>
                <span className="text-xs text-[color:var(--cx-text-muted)]">
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[color:var(--cx-text-muted)]"
                  >
                    <span className="mt-0.5 text-[color:var(--cx-accent)]">
                      +
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/checkout?tier=${tier.id}`}
                className={`mt-7 rounded-md px-5 py-3 text-center text-sm font-bold uppercase tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  tier.highlight
                    ? "cx-cta-glow bg-[color:var(--cx-accent)] text-[#0a0b0d]"
                    : "border border-[color:var(--cx-line)] bg-transparent text-[color:var(--cx-text)] hover:border-[color:var(--cx-accent-soft)]"
                }`}
              >
                {tier.ctaLabel}
              </a>

              <PayPalTrustBadge />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
