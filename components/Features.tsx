import {
  MessageSquareText,
  Plug,
  LineChart,
  ShieldCheck,
  Clock,
  GitBranch,
} from "lucide-react";
import { FEATURES } from "@/lib/data";
import styles from "./Features.module.css";

const ICON_MAP = {
  MessageSquareText,
  Plug,
  LineChart,
  ShieldCheck,
  Clock,
  GitBranch,
};

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <p className={styles.eyebrow}>Features</p>
      <h2 className={styles.title}>Everything you need to automate</h2>
      <p className={styles.subtitle}>Build in minutes, not months.</p>
      <div className={styles.grid}>
        {FEATURES.map((feature) => {
          const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP];
          return (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconBox} aria-hidden="true">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
