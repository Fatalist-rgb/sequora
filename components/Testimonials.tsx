"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { ChevLeft, ChevRight } from "./icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = testimonials.length;

  const go = (next: number) => setI(((next % n) + n) % n);

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [n]);

  const reset = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 5500);
  };

  return (
    <div className="tcarousel">
      {testimonials.map((t, idx) => (
        <article key={t.name} className={`tslide ${idx === i ? "active" : ""}`}>
          <div className="qicon">
            <img src={`/img/${t.icon}`} alt="" />
          </div>
          <blockquote>“{t.quote}”</blockquote>
          <div className="who">
            <img src={`/img/${t.image}`} alt={t.name} />
            <div style={{ textAlign: "left" }}>
              <div className="name">{t.name}</div>
              <div className="role">{t.role}</div>
            </div>
          </div>
        </article>
      ))}

      <div className="tnav">
        <button aria-label="Previous" onClick={() => { go(i - 1); reset(); }}>
          <ChevLeft />
        </button>
        <div className="tdots" role="tablist">
          {testimonials.map((t, idx) => (
            <i
              key={t.name}
              className={idx === i ? "on" : ""}
              onClick={() => { go(idx); reset(); }}
              role="tab"
              aria-selected={idx === i}
            />
          ))}
        </div>
        <button aria-label="Next" onClick={() => { go(i + 1); reset(); }}>
          <ChevRight />
        </button>
      </div>
    </div>
  );
}
