import { NextRequest, NextResponse } from "next/server";
import { getTierById } from "@/lib/pricing";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const res = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error(`PayPal token request failed: ${res.status}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { tierId } = (await req.json()) as { tierId?: string };
    const tier = tierId ? getTierById(tierId) : undefined;

    if (!tier) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();

    const orderRes = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            custom_id: tier.id, // read by the webhook to label the live feed correctly
            description: tier.name,
            amount: {
              currency_code: "USD",
              value: tier.priceUsd.toFixed(2),
            },
          },
        ],
      }),
    });

    if (!orderRes.ok) {
      const errBody = await orderRes.text();
      console.error("PayPal create-order failed:", errBody);
      return NextResponse.json(
        { error: "Failed to create PayPal order" },
        { status: 502 }
      );
    }

    const order = (await orderRes.json()) as { id: string };
    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error("POST /api/paypal/create-order failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
