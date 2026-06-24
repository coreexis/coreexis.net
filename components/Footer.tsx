import styles from "./Footer.module.css";

const LINKS = ["Privacy", "Terms", "Status", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 coreexis.net, Inc. — All rights reserved.</p>
      <nav className={styles.links} aria-label="Footer links">
        {LINKS.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}
