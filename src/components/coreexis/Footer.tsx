export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--cx-line)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <nav className="flex gap-5 text-[11px] text-[color:var(--cx-text-dim)]">
          <a href="/privacy-policy" className="hover:text-[color:var(--cx-text-muted)]">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-[color:var(--cx-text-muted)]">
            Terms of Service
          </a>
        </nav>

        <p className="max-w-md text-[10px] leading-relaxed text-[color:var(--cx-text-dim)]">
          Coreexis is not affiliated with, sponsored by, or endorsed by
          Facebook, TikTok, Instagram, or any social media platform.
          Individual results vary and are not guaranteed.
        </p>

        <p className="text-[10px] text-[color:var(--cx-text-dim)]">
          (c) 2026 Coreexis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
