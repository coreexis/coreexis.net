"use client";

import { useEffect, useState } from "react";
import styles from "./LiveBar.module.css";

export default function LiveBar() {
  const [count, setCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(2800, prev + delta);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bar}>
      <span className={styles.dot} aria-hidden="true" />
      <span>
        <strong>{count.toLocaleString()}</strong> users active right now —{" "}
        <strong className={styles.accent}>312 automations</strong> running live
      </span>
    </div>
  );
}
