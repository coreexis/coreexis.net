export interface Product {
  id: string;
  title: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  pages: string;
  format: string;
  coverGradient: string;
  bullets: string[];
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "automation-blueprint",
    title: "The Automation Blueprint",
    tagline: "Build your first 10 AI workflows from zero — step by step.",
    price: "$39",
    originalPrice: "$79",
    pages: "112 pages",
    format: "PDF + templates",
    coverGradient: "linear-gradient(135deg, #7c3aed, #4c1d95)",
    bullets: [
      "10 ready-to-clone automation templates",
      "Step-by-step setup screenshots",
      "Common mistakes & how to avoid them",
      "Lifetime updates included",
    ],
    badge: "Bestseller",
  },
  {
    id: "ai-prompt-mastery",
    title: "AI Prompt Mastery",
    tagline: "The exact prompt structures top automators use to save 10+ hrs/week.",
    price: "$29",
    originalPrice: "$59",
    pages: "86 pages",
    format: "PDF",
    coverGradient: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    bullets: [
      "200+ tested prompt formulas",
      "Industry-specific examples",
      "Copy-paste ready snippets",
      "Bonus: GPT-4o vs Claude comparison",
    ],
  },
  {
    id: "scaling-playbook",
    title: "Scaling Without Hiring",
    tagline: "How solo founders run six-figure ops using only automation.",
    price: "$49",
    originalPrice: "$99",
    pages: "140 pages",
    format: "PDF + Notion template",
    coverGradient: "linear-gradient(135deg, #059669, #064e3b)",
    bullets: [
      "Real case studies with numbers",
      "Notion OS template included",
      "Hiring vs automating decision matrix",
      "Private community access",
    ],
    badge: "New",
  },
];
