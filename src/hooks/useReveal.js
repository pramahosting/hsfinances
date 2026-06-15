import { useEffect } from "react";

/**
 * useReveal — attaches an IntersectionObserver to every .reveal element
 * in the current render and adds .visible when they enter the viewport.
 * Safe to call multiple times; each call creates its own observer scoped
 * to the elements present at mount time.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
