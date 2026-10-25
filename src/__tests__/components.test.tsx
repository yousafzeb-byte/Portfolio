import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "../components/ui/Tag";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Footer } from "../components/layout/Footer";
import { projects, skillGroups, principles } from "../data/projects";

/* Mock framer-motion to prevent animation side-effects in tests */
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  const motionProxy = new Proxy(
    {},
    {
      get: (_t, prop: string) => {
        return ({ children, ...rest }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => {
          const {
            initial: _i, animate: _a, exit: _e, variants: _v, whileHover: _wh,
            whileInView: _wiv, viewport: _vp, transition: _t2, style: _s, ...domProps
          } = rest as Record<string, unknown>;
          const El = prop as React.ElementType;
          return React.createElement(El, domProps as Record<string, unknown>, children);
        };
      },
    }
  );
  return {
    ...actual,
    motion: motionProxy,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useReducedMotion: () => false,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
  };
});

/* ---- Tag -------------------------------------------------------- */
describe("Tag", () => {
  it("renders its children", () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies additional className", () => {
    render(<Tag className="custom-class">TypeScript</Tag>);
    expect(screen.getByText("TypeScript")).toHaveClass("custom-class");
  });
});

/* ---- SectionLabel ----------------------------------------------- */
describe("SectionLabel", () => {
  it("renders section number and label", () => {
    render(<SectionLabel number="01" label="Selected Work" />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Selected Work")).toBeInTheDocument();
  });
});

/* ---- Footer ----------------------------------------------------- */
describe("Footer", () => {
  it("renders a GitHub link with correct href", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /source on github/i });
    expect(link).toHaveAttribute("href", "https://github.com/yousafzeb-byte");
  });

  it("opens GitHub link in a new tab", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /source on github/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

/* ---- Project data ----------------------------------------------- */
describe("projects data", () => {
  it("contains exactly three projects", () => {
    expect(projects).toHaveLength(3);
  });

  it("each project has required fields", () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy();
      expect(p.number).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.repoUrl).toMatch(/^https:\/\//);
    }
  });
});

/* ---- SkillGroups data ------------------------------------------- */
describe("skillGroups data", () => {
  it("has at least four categories", () => {
    expect(skillGroups.length).toBeGreaterThanOrEqual(4);
  });

  it("each group has non-empty skills array", () => {
    for (const g of skillGroups) {
      expect(g.skills.length).toBeGreaterThan(0);
    }
  });
});

/* ---- Principles data -------------------------------------------- */
describe("principles data", () => {
  it("has exactly six principles", () => {
    expect(principles).toHaveLength(6);
  });

  it("each principle has id, title, and description", () => {
    for (const p of principles) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
    }
  });
});

/* ---- Footer accessibility --------------------------------------- */
describe("Footer external link accessibility", () => {
  it("GitHub link has accessible label", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toBeInTheDocument();
  });

  it("GitHub link is keyboard-accessible", async () => {
    const user = userEvent.setup();
    render(<Footer />);
    await user.tab();
    const link = screen.getByRole("link", { name: /source on github/i });
    expect(link).toBeInTheDocument();
  });
});
