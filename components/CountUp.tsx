"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; prefix?: string; duration?: number };

export default function CountUp({ value, suffix = "", prefix = "", duration = 1600 }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (ran.current) return;
      ran.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(value * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) run();
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && run()), {
        threshold: 0.3,
      });
      io.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    const timer = setInterval(check, 300);
    check();
    // hard fallback so the value is never stuck at 0
    const safety = setTimeout(() => setDisplay(value), 2500);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", check);
      clearInterval(timer);
      clearTimeout(safety);
    };
  }, [value, duration]);

  const rounded = Math.round(display);
  return (
    <span ref={ref}>
      {prefix}
      {rounded}
      {suffix}
    </span>
  );
}
