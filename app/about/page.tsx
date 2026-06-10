import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { Arrow } from "@/components/icons";
import { Trust, ValuesSection, BlogTeaser, CtaSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sequora helps teams move toward a cleaner future with simple tools, clear guidance, and structured workflows that make sustainability achievable.",
};

const missionStats = [
  { num: "1.9M+ kg", lbl: "Impact tracked", txt: "Environmental impact measured across teams of every size." },
  { num: "6+", lbl: "Years of impact", txt: "Consistent progress supported by clear, reliable tools." },
  { num: "24k+", lbl: "Businesses", txt: "Organizations adopting simple, scalable sustainability practices." },
  { num: "740k+", lbl: "Actions logged", txt: "Steps taken toward cleaner, more responsible operations." },
];

const team = [
  { img: "team-image1.webp", name: "Elena Vance", role: "Head of Sustainability", bio: "Leads long-term planning with a focus on clarity, structure, and measurable outcomes." },
  { img: "team-image2.webp", name: "Marcus Cole", role: "Data & Insight Analyst", bio: "Turns complex environmental data into clear, practical insight for better decisions." },
  { img: "team-image3.webp", name: "Sofia Reyes", role: "Experience Design Lead", bio: "Crafts intuitive workflows that make sustainability accessible at every level." },
  { img: "team-image4.webp", name: "Oliver Bennett", role: "Implementation Director", bio: "Ensures smooth onboarding and helps teams turn plans into real action." },
  { img: "team-image5.webp", name: "Amelia Frost", role: "Innovation Researcher", bio: "Explores emerging trends and approaches to keep our methods effective." },
  { img: "team-image6.webp", name: "Noah Carter", role: "Client Success Lead", bio: "Supports teams throughout their journey and keeps them aligned and on track." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero on-green center">
        <img className="shape s1" src="/img/about-hero-shap1.svg" alt="" />
        <img className="shape s2" src="/img/about-hero-shap2.svg" alt="" />
        <div className="container inner">
          <Reveal as="span" className="eyebrow on-green">
            About us
          </Reveal>
          <Reveal as="h1" delay={80}>
            Helping teams move toward a <span className="accent">cleaner future</span>
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            We support teams with simple tools, clear guidance, and structured workflows that make
            sustainability feel achievable.
          </Reveal>
          <Reveal delay={240}>
            <Link href="/contact" className="btn btn-light">
              Book a free consultation <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <Trust />

      {/* vision */}
      <section className="section bg-warm-200">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Our vision</span>
            <h2>A future where sustainability feels simple for everyone</h2>
            <p className="lead">
              We want to make sustainability accessible and actionable for teams of every size —
              turning complex goals into clear, everyday steps anyone can follow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* mission */}
      <section className="section">
        <div className="container">
          <div className="mission">
            <Reveal className="copy">
              <span className="eyebrow">Our mission</span>
              <h2>Making sustainable progress reachable for every organization</h2>
              <p>
                Our mission is to offer simple tools and dependable support that help teams
                understand their impact and act with confidence.
              </p>
              <p>
                We focus on a smoother, clearer path to sustainability — one that works for everyday
                operations, not just for specialists.
              </p>
            </Reveal>
            <Reveal className="mstat-grid" delay={120}>
              {missionStats.map((s) => (
                <div className="mstat" key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                  <div className="txt">{s.txt}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* story */}
      <section className="section bg-granny">
        <div className="container">
          <div className="story">
            <Reveal className="visual">
              <img src="/img/our-story-image.webp" alt="Our story" />
            </Reveal>
            <Reveal className="copy" delay={120}>
              <span className="eyebrow">Our story</span>
              <h2>Our story</h2>
              <p>
                We started with a simple belief: sustainability shouldn&apos;t feel complex or
                overwhelming. Too many teams were stuck juggling scattered tools and unclear data.
              </p>
              <p>
                Our approach brings everything together — insight, planning, reporting, and
                improvement — in one clear place.
              </p>
              <p>
                Today we help companies of every size take practical steps that lead to measurable
                environmental progress.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ValuesSection />

      {/* team */}
      <section className="section bg-white">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Our team</span>
            <h2>Meet the team turning ambition into action</h2>
            <p className="lead">
              A group that pairs thoughtful innovation with everyday responsibility.
            </p>
          </Reveal>
          <div className="team-grid" style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            {team.map((m, i) => (
              <Reveal className="team-card" key={m.name} delay={i * 70}>
                <div className="photo">
                  <img src={`/img/${m.img}`} alt={m.name} />
                </div>
                <div>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                  <p className="bio">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="section bg-green-100">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by teams moving toward a cleaner future</h2>
          </Reveal>
          <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
          </Reveal>
          <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            <Faq />
          </div>
        </div>
      </section>

      <BlogTeaser />
      <CtaSection />
    </>
  );
}
