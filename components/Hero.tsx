import { Zap } from "lucide-react";
import styles from "./Hero.module.css";
import { STATS } from "@/lib/data";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Now powered by GPT-4o + Claude 3.5
        </div>
        <h1 className={styles.heading}>
          Automate your workflow with{" "}
          <em className={styles.headingAccent}>AI that actually works</em>
        </h1>
        <p className={styles.subheading}>
          Connect 500+ apps, build automations in plain English, and scale your
          business — without writing a single line of code.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>
            <Zap size={16} strokeWidth={2} fill="currentColor" />
            Start free — no credit card
          </button>
          <button className={styles.btnSecondary}>Watch 2-min demo</button>
        </div>
        <p className={styles.heroNote}>
          Free forever plan available · Setup in under 5 minutes
        </p>
      </section>

      <div className={styles.statsBar}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
