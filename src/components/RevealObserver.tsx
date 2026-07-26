"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    // Reveal every .reveal element that is already in or above the viewport
    const revealInView = () => {
      document
        .querySelectorAll<Element>(".reveal:not(.visible)")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add("visible");
            io.unobserve(el);
          }
        });
    };

    const startObserving = (el: Element) => {
      if (!el.classList.contains("visible")) io.observe(el);
    };

    // Observe all .reveal elements already in the DOM
    document.querySelectorAll<Element>(".reveal").forEach(startObserving);

    // Watch for new .reveal elements added during client-side navigation
    const mo = new MutationObserver((mutations) => {
      let found = false;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as Element;
          if (el.classList.contains("reveal")) {
            startObserving(el);
            found = true;
          }
          el.querySelectorAll<Element>(".reveal").forEach((child) => {
            startObserving(child);
            found = true;
          });
        });
      });
      // After new elements are added, check once the browser has applied
      // any hash-based scroll (/#section navigation)
      if (found) {
        setTimeout(revealInView, 150);
        setTimeout(revealInView, 500);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Also reveal in-view elements when scroll settles (hash scroll fires scroll events)
    let scrollTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(revealInView, 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
