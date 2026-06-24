import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guides & E-books — NexusAI",
  description:
    "Step-by-step guides on AI automation, written by people who actually scaled with it.",
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "32px" }}>
        <Products />
      </div>
      <Footer />
    </main>
  );
}
