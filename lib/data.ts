import type { Feature, PricingTier, Review, Stat } from "./types";

export const STATS: Stat[] = [
  { value: "18,400+", label: "Active users" },
  { value: "500+", label: "App integrations" },
  { value: "4.8★", label: "Average rating" },
  { value: "99.9%", label: "Uptime SLA" },
];

export const FEATURES: Feature[] = [
  {
    icon: "MessageSquareText",
    title: "Natural language builder",
    description:
      "Describe what you want in plain English. AI converts it into a working automation instantly.",
  },
  {
    icon: "Plug",
    title: "500+ integrations",
    description:
      "Slack, Notion, Gmail, Shopify, Airtable — connect them all with zero setup friction.",
  },
  {
    icon: "LineChart",
    title: "Real-time analytics",
    description:
      "See exactly how each automation performs. Catch errors before they cost you money.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise security",
    description:
      "SOC 2 Type II certified. Your data stays encrypted at rest and in transit, always.",
  },
  {
    icon: "Clock",
    title: "Run on schedule",
    description:
      "Trigger automations every minute, hourly, daily, or on custom cron schedules you control.",
  },
  {
    icon: "GitBranch",
    title: "Branching logic",
    description:
      "If/else conditions, multi-path flows, and error handling — all visual, all drag-and-drop.",
  },
];

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    description: "Perfect for individuals getting started.",
    features: [
      { text: "100 tasks/month", included: true },
      { text: "5 active workflows", included: true },
      { text: "Core integrations", included: true },
      { text: "AI builder", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get started free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    description: "For creators and small teams scaling fast.",
    features: [
      { text: "10,000 tasks/month", included: true },
      { text: "Unlimited workflows", included: true },
      { text: "All 500+ integrations", included: true },
      { text: "AI natural language builder", included: true },
      { text: "Priority email support", included: true },
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "/ month",
    description: "For teams that need power and control.",
    features: [
      { text: "100,000 tasks/month", included: true },
      { text: "Team collaboration", included: true },
      { text: "Custom webhooks + API", included: true },
      { text: "SSO + audit logs", included: true },
      { text: "Dedicated Slack support", included: true },
    ],
    cta: "Talk to sales",
  },
];

export const REVIEWS: Review[] = [
  {
    stars: 5,
    text: "Replaced Zapier for us at 1/3 the cost. The AI builder alone saved my team 6 hours a week.",
    author: "Jake Morrison",
    role: "Head of Ops, Growthly",
    initials: "JM",
    avatarColor: "rgba(124,58,237,0.2)",
    avatarTextColor: "#a78bfa",
  },
  {
    stars: 5,
    text: "Went from idea to live automation in 8 minutes. No docs needed. This thing just works.",
    author: "Sofia Reyes",
    role: "Founder, Stackd Studio",
    initials: "SR",
    avatarColor: "rgba(34,197,94,0.15)",
    avatarTextColor: "#4ade80",
  },
  {
    stars: 5,
    text: "The branching logic is insane. Built a customer onboarding flow in one afternoon that used to take our devs a sprint.",
    author: "Alex Lim",
    role: "CTO, Pebble Labs",
    initials: "AL",
    avatarColor: "rgba(59,130,246,0.15)",
    avatarTextColor: "#60a5fa",
  },
];
