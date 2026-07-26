"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    const els = document.querySelectorAll<Element>(".reveal");

    // Normal scroll-reveal for fresh page loads
    els.forEach((el) => observer.observe(el));

    // After the browser has applied any hash-based scroll, immediately reveal
    // everything that is already in or above the viewport (e.g. after back-navigation)
    const timer = setTimeout(() => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
