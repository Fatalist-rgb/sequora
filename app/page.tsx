import Link from "next/link";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { Arrow } from "@/components/icons";
import {
  Trust,
  ServicesGrid,
  WhyChoose,
  ValuesSection,
  HowItWorks,
  BlogTeaser,
  CtaSection,
} from "@/components/sections";
import { heroImages, aboutLogos } from "@/lib/content";

const strengths = [
  {
    title: "Specialist team",
    text: "Analysts, designers, and advisors focused entirely on environmental progress.",
  },
  {
    title: "Proven methods",
    text: "Structured processes that help you measure, reduce, and communicate impact.",
  },
  {
    title: "End-to-end support",
    text: "From data tracking to strategy, we guide every stage of your journey.",
  },
  {
    title: "Transparent & reliable",
    text: "Every recommendation is backed by clear evidence and consistent review.",
  },
];

export default function Home() {
  const marquee = [...heroImages, ...heroImages];
  return (
    <>
      {/* hero */}
      <section className="hero section" style={{ paddingBottom: 0 }}>
        <div className="hero-inner">
          <Reveal as="span" className="kicker">
            Track <span>·</span> Reduce <span>·</span> Regenerate
          </Reveal>
          <Reveal as="h1" delay={80}>
            Turn climate data into measurable progress
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            Measure what counts, cut what you can, and back verified projects that give back to the
            planet.
          </Reveal>
          <Reveal className="btn-row" delay={240}>
            <Link href="/contact" className="btn">
              Book a free consultation <Arrow />
            </Link>
            <Link href="/services" className="btn btn-ghost">
              Explore services
            </Link>
          </Reveal>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {marquee.map((src, i) => (
              <div className="marquee-item" key={i}>
                <img src={`/img/${src}`} alt="" aria-hidden={i >= heroImages.length} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Trust />

      {/* intro + services */}
      <section className="section">
        <div className="container">
          <div className="split-head">
            <div className="sec-head">
              <span className="eyebrow">What we do</span>
              <h2>Sustainability made simple, transparent, and ready to act on</h2>
            </div>
            <div className="right">
              <p className="lead">
                Sequora brings your environmental data, reduction planning, and reporting into one
                clear workspace — so every team can see impact and act on it.
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
          <ServicesGrid count={3} moreHref="/services" />
        </div>
      </section>

      <WhyChoose />
      <ValuesSection />

      {/* about */}
      <section className="section bg-granny">
        <div className="container">
          <div className="about">
            <Reveal className="copy">
              <span className="eyebrow">About us</span>
              <h2>We help organizations build a greener future</h2>
              <p>
                We partner with forward-thinking businesses to build clear, scalable, and measurable
                sustainability programs.
              </p>
              <div className="strengths">
                {strengths.map((s) => (
                  <div className="strength" key={s.title}>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn">
                More about us <Arrow />
              </Link>
            </Reveal>
            <Reveal className="visual" delay={120}>
              <img src="/img/home-about-image.webp" alt="The Sequora team at work" />
            </Reveal>
          </div>
          <Reveal className="logo-row" delay={120} as="div">
            {aboutLogos.map((l) => (
              <img key={l} src={`/img/${l}`} alt="Partner logo" style={{ marginTop: 48 }} />
            ))}
          </Reveal>
        </div>
      </section>

      <HowItWorks />

      {/* testimonials */}
      <section className="section">
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
      <section className="section bg-cream-100">
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
