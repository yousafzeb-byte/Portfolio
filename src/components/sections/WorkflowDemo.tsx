import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCcw,
} from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

type NodeId = "trigger" | "ai" | "validate" | "output";
type Status = "idle" | "running" | "complete";

const NODES: Array<{
  id: NodeId;
  label: string;
  sub: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  detail: string;
}> = [
  {
    id: "trigger",
    label: "Trigger",
    sub: "New Request",
    Icon: Zap,
    detail:
      "Receives incoming request and initializes execution context with request metadata and workflow configuration.",
  },
  {
    id: "ai",
    label: "AI Process",
    sub: "GPT-4o-mini",
    Icon: Cpu,
    detail:
      "Sends a structured prompt to OpenAI API and parses the returned JSON into a validated workflow graph with typed nodes and edges.",
  },
  {
    id: "validate",
    label: "Validate",
    sub: "Schema Check",
    Icon: ShieldCheck,
    detail:
      "Validates node outputs against Pydantic schemas, enforces conditional branching rules, and handles edge cases gracefully.",
  },
  {
    id: "output",
    label: "Complete",
    sub: "Result Ready",
    Icon: CheckCircle2,
    detail:
      "Broadcasts completion event via WebSocket, persists execution log to PostgreSQL, and triggers downstream callbacks.",
  },
];

const STEPS: Array<{ node: NodeId; ms: number }> = [
  { node: "trigger", ms: 600 },
  { node: "ai", ms: 1400 },
  { node: "validate", ms: 900 },
  { node: "output", ms: 500 },
];

