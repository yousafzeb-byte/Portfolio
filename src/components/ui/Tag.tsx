interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block font-mono text-xs text-muted border border-border px-2 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
}
