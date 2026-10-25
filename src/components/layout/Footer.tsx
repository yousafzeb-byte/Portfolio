export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Yousaf Zeb. Designed &amp; built by hand.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/yousaf-zeb-5122702a7"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/yousafzeb-byte"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
          aria-label="View source on GitHub (opens in new tab)"
        >
          GitHub →
        </a>
      </div>
    </footer>
  );
}
