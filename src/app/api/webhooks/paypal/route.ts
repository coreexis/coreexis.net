import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

const TIER_LABELS: Record<string, string> = {
  tool: "AI Tool subscription activated",
  bundle: "Ultimate Fast-Track Bundle claimed",
  ebook: "The Blueprint downloaded",
};

interface PayPalWebhookEvent {
  event_type: string;
  resource: {
    custom_id?: string;
    payer?: {
      address?: { country_code?: string };
    };
  };
}

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

async function verifyWebhookSignature(
  req: NextRequest,
  rawBody: string
): Promise<boolean> {
  const accessToken = await getPayPalAccessToken();

  const verificationPayload = {
    transmission_id: req.headers.get("paypal-transmission-id"),
    transmission_time: req.headers.get("paypal-transmission-time"),
    cert_url: req.headers.get("paypal-cert-url"),
    auth_algo: req.headers.get("paypal-auth-algo"),
    transmission_sig: req.headers.get("paypal-transmission-sig"),
    webhook_id: process.env.PAYPAL_WEBHOOK_ID,
    webhook_event: JSON.parse(rawBody),
  };

  const res = await fetch(
    `${PAYPAL_API_BASE}/v1/notifications/verify-webhook-signature`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verificationPayload),
    }
  );

  if (!res.ok) return false;
  const result = (await res.json()) as { verification_status: string };
  return result.verification_status === "SUCCESS";
}

const COUNTRY_NAMES: Record<string, string> = {
  US: "United States",
  GB: "United Kingdom",
  CA: "Canada",
  DE: "Germany",
  NL: "Netherlands",
  IE: "Ireland",
  FR: "France",
  AU: "Australia",
};

export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  let verified: boolean;
  try {
    verified = await verifyWebhookSignature(req, rawBody);
  } catch (error) {
    console.error("PayPal webhook verification error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  if (!verified) {
    return NextResponse.json({ ok: false, reason: "unverified" }, { status: 400 });
  }

  const event = JSON.parse(rawBody) as PayPalWebhookEvent;

  if (event.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
    return NextResponse.json({ ok: true, ignored: event.event_type });
  }

  const tier = event.resource.custom_id ?? "tool";
  const countryCode = event.resource.payer?.address?.country_code;
  const countryName = countryCode ? COUNTRY_NAMES[countryCode] : undefined;

  const baseLabel = TIER_LABELS[tier] ?? "Purchase completed";
  const label = countryName ? `${baseLabel} - ${countryName}` : baseLabel;

  await prisma.orderEvent.create({
    data: {
      tier,
      label,
      countryCode: countryCode ?? null,
      countryName: countryName ?? null,
    },
  });

  return NextResponse.json({ ok: true });
}
