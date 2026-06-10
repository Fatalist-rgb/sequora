import Link from "next/link";
import { nav, site, socials } from "@/lib/content";
import { LogoMark, Social } from "./icons";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter">
          <div>
            <h2>Subscribe to our newsletter</h2>
            <p>
              Stay ahead with fresh insight, product updates, and expert tips — straight to your
              inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="foot-cols">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <LogoMark className="mark" />
              {site.name}
            </Link>
            <p>{site.tagline} Climate intelligence and ESG guidance for teams that want to act.</p>
            <div className="foot-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Social name={s.label as never} />
                </a>
              ))}
            </div>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h5>Get in touch</h5>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href="tel:+18001234567">{site.phone}</a>
              </li>
              <li>
                <Link href="/contact">Book a consultation</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 {site.name}. All rights reserved.</span>
          <span className="credit">
            Designed &amp; developed by <b>{site.author}</b>
          </span>
        </div>
      </div>
    </footer>
  );
}
