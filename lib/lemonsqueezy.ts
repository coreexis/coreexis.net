// ============================================================
// LEMONSQUEEZY CONFIG
// Ganti STORE_NAME dan semua VARIANT_ID di bawah ini.
//
// Cara dapat checkout URL:
// 1. Buka dashboard LemonSqueezy → Products
// 2. Klik produk/variant → "Share" → copy link
//    (format: https://STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID)
// 3. Paste link lengkapnya di bawah, atau cukup ganti VARIANT_ID
//    kalau store name sudah benar.
// ============================================================

export const LEMONSQUEEZY_STORE = "your-store-name"; // ganti tanpa .lemonsqueezy.com

const base = `https://${LEMONSQUEEZY_STORE}.lemonsqueezy.com/checkout/buy`;

// --- One-time products (e-books) ---
// key harus sama dengan `id` di lib/products.ts
export const PRODUCT_CHECKOUT_URLS: Record<string, string> = {
  "automation-blueprint": `${base}/REPLACE_VARIANT_ID_1`,
  "ai-prompt-mastery": `${base}/REPLACE_VARIANT_ID_2`,
  "scaling-playbook": `${base}/REPLACE_VARIANT_ID_3`,
};

// --- Subscriptions (SaaS plans) ---
// key harus sama dengan `name` di lib/data.ts (lowercased)
export const PLAN_CHECKOUT_URLS: Record<string, string | null> = {
  starter: null, // free plan, no checkout needed
  pro: `${base}/REPLACE_VARIANT_ID_PRO`,
  business: `${base}/REPLACE_VARIANT_ID_BUSINESS`,
};

// Optional: prefill checkout with embed mode + custom button color
export function withCheckoutParams(url: string): string {
  const params = new URLSearchParams({
    embed: "1",
  });
  return `${url}?${params.toString()}`;
}
