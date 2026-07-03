import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/coreexis/Header";
import Hero from "@/components/coreexis/Hero";
import About from "@/components/coreexis/About";
import PricingSection from "@/components/coreexis/PricingSection";
import Testimonials from "@/components/coreexis/Testimonials";
import Footer from "@/components/coreexis/Footer";
import ScrollReveal from "@/components/coreexis/ScrollReveal";
import StickyCtaBar from "@/components/coreexis/StickyCtaBar";
import SocialProofToast from "@/components/coreexis/SocialProofToast";
import "@/components/coreexis/coreexis.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--cx-font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--cx-font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coreexis - Automate $150/Day With the AI Tool and Blueprint",
  description:
    "Get the exact Coreexis AI Automation Tool and Blueprint used to run automated income streams. Instant access, secure PayPal checkout.",
};

export default function CoreexisLandingPage() {
  return (
    <main
      className={`coreexis-landing min-h-screen pb-16 font-[var(--cx-font-body)] ${displayFont.variable} ${bodyFont.variable}`}
    >
      <Header />
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <PricingSection />
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <Testimonials />
      </ScrollReveal>

      <Footer />

      <StickyCtaBar />
      <SocialProofToast />
    </main>
  );
}
