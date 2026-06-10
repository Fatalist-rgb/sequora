import Link from "next/link";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { Arrow, Check } from "./icons";
import {
  trustLine,
  companyLogos,
  services as allServices,
  edgeBullets,
  edgeStats,
  values,
  howItWorks,
  posts,
} from "@/lib/content";

export function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <Reveal as="p">{trustLine}</Reveal>
        <Reveal className="logo-row" delay={120}>
          {companyLogos.map((l) => (
            <img key={l} src={`/img/${l}`} alt="Partner logo" />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesGrid({
  count = 3,
  moreHref = "/services",
}: {
  count?: number;
  moreHref?: string;
}) {
  return (
    <div className="grid-3 svc-grid">
      {allServices.slice(0, count).map((s, idx) => (
        <Reveal key={s.title} className="service-card" delay={idx * 90}>
          <div className="thumb">
            <img src={`/img/${s.image}`} alt={s.title} />
          </div>
          <div className="body">
            <div className="icon">
              <img src={`/img/${s.icon}`} alt="" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <Link href={moreHref} className="text-link">
              Read more <Arrow />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="section bg-warm-200">
      <div className="container edge">
        <div>
          <Reveal className="sec-head">
            <span className="eyebrow">Why Sequora</span>
            <h2>Why teams choose Sequora</h2>
          </Reveal>
          <div className="edge-bullets">
            {edgeBullets.map((b, i) => (
              <Reveal key={b.title} className="edge-bullet" delay={120 + i * 90}>
                <span className="dot">
                  <Check />
                </span>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="stat-grid" delay={120}>
          {edgeStats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="num">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div>
                <div className="lbl">{s.label}</div>
                <div className="txt">{s.text}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ValuesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="sec-head center">
          <span className="eyebrow">Our values</span>
          <h2>Guided by purpose, driven by impact</h2>
          <p className="lead">
            Real progress comes from pairing thoughtful innovation with everyday responsibility.
          </p>
        </Reveal>
        <div className="grid-4" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
          {values.map((v, i) => (
            <Reveal key={v.title} className="value-card" delay={i * 90}>
              <div className="icon">
                <img src={`/img/${v.icon}`} alt="" />
              </div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
              <Link href="/about" className="text-link">
                Learn more <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section bg-green-100">
      <div className="container">
        <div className="split-head">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>A clear path from insight to impact</h2>
          </div>
          <div className="right">
            <p className="lead">
              We simplify every step of your sustainability workflow — from understanding your data
              to taking confident action.
            </p>
            <div className="btn-row">
              <Link href="/about" className="btn btn-ghost">
                More about us
              </Link>
              <Link href="/contact" className="btn">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="work-grid">
          {howItWorks.map((w, i) => (
            <Reveal key={w.step} className="work-card" delay={i * 80}>
              <div className="icon">
                <img src={`/img/${w.icon}`} alt="" />
              </div>
              <span className="step">{w.step}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogTeaser() {
  return (
    <section className="section bg-cream-100">
      <div className="container">
        <div className="split-head">
          <div className="sec-head">
            <span className="eyebrow">Insights &amp; resources</span>
            <h2>Latest perspectives on sustainability</h2>
          </div>
          <div className="right">
            <p className="lead">
              Ideas, updates, and practical thinking for teams building a lower-carbon future.
            </p>
            <Link href="/blog" className="text-link">
              View all articles <Arrow />
            </Link>
          </div>
        </div>
        <div className="grid-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} className="blog-card" delay={i * 90}>
              <div className="thumb">
                <img src={`/img/${p.thumb}`} alt={p.title} />
              </div>
              <div className="body">
                <div className="blog-meta">
                  <span className="cat">{p.category}</span>
                  <span>{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-panel">
          <img className="bg" src="/img/cta-image.webp" alt="" />
          <div className="veil" />
          <div className="cta-inner">
            <h2>Here whenever you&apos;re ready to start</h2>
            <p>Reach out for a quick conversation with someone on our team.</p>
            <Link href="/contact" className="btn btn-light">
              Talk to the team <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
