export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-[var(--cx-font-display)] text-lg font-semibold tracking-[0.14em] text-[color:var(--cx-text)]">
          CORE<span className="text-[color:var(--cx-accent)]">EXIS</span>
        </span>
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--cx-text-dim)] sm:block">
          AI Automation - Fast-Track System
        </span>
      </div>
    </header>
  );
}
