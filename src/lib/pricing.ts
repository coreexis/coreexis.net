export type TierId = "tool" | "bundle" | "ebook";

export interface PricingTier {
  id: TierId;
  name: string;
  priceUsd: number; // in whole dollars
  originalPriceUsd?: number;
  cadence: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaLabel: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "tool",
    name: "AI Automation Tool",
    priceUsd: 47,
    cadence: "/mo",
    description: "Just the engine. Bring your own strategy.",
    features: [
      "Full Coreexis AI Tool access",
      "Unlimited automation runs",
      "Email support",
    ],
    ctaLabel: "Start Subscription",
  },
  {
    id: "bundle",
    name: "Ultimate Fast-Track Bundle",
    priceUsd: 97,
    originalPriceUsd: 164,
    cadence: "one-time + tool access",
    description: "The tool and the exact playbook, bundled to save 40%.",
    features: [
      "Full Coreexis AI Tool access (first month included)",
      "The Blueprint complete e-book",
      "Priority setup support",
      "Lifetime updates to The Blueprint",
    ],
    highlight: true,
    badge: "Best Value",
    ctaLabel: "Get the Bundle",
  },
  {
    id: "ebook",
    name: "The Blueprint Guide",
    priceUsd: 37,
    cadence: "one-time",
    description: "The strategy only, no tool included. Instant PDF download.",
    features: [
      "Full The Blueprint e-book (PDF)",
      "Step-by-step playbook",
      "Instant download after payment",
      "Free updates to future editions",
    ],
    ctaLabel: "Get The Blueprint",
  },
];

export function getTierById(id: string): PricingTier | undefined {
  return PRICING_TIERS.find((t) => t.id === id);
}
