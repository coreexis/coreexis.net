"use client";

import { useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import type { TierId } from "@/lib/pricing";

interface PayPalCheckoutButtonProps {
  tierId: TierId;
}

export default function PayPalCheckoutButton({
  tierId,
}: PayPalCheckoutButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <p className="rounded-md border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)] p-4 text-xs text-[color:var(--cx-text-dim)]">
        PayPal isn&apos;t configured yet. Set NEXT_PUBLIC_PAYPAL_CLIENT_ID in
        your environment to enable checkout.
      </p>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: "USD",
        intent: "capture",
      }}
    >
      <div className="w-full">
        <PayPalButtons
          style={{ layout: "vertical", color: "black", shape: "pill" }}
          createOrder={async () => {
            setError(null);
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ tierId }),
            });
            if (!res.ok) {
              setError("Couldn't start checkout. Please try again.");
              throw new Error("create-order failed");
            }
            const data = (await res.json()) as { orderId: string };
            return data.orderId;
          }}
          onApprove={async (data) => {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID }),
            });
            if (!res.ok) {
              setError("Payment could not be completed. Please try again.");
              return;
            }
            window.location.href = `/checkout/success?tier=${tierId}`;
          }}
          onError={() => {
            setError("Something went wrong with PayPal. Please try again.");
          }}
        />
        {error && (
          <p className="mt-2 text-xs text-red-400">{error}</p>
        )}
      </div>
    </PayPalScriptProvider>
  );
}
