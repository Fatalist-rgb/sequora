"use client";

import { useRef, useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-wrap">
      {faqs.map((f, idx) => {
        const isOpen = open === idx;
        return (
          <div key={f.q} className={`faq-item ${isOpen ? "open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : idx)}
            >
              {f.q}
              <span className="faq-ico" aria-hidden />
            </button>
            <Answer open={isOpen} text={f.a} />
          </div>
        );
      })}
    </div>
  );
}

function Answer({ open, text }: { open: boolean; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="faq-a"
      style={{ maxHeight: open ? (ref.current?.scrollHeight ?? 400) + "px" : 0 }}
    >
      <div ref={ref}>
        <p>{text}</p>
      </div>
    </div>
  );
}
