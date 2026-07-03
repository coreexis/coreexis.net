"use client";

import { useEffect, useState } from "react";

export default function StickyCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > window.innerHeight * 0.9);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-[color:var(--cx-line)] bg-[color:var(--cx-bg)]/95 px-6 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <span className="hidden text-sm text-[color:var(--cx-text-muted)] sm:block">
            Ultimate Fast-Track Bundle - AI Tool + The Blueprint
          </span>
          <span className="text-sm font-semibold text-[color:var(--cx-text)] sm:hidden">
            $97 - Fast-Track Bundle
          </span>
          <a
            href="/checkout?tier=bundle"
            className="cx-cta-glow flex-shrink-0 rounded-md bg-[color:var(--cx-accent)] px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-[#0a0b0d] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Instant Access
          </a>
        </div>
      </div>
    </div>
  );
}
