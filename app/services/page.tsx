import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Services",
  description:
    "Structured, easy-to-implement sustainability services — from emissions insight and ESG strategy to renewable energy advisory and automated reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero center bg-green-100">
        <img className="shape s1" src="/img/service-hero-shap1.svg" alt="" />
        <img className="shape s2" src="/img/service-hero-shap2.svg" alt="" />
        <div className="container inner">
          <Reveal as="span" className="eyebrow">
            Our services
          </Reveal>
          <Reveal as="h1" delay={80}>
            Clear, practical support for your sustainability goals
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            We offer structured, easy-to-implement services that help organizations understand their
            impact and act on it with confidence.
          </Reveal>
          <Reveal delay={240}>
            <Link href="/contact" className="btn">
              Book a consultation <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <Trust />

      {/* services grid */}
      <section className="section">
        <div className="container">
          <div className="split-head">
            <div className="sec-head">
              <span className="eyebrow">What we offer</span>
              <h2>Services that turn insight into action</h2>
            </div>
            <div className="right">
              <p className="lead">
                From environmental assessment to strategy and reporting, our services are built to
                make progress practical and measurable.
              </p>
              <Link href="/contact" className="btn">
                Book a consultation
              </Link>
            </div>
          </div>
          <ServicesGrid count={6} moreHref="/contact" />
        </div>
      </section>

      <WhyChoose />
      <ValuesSection />

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

      <HowItWorks />

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
