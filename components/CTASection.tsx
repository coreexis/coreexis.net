"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./CTASection.module.css";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ready to automate everything?</h2>
      <p className={styles.subtitle}>
        Join 18,000+ teams already running on NexusAI. No credit card needed.
      </p>
      {submitted ? (
        <p className={styles.success}>
          <CheckCircle2 size={18} strokeWidth={2} />
          You&apos;re on the list — we&apos;ll be in touch soon!
        </p>
      ) : (
        <div className={styles.inputRow}>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            aria-label="Work email address"
          />
          <button className={styles.btn} onClick={handleSubmit}>
            Get started free →
          </button>
        </div>
      )}
    </section>
  );
}
