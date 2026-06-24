import Navbar from "@/components/Navbar";
import LiveBar from "@/components/LiveBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LiveBar />
      <Hero />
      <Features />
      <Pricing />
      <Reviews />
      <CTASection />
      <Footer />
    </main>
  );
}
