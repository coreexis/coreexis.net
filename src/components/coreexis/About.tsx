const REASONS = [
  {
    title: "Built for zero setup time",
    body: "No coding, no complicated dashboards. Connect your accounts and the AI Tool starts running your automation within minutes.",
  },
  {
    title: "The tool and the strategy, together",
    body: "Most automation tools hand you a blank canvas. Coreexis pairs the tool with The Blueprint, so you know exactly what to automate and why.",
  },
  {
    title: "Built to scale with you",
    body: "Start with one automated workflow, then layer on more as you see results. The same subscription covers all of it.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[color:var(--cx-line)] px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--cx-accent-soft)]">
            What is Coreexis
          </span>
          <h2 className="mt-3 font-[var(--cx-font-display)] text-2xl font-bold text-[color:var(--cx-text)] sm:text-3xl">
            An AI automation tool, paired with the exact playbook to run it
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--cx-text-muted)] sm:text-base">
            Coreexis is two things working together: an AI Automation Tool
            that runs the repetitive, income-generating tasks for you, and
            The Blueprint, a step-by-step guide showing exactly how to set it
            up for results. You can get either on its own, or both together
            in the Fast-Track Bundle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-[color:var(--cx-line)] bg-[color:var(--cx-bg-elevated)] p-5"
            >
              <h3 className="font-[var(--cx-font-display)] text-sm font-semibold text-[color:var(--cx-text)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--cx-text-muted)]">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