export function WorkflowDemo() {
  const reduceMotion = useReducedMotion();
  const abortRef = useRef(false);

  const [status, setStatus] = useState<Status>("idle");
  const [active, setActive] = useState<NodeId | null>(null);
  const [done, setDone] = useState<Set<NodeId>>(new Set());
  const [edges, setEdges] = useState<Set<number>>(new Set());
  const [selected, setSelected] = useState<NodeId | null>(null);

  const sleep = useCallback(
    (ms: number) =>
      new Promise<void>((r) =>
        setTimeout(r, reduceMotion ? Math.min(ms, 60) : ms),
      ),
    [reduceMotion],
  );

  const run = useCallback(async () => {
    if (status === "running") return;
    abortRef.current = false;
    setStatus("running");
    setActive(null);
    setDone(new Set());
    setEdges(new Set());
    setSelected(null);

    for (let i = 0; i < STEPS.length; i++) {
      if (abortRef.current) return;
      const { node, ms } = STEPS[i];
      setActive(node);
      await sleep(ms);
      if (abortRef.current) return;
      setActive(null);
      setDone((prev) => new Set([...prev, node]));
      if (i < STEPS.length - 1) {
        await sleep(160);
        if (abortRef.current) return;
        setEdges((prev) => new Set([...prev, i]));
        await sleep(220);
      }
    }

    if (!abortRef.current) setStatus("complete");
  }, [status, sleep]);

  const reset = useCallback(() => {
    abortRef.current = true;
    setStatus("idle");
    setActive(null);
    setDone(new Set());
    setEdges(new Set());
    setSelected(null);
    setTimeout(() => {
      abortRef.current = false;
    }, 100);
  }, []);

  const selectedNode = selected ? NODES.find((n) => n.id === selected) : null;

  return (
    <div
      className="w-full rounded-lg border border-border overflow-hidden bg-[#0D0D0D]"
      role="region"
      aria-label="Flow-Pilot interactive workflow demonstration"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 px-4 h-9 border-b border-border bg-surface/80">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="block w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="block w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="flex-1 text-center font-mono text-[11px] text-muted/80 tracking-wide">
          flow-pilot — workflow editor
        </span>
        <span
          className={`font-mono text-[11px] transition-colors duration-500 ${
            status === "complete"
              ? "text-accent"
              : status === "running"
                ? "text-[#ffbd2e]"
                : "text-muted/50"
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {status === "complete"
            ? "● Done"
            : status === "running"
              ? "● Running"
              : "○ Idle"}
        </span>
      </div>

      {/* Canvas */}
      <div className="px-5 py-7">
        <p className="font-mono text-[10px] text-muted/80 uppercase tracking-[0.18em] mb-5">
          AI Generation Pipeline
        </p>

        {/* Node row — scrollable on narrow screens */}
        <div
          className="flex items-center overflow-x-auto pb-1"
          role="list"
          aria-label="Workflow nodes"
        >
          {NODES.map((node, i) => {
            const isActive = active === node.id;
            const isComplete = done.has(node.id);
            const isSelected = selected === node.id;
            const edgeDone = i < 3 && edges.has(i);

            return (
              <div
                key={node.id}
                className="flex items-center flex-1"
                role="listitem"
              >
                {/* Node wrapper */}
                <div
                  className="relative flex flex-col items-center"
                  style={{ minWidth: 64 }}
                >
                  {/* Pulse ring */}
                  {isActive && !reduceMotion && (
                    <motion.span
                      className="absolute rounded-xl border border-accent pointer-events-none"
                      style={{ inset: "-4px" }}
                      initial={{ opacity: 0.7, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <button
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      isComplete
                        ? "border-accent bg-accent/10 text-accent"
                        : isActive
                          ? "border-accent/50 bg-accent/5 text-text"
                          : isSelected
                            ? "border-border text-muted bg-surface"
                            : "border-border/40 bg-surface/50 text-muted/80 hover:border-border hover:text-muted"
                    }`}
                    onClick={() => setSelected(isSelected ? null : node.id)}
                    aria-label={`${node.label}: ${node.sub}. Click to ${isSelected ? "hide" : "view"} details.`}
                    aria-expanded={isSelected}
                  >
                    <node.Icon size={18} aria-hidden="true" />
                  </button>

                  <p
                    className={`mt-2 font-mono text-[10px] text-center leading-none transition-colors duration-300 ${
                      isComplete
                        ? "text-accent"
                        : isActive
                          ? "text-text"
                          : "text-muted"
                    }`}
                  >
                    {node.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-muted/80 text-center leading-none">
                    {node.sub}
                  </p>
                </div>

                {/* Connector — not after the last node */}
                {i < NODES.length - 1 && (
                  <div
                    className="flex-1 relative mx-2 flex items-center h-4"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-border/20" />
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-accent"
                      style={{ right: 6, transformOrigin: "0% 50%" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: edgeDone ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "linear" }}
                    />
                    {/* Arrowhead */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: `5px solid ${edgeDone ? "var(--color-accent)" : "rgba(255,255,255,0.07)"}`,
                        borderTop: "3px solid transparent",
                        borderBottom: "3px solid transparent",
                        transition: "border-left-color 0.3s",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Node detail panel */}
        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              key={selectedNode.id}
              className="mt-5 border border-border/40 bg-surface/30 rounded-lg px-4 py-3"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-1.5">
                    {selectedNode.label}
                    <span className="text-muted/70 ml-2 normal-case tracking-normal">
                      · {selectedNode.sub}
                    </span>
                  </p>
                  <p className="font-sans text-xs text-muted leading-relaxed max-w-xs">
                    {selectedNode.detail}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted/50 hover:text-text transition-colors text-sm leading-none shrink-0"
                  aria-label="Close node detail"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-border/40 bg-surface/20">
        <p
          className="font-mono text-[11px] text-muted/80 truncate"
          aria-live="polite"
        >
          {status === "running" && active
            ? `Processing: ${NODES.find((n) => n.id === active)?.label}…`
            : status === "complete"
              ? "✓ All nodes executed successfully"
              : "Click any node to inspect"}
        </p>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          {status !== "idle" && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-muted hover:text-text border border-border/50 hover:border-border px-2.5 py-1.5 rounded-md transition-all duration-150"
              aria-label="Reset workflow"
            >
              <RotateCcw size={10} aria-hidden="true" />
              Reset
            </button>
          )}
          <button
            onClick={run}
            disabled={status === "running"}
            className={`inline-flex items-center gap-1 font-mono text-[11px] border px-2.5 py-1.5 rounded-md transition-all duration-150 ${
              status === "running"
                ? "border-border/30 text-muted/60 cursor-not-allowed"
                : "border-accent text-accent hover:bg-accent hover:text-canvas"
            }`}
            aria-label={
              status === "running" ? "Workflow is running" : "Run the workflow"
            }
          >
            <Play size={10} aria-hidden="true" />
            {status === "running" ? "Running…" : "Run Workflow"}
          </button>
        </div>
      </div>
    </div>
  );
}
