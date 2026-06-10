"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll reveal: adds `is-visible` when the element enters the viewport.
 * Uses IntersectionObserver with a synchronous rect check + scroll fallback,
 * so it works reliably across browsers and constrained renderers.
 */
export default function Reveal({ children, delay = 0, as, className = "" }: Props) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      el.classList.add("is-visible");
      cleanup();
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 60 && r.bottom > 0) show();
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && show()),
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      io.observe(el);
    }
    const cleanup = () => {
      io?.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearInterval(timer);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const timer = setInterval(check, 300);
    check();

    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
