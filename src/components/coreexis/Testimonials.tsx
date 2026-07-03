interface Testimonial {
  initials: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

/**
 * PLACEHOLDER CONTENT: these are illustrative sample reviews, not real
 * customer quotes. Swap these for genuine customer feedback (with their
 * permission) before this page goes live with real traffic and payments —
 * publishing fabricated testimonials as if they were real customers can
 * violate FTC endorsement guidelines (US) and consumer protection rules
 * (EU/UK). A quick, honest alternative until you have real reviews: label
 * this section "What early users are saying" only once genuinely true, or
 * keep it framed as example outcomes rather than named customer quotes.
 */
const TESTIMONIALS: Testimonial[] = [
  {
    initials: "JM",
    name: "J. Mitchell",
    role: "Bundle customer",
    rating: 5,
    quote:
      "Set up the tool on a Sunday afternoon following The Blueprint step by step. First automated run went out that same night.",
  },
  {
    initials: "AR",
    name: "A. Reyes",
    role: "AI Tool subscriber",
    rating: 5,
    quote:
      "Was skeptical about another automation tool, but the setup was genuinely fast. No code, no weird integrations to fight with.",
  },
  {
    initials: "SK",
    name: "S. Kowalski",
    role: "Blueprint reader",
    rating: 4,
    quote:
      "Bought The Blueprint on its own first to see if the strategy made sense before committing to the tool. Upgraded to the bundle a week later.",
  },
  {
    initials: "TN",
    name: "T. Nguyen",
    role: "Bundle customer",
    rating: 5,
    quote:
      "The combination of the tool plus the guide is what sold me. Didn't want to figure out the strategy myself from scratch.",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "text-[color:var(--cx-accent)]"
              : "text-[color:var(--cx-line)]"
          }`}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-t border-[color:var(--cx-line)] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)] sm:text-3xl">
            What Customers Say
          </h2>
          <p className="mt-2 text-sm text-[color:var(--cx-text-muted)]">
            Example experiences from people using Coreexis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials}
              className="flex flex-col rounded-lg border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)] p-5"
            >
              <StarRow rating={t.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--cx-text-muted)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--cx-accent-dim)] font-mono text-[11px] font-semibold text-[color:var(--cx-accent-soft)]">
                  {t.initials}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[color:var(--cx-text)]">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-[color:var(--cx-text-dim)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
