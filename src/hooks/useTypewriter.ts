"use client";
import { useState, useEffect, useRef } from "react";

const ROLES = [
  "Full Stack Software Engineer",
  "React & TypeScript Developer",
  "Flask & FastAPI Engineer",
  "MBA-Qualified Engineer",
];

type Phase = "typing" | "pausing" | "deleting" | "waiting";

export function useTypewriter() {
  const [display, setDisplay] = useState("");
  const state = useRef<{ roleIdx: number; charIdx: number; phase: Phase }>({
    roleIdx: 0,
    charIdx: 0,
    phase: "typing",
  });

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    function tick() {
      const { roleIdx, charIdx, phase } = state.current;
      const current = ROLES[roleIdx];

      if (phase === "typing") {
        const next = charIdx + 1;
        setDisplay(current.slice(0, next));
        if (next >= current.length) {
          state.current = { roleIdx, charIdx: next, phase: "pausing" };
          timerId = setTimeout(tick, 2200);
        } else {
          state.current = { roleIdx, charIdx: next, phase: "typing" };
          timerId = setTimeout(tick, 70);
        }
      } else if (phase === "pausing") {
        state.current = { roleIdx, charIdx, phase: "deleting" };
        timerId = setTimeout(tick, 30);
      } else if (phase === "deleting") {
        const next = charIdx - 1;
        setDisplay(current.slice(0, next));
        if (next <= 0) {
          const nextRole = (roleIdx + 1) % ROLES.length;
          state.current = { roleIdx: nextRole, charIdx: 0, phase: "waiting" };
          timerId = setTimeout(tick, 350);
        } else {
          state.current = { roleIdx, charIdx: next, phase: "deleting" };
          timerId = setTimeout(tick, 30);
        }
      } else {
        state.current = { ...state.current, phase: "typing" };
        timerId = setTimeout(tick, 70);
      }
    }

    timerId = setTimeout(tick, 800);
    return () => clearTimeout(timerId);
  }, []);

  return display;
}
