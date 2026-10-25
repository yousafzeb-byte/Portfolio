export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8 max-w-6xl mx-auto flex items-center justify-between">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Yousaf Zeb
      </p>
      <span className="font-mono text-xs text-muted/50 tracking-wide">
        React · TypeScript · Tailwind · Framer Motion
      </span>
    </footer>
  );
}
