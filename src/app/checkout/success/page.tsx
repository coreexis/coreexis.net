import Link from "next/link";
import { getTierById } from "@/lib/pricing";
import "@/components/coreexis/coreexis.css";

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { tier?: string };
}) {
  const tier = getTierById(searchParams.tier ?? "");

  return (
    <main className="coreexis-landing flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
      <div className="mx-auto max-w-md">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--cx-accent-dim)]">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-[color:var(--cx-accent)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>

        <h1 className="font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)]">
          Payment Received
        </h1>
        <p className="mt-3 text-sm text-[color:var(--cx-text-muted)]">
          {tier
            ? `Your ${tier.name} order is confirmed. A receipt and access instructions are on their way to your email.`
            : "Your order is confirmed. A receipt and access instructions are on their way to your email."}
        </p>

        <Link
          href="/coreexis"
          className="mt-8 inline-block rounded-md border border-[color:var(--cx-line)] px-6 py-3 text-sm font-semibold text-[color:var(--cx-text)] hover:border-[color:var(--cx-accent-soft)]"
        >
          Back to Coreexis
        </Link>
      </div>
    </main>
  );
}
