"use client";

import { BookOpen, Lock, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { PRODUCT_CHECKOUT_URLS, withCheckoutParams } from "@/lib/lemonsqueezy";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <p className={styles.eyebrow}>Guides &amp; E-books</p>
      <h2 className={styles.title}>Learn the playbook, not just the tool</h2>
      <p className={styles.subtitle}>
        Step-by-step guides written by people who actually scaled with this.
      </p>

      <div className={styles.grid}>
        {PRODUCTS.map((product) => {
          const checkoutUrl = PRODUCT_CHECKOUT_URLS[product.id];
          return (
            <div key={product.id} className={styles.card}>
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
              <div
                className={styles.cover}
                style={{ background: product.coverGradient }}
                aria-hidden="true"
              >
                <BookOpen size={32} strokeWidth={1.5} color="#fff" />
              </div>

              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardTagline}>{product.tagline}</p>

              <div className={styles.meta}>
                <span>{product.pages}</span>
                <span className={styles.dot} aria-hidden="true">
                  •
                </span>
                <span>{product.format}</span>
              </div>

              <ul className={styles.bullets}>
                {product.bullets.map((b) => (
                  <li key={b}>
                    <Check size={14} strokeWidth={2} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className={styles.priceRow}>
                <span className={styles.price}>{product.price}</span>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>
                    {product.originalPrice}
                  </span>
                )}
              </div>

              <a
                href={checkoutUrl ? withCheckoutParams(checkoutUrl) : "#"}
                className={`lemonsqueezy-button ${styles.buyBtn}`}
              >
                Get instant access
              </a>
            </div>
          );
        })}
      </div>

      <p className={styles.guarantee}>
        <Lock size={13} strokeWidth={2} />
        Instant download · Secure checkout · 30-day money-back guarantee
      </p>
    </section>
  );
}
