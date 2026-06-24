import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "coreexis.net — Automate your workflow with AI",
  description:
    "Connect 500+ apps, build automations in plain English, and scale your business — without writing a single line of code.",
  keywords: ["automation", "AI", "workflow", "no-code", "SaaS", "coreexis", "productivity", "integration", "task management", "business automation", "digital transformation", "process optimization", "efficiency", "collaboration", "team productivity", "app integration", "automation tools", "AI-powered automation", "workflow management"],
  openGraph: {
    title: "coreexis.net — Automate your workflow with AI",
    description: "AI-powered automation for creators and teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
