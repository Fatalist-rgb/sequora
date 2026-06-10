"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, announcement, site } from "@/lib/content";
import { LogoMark, Arrow } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="announce">
        <div className="container">
          <span className="tag">{announcement.badge}</span>
          <span>{announcement.text}</span>
          <Link href={announcement.href}>
            {announcement.link} <Arrow style={{ width: 13, height: 13 }} />
          </Link>
        </div>
      </div>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <LogoMark className="mark" />
            {site.name}
          </Link>

          <nav className="nav-links">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={pathname === n.href ? "active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="/contact" className="btn">
              Book a consultation
            </Link>
            <button
              className={`burger ${open ? "open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`scrim ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu ${open ? "open" : ""}`}>
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
        <Link href="/contact" className="btn">
          Book a consultation
        </Link>
      </aside>
    </>
  );
}
