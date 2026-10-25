import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { makeVariants } from "../../lib/motion";

/* ── Flow-Pilot: execution log preview ─────────────────────────── */
const LOG_ENTRIES = [
  { t: "12:34:01", ok: false, msg: "Trigger initialized" },
  { t: "12:34:01", ok: false, msg: "Sending to AI process..." },
  { t: "12:34:02", ok: false, msg: "Awaiting GPT-4o-mini response" },
  { t: "12:34:03", ok: true, msg: "AI response parsed (847ms)" },
  { t: "12:34:03", ok: false, msg: "Validating Pydantic schema" },
  { t: "12:34:03", ok: true, msg: "Schema validation passed" },
  { t: "12:34:03", ok: false, msg: "Broadcasting via WebSocket" },
  { t: "12:34:03", ok: true, msg: "Workflow complete" },
];

function FlowPilotLog() {
  return (
    <div
      className="w-full rounded-lg border border-border overflow-hidden bg-[#0D0D0D]"
      aria-label="Flow-Pilot execution log example"
    >
      <div className="flex items-center gap-2 px-3 h-8 border-b border-border/50 bg-surface/70">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="block w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="block w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="block w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <span className="flex-1 text-center font-mono text-[10px] text-muted/70 tracking-wide">
          execution log
        </span>
        <span className="font-mono text-[10px] text-accent">● Complete</span>
      </div>
      <div className="p-4 space-y-1.5 font-mono text-[11px]" role="log">
        {LOG_ENTRIES.map((e, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-muted/55 shrink-0">[{e.t}]</span>
            <span className={e.ok ? "text-accent" : "text-muted/65"}>
              {e.ok ? "✓" : "→"}
            </span>
            <span className={e.ok ? "text-text/80" : "text-muted/65"}>
              {e.msg}
            </span>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-border/20 flex justify-between">
          <span className="text-muted/55">Duration: 1842ms</span>
          <span className="text-accent">● 4/4 nodes complete</span>
        </div>
      </div>
    </div>
  );
}

/* ── AI Business Assistant: analysis result preview ─────────────── */
const AI_RECORDS = [
  { name: "Q3 Sales Report.pdf", category: "Finance", status: "analysed" },
  { name: "Vendor Contract.docx", category: "Legal", status: "analysed" },
  { name: "Hiring Brief.pdf", category: "HR", status: "pending" },
] as const;

const AI_INSIGHTS = [
  { label: "Revenue", value: "↑ 12% YoY — Q3 target exceeded" },
  { label: "Top Region", value: "APAC at +24% growth" },
  { label: "Risk Flag", value: "Clause 7.3 requires legal review" },
  { label: "Action", value: "Revise pricing strategy before Q4" },
] as const;

function AIAssistantPreview() {
  return (
    <div
      className="w-full rounded-lg border border-border overflow-hidden bg-[#0D0D0D]"
      aria-label="AI Business Assistant record analysis example"
    >
      {/* Chrome */}
      <div className="flex items-center px-4 h-8 border-b border-border/50 bg-surface/70 gap-3">
        <span className="font-mono text-[10px] text-muted/70 tracking-wide">
          ai business assistant
        </span>
        <span className="ml-auto font-mono text-[10px] text-accent">
          ● GPT-4o-mini
        </span>
      </div>

      {/* Records list */}
      <div className="divide-y divide-border/10">
        {AI_RECORDS.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface/20 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[11px] text-text/75 truncate">{r.name}</p>
              <p className="font-mono text-[10px] text-muted/55">{r.category}</p>
            </div>
            <span
              className={`font-mono text-[10px] shrink-0 px-2 py-0.5 rounded-sm ${
                r.status === "analysed"
                  ? "text-accent bg-accent/10"
                  : "text-muted/55 bg-surface/60"
              }`}
            >
              {r.status === "analysed" ? "✓ Analysed" : "⋯ Pending"}
            </span>
          </div>
        ))}
      </div>

      {/* AI insight panel */}
      <div className="px-4 pt-3 pb-3 border-t border-border/30 bg-surface/20">
        <p className="font-mono text-[10px] text-accent tracking-[0.15em] uppercase mb-2.5">
          AI Insight — Q3 Sales Report
        </p>
        <div className="space-y-2">
          {AI_INSIGHTS.map((ins) => (
            <div key={ins.label} className="flex gap-2 font-mono text-[11px]">
              <span className="text-muted/50 shrink-0 w-20">{ins.label}</span>
              <span className="text-text/70">{ins.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-border/20 flex justify-between font-mono text-[10px]">
        <span className="text-muted/55">36 tests · JWT + Redis</span>
        <span className="text-muted/55">Docker · CI/CD</span>
      </div>
    </div>
  );
}

/* ── E-Commerce: product grid preview ──────────────────────────── */
const PRODUCTS = [
  { name: "Wireless Headphones", price: "$89.99", stars: 4 },
  { name: "Mechanical Keyboard", price: "$129.99", stars: 5 },
  { name: "USB-C Hub", price: "$49.99", stars: 4 },
  { name: "Monitor Arm", price: "$79.99", stars: 4 },
] as const;

function ProductPreview() {
  return (
    <div
      className="w-full rounded-lg border border-border overflow-hidden bg-[#0D0D0D]"
      aria-label="Advanced E-Commerce UI preview"
    >
      <div className="flex items-center gap-3 px-4 h-9 border-b border-border/50 bg-surface/70">
        <span className="font-mono text-[10px] text-muted/70">Products</span>
        {(["All", "Electronics", "Accessories"] as const).map((f, i) => (
          <span
            key={f}
            className={`font-mono text-[10px] px-2 py-0.5 rounded-sm ${i === 0 ? "bg-accent/15 text-accent" : "text-muted/55"}`}
          >
            {f}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10px] text-muted/55">
          4 items
        </span>
      </div>
      <div className="grid grid-cols-2 divide-x divide-y divide-border/10">
        {PRODUCTS.map((p) => (
          <div
            key={p.name}
            className="p-4 hover:bg-surface/20 transition-colors"
          >
            <div
              className="h-16 bg-surface/40 rounded-sm mb-3 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-10 h-10 bg-border/20 rounded-sm" />
            </div>
            <p className="font-sans text-[11px] text-text/80 mb-1 leading-tight">
              {p.name}
            </p>
            <p className="font-mono text-sm text-accent">{p.price}</p>
            <div
              className="flex gap-0.5 mt-1.5"
              aria-label={`${p.stars} of 5 stars`}
            >
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className={`text-[10px] ${s <= p.stars ? "text-accent" : "text-border"}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Visuals map ────────────────────────────────────────────────── */
const VISUALS: Record<string, React.ReactNode> = {
  "flow-pilot": <FlowPilotLog />,
  "ai-business-assistant": <AIAssistantPreview />,
  "advanced-ecommerce": <ProductPreview />,
};

/* ── Work section ───────────────────────────────────────────────── */
export function Work() {
  const reduceMotion = useReducedMotion();
  const { container, item } = makeVariants(reduceMotion);

  return (
    <section
      id="work"
      className="px-6 md:px-10 py-12 md:py-16 max-w-6xl mx-auto"
      aria-labelledby="work-heading"
    >
      <SectionLabel number="01" label="Selected Work" />
      <h2 id="work-heading" className="sr-only">
        Selected Work
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="space-y-4"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            variants={item}
            className="w-full border border-border hover:border-border/80 transition-colors duration-300 overflow-hidden"
            aria-labelledby={`project-${project.id}-title`}
          >
            {/* Card header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-surface/30">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent/50 tracking-[0.2em]">
                  {project.number}
                </span>
                {index === 0 && (
                  <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5 tracking-[0.15em] uppercase">
                    Featured
                  </span>
                )}
              </div>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
                aria-label={`View ${project.title} on GitHub (opens in new tab)`}
              >
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>

            {/* Card body */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: text */}
              <div className="min-w-0 p-6 md:p-8 md:border-r border-border/40">
                <h3
                  id={`project-${project.id}-title`}
                  className="font-display text-3xl md:text-[2.2rem] text-text leading-tight mb-2"
                >
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-muted/80 tracking-[0.15em] uppercase mb-5">
                  {project.tagline}
                </p>
                <p className="font-sans text-sm md:text-[15px] text-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                <ul
                  className="space-y-2 mb-6"
                  aria-label={`${project.title} highlights`}
                >
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 font-sans text-sm text-muted"
                    >
                      <span
                        className="mt-[0.45rem] h-1 w-1 rounded-full bg-accent/50 shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div
                  className="flex flex-wrap gap-2"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted/80 border border-border/50 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: visual */}
              <div className="min-w-0 p-6 md:p-8 bg-surface/10 flex flex-col justify-center">
                <p className="font-mono text-[10px] text-muted/55 uppercase tracking-[0.18em] mb-3">
                  {index === 0
                    ? "Execution log"
                    : index === 1
                      ? "AI analysis"
                      : "UI preview"}
                </p>
                {VISUALS[project.id]}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
