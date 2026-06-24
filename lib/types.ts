export interface Feature {
  icon: keyof typeof import("lucide-react");
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  featured?: boolean;
}

export interface Review {
  stars: number;
  text: string;
  author: string;
  role: string;
  initials: string;
  avatarColor: string;
  avatarTextColor: string;
}

export interface Stat {
  value: string;
  label: string;
}
