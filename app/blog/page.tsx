import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaSection } from "@/components/sections";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and resources from Sequora — articles that simplify complex sustainability topics and help teams make smarter decisions.",
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero center">
        <div className="container inner">
          <Reveal as="span" className="eyebrow">
            Insights &amp; resources
          </Reveal>
          <Reveal as="h1" delay={80}>
            Ideas that move sustainability forward
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            Articles that simplify complex topics and help teams make smarter, more confident
            decisions.
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(12px,2vw,28px)" }}>
        <div className="container">
          <div className="grid-3">
            {posts.map((p, i) => (
              <Reveal key={p.title} className="blog-card" delay={(i % 3) * 90}>
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

      <CtaSection />
    </>
  );
}
