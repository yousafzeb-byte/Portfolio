import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll and manage focus when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      wasOpenRef.current = true;
      setTimeout(() => firstLinkRef.current?.focus(), 60);
    } else if (wasOpenRef.current) {
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const menuVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: "100%" },
    visible: reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 },
    exit: reduceMotion ? { opacity: 0 } : { opacity: 0, x: "100%" },
  };

  return (
    <>
      {/* Skip-to-content link — visually hidden until focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-accent focus:text-canvas focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:rounded-sm"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[rgba(10,10,10,0.94)] backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / monogram */}
          <a
            href="#"
            className="font-display text-4xl text-text hover:text-accent transition-colors duration-200 leading-none"
            aria-label="Yousaf Zeb — back to top"
          >
            Y<em style={{ color: "var(--color-accent)" }}>Z</em>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative font-sans text-[17px] text-muted hover:text-text transition-colors duration-200 group"
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-200"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-[17px] text-muted hover:text-text transition-colors duration-200"
                aria-label="View résumé PDF (opens in new tab)"
              >
                Résumé
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yousafzeb-byte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-sans text-[17px] text-muted hover:text-text transition-colors duration-200"
                aria-label="GitHub profile (opens in new tab)"
              >
                GitHub
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="md:hidden text-text hover:text-accent transition-colors duration-200 p-1 -mr-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-30 bg-canvas flex flex-col justify-center px-10 pt-16"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeMenu();
            }}
          >
            <ul className="flex flex-col gap-6" role="list">
              {NAV_LINKS.map(({ label, href }, i) => (
                <li key={href}>
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={href}
                    onClick={closeMenu}
                    className="font-display text-5xl text-text hover:text-accent transition-colors duration-200 block"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-3 font-display text-5xl text-text hover:text-accent transition-colors duration-200"
                  aria-label="View résumé PDF (opens in new tab)"
                >
                  Résumé
                  <ArrowUpRight size={28} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yousafzeb-byte"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-3 font-display text-5xl text-text hover:text-accent transition-colors duration-200"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  GitHub
                  <ArrowUpRight size={28} aria-hidden="true" />
                </a>
              </li>
            </ul>

            <p className="absolute bottom-10 left-10 font-mono text-xs text-muted tracking-[0.2em] uppercase">
              Full-Stack Engineer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
