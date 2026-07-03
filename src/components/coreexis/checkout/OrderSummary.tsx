import type { PricingTier } from "@/lib/pricing";

export default function OrderSummary({ tier }: { tier: PricingTier }) {
  return (
    <div className="rounded-lg border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)] p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--cx-text-dim)]">
        Order Summary
      </p>
      <h2 className="mt-2 font-[var(--cx-font-display)] text-lg font-semibold text-[color:var(--cx-text)]">
        {tier.name}
      </h2>
      <p className="mt-1 text-sm text-[color:var(--cx-text-muted)]">
        {tier.description}
      </p>

      <ul className="mt-4 space-y-2">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-[color:var(--cx-text-muted)]"
          >
            <span className="mt-0.5 text-[color:var(--cx-accent)]">+</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-baseline justify-between border-t border-[color:var(--cx-line)] pt-4">
        <span className="text-sm text-[color:var(--cx-text-muted)]">
          Total due today
        </span>
        <span className="flex items-baseline gap-2">
          {tier.originalPriceUsd && (
            <span className="text-sm text-[color:var(--cx-text-dim)] line-through">
              ${tier.originalPriceUsd}
            </span>
          )}
          <span className="font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)]">
            ${tier.priceUsd}
          </span>
        </span>
      </div>
    </div>
  );
}
