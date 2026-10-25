interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({
  number,
  label,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <span className="font-mono text-xs text-accent tracking-[0.2em]">
        {number}
      </span>
      <div className="h-px w-8 bg-border" aria-hidden="true" />
      <span className="font-mono text-xs text-muted tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}
