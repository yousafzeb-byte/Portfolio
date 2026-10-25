export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Yousaf Zeb. Designed &amp; built by hand.
      </p>
      <a
        href="https://github.com/yousafzeb-byte"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
        aria-label="View source on GitHub (opens in new tab)"
      >
        Source on GitHub →
      </a>
    </footer>
  );
}
