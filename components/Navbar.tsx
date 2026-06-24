"use client";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoAccent}>Coreexis</span>.Net
      </div>
      <div className={styles.links}>
        <a href="../features">Features</a>
        <a href="/products">Guides</a>
        <a href="#pricing">Pricing</a>
        <a href="#reviews">Reviews</a>
        <a href="#">Docs</a>
      </div>
      <button className={styles.cta}>Start free trial</button>
    </nav>
  );
}
