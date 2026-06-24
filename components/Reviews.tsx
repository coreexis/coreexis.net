import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <p className={styles.eyebrow}>Reviews</p>
      <h2 className={styles.title}>Trusted by builders worldwide</h2>
      <p className={styles.subtitle}>Real users, real results.</p>
      <div className={styles.grid}>
        {REVIEWS.map((review) => (
          <div key={review.author} className={styles.card}>
            <div className={styles.stars} aria-label={`${review.stars} stars`}>
              {Array.from({ length: review.stars }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.reviewer}>
              <div
                className={styles.avatar}
                style={{
                  background: review.avatarColor,
                  color: review.avatarTextColor,
                }}
                aria-hidden="true"
              >
                {review.initials}
              </div>
              <div>
                <p className={styles.authorName}>{review.author}</p>
                <span className={styles.authorRole}>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
