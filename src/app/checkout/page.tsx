import { redirect } from "next/navigation";
import Link from "next/link";
import { getTierById } from "@/lib/pricing";
import OrderSummary from "@/components/coreexis/checkout/OrderSummary";
import PayPalCheckoutButton from "@/components/coreexis/checkout/PayPalCheckoutButton";
import CardPaymentComingSoon from "@/components/coreexis/checkout/CardPaymentComingSoon";
import "@/components/coreexis/coreexis.css";

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { tier?: string };
}) {
  const tier = getTierById(searchParams.tier ?? "");

  if (!tier) {
    redirect("/coreexis#pricing");
  }

  return (
    <main className="coreexis-landing min-h-screen px-6 py-12">
      <div className="mx-auto max-w-md">
        <Link
          href="/coreexis"
          className="mb-6 inline-block text-xs text-[color:var(--cx-text-dim)] hover:text-[color:var(--cx-text-muted)]"
        >
          &larr; Back to Coreexis
        </Link>

        <h1 className="mb-6 font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)]">
          Complete Your Order
        </h1>

        <OrderSummary tier={tier} />

        <div className="mt-6 space-y-3">
          <PayPalCheckoutButton tierId={tier.id} />
          <CardPaymentComingSoon />
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-[color:var(--cx-text-dim)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3 w-3 text-[color:var(--cx-text-muted)]"
            fill="currentColor"
          >
            <path d="M12 1 3 5v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V5l-9-4Zm0 2.2 7 3.11V11c0 4.3-3 8.05-7 9.13-4-1.08-7-4.83-7-9.13V6.31l7-3.11Z" />
          </svg>
          <span>Payments processed securely by PayPal. Coreexis never sees your card details.</span>
        </div>
      </div>
    </main>
  );
}
