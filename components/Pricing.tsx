import { Check, X } from "lucide-react";
import { PRICING } from "@/lib/data";
import { PLAN_CHECKOUT_URLS, withCheckoutParams } from "@/lib/lemonsqueezy";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <p className={styles.eyebrow}>Pricing</p>
      <h2 className={styles.title}>Simple, honest pricing</h2>
      <p className={styles.subtitle}>Start free. Scale as you grow.</p>
      <div className={styles.grid}>
        {PRICING.map((tier) => {
          const checkoutUrl = PLAN_CHECKOUT_URLS[tier.name.toLowerCase()];
          const isFree = checkoutUrl === null;
          return (
            <div
              key={tier.name}
              className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
            >
              {tier.featured && (
                <span className={styles.popularBadge}>Most popular</span>
              )}
              <p className={styles.tierName}>{tier.name}</p>
              <div className={styles.price}>
                {tier.price}
                <span className={styles.period}> {tier.period}</span>
              </div>
              <p className={styles.tierDesc}>{tier.description}</p>
              <ul className={styles.featureList}>
                {tier.features.map((f) => (
                  <li
                    key={f.text}
                    className={f.included ? styles.featureOn : styles.featureOff}
                  >
                    {f.included ? (
                      <Check size={15} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <X size={15} strokeWidth={2} aria-hidden="true" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href={
                  isFree
                    ? "#"
                    : withCheckoutParams(checkoutUrl ?? "#")
                }
                className={`${isFree ? "" : "lemonsqueezy-button"} ${styles.btn} ${
                  tier.featured ? styles.btnPrimary : ""
                }`}
              >
                {tier.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
