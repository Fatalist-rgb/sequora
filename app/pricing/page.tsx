import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { Check, Arrow } from "@/components/icons";
import { Trust, WhyChoose, CtaSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, simple pricing for sustainability teams. Start small and scale as you grow — measurement, reporting, and strategy tools on every plan.",
};

const plans = [
  {
    name: "Starter",
    price: "$29",
    desc: "Perfect for small teams beginning their sustainability workflow.",
    cta: "Get started",
    popular: false,
    features: ["Core impact measurement", "Simple dashboards", "3 team members", "Essential reports", "Email support"],
  },
  {
    name: "Growth",
    price: "$129",
    desc: "Ideal for organizations ready to scale their sustainability efforts.",
    cta: "Get started",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced measurement tools",
      "Automated reporting",
      "10 team members",
      "Planning & strategy tools",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    price: "$229",
    desc: "Best for large teams needing deeper insight and full support.",
    cta: "Talk to sales",
    popular: false,
    features: [
      "Everything in Growth",
      "Unlimited team members",
      "Custom dashboards",
      "Detailed performance tracking",
      "Personalized onboarding",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero center bg-warm-200">
        <div className="container inner">
          <Reveal as="span" className="eyebrow">
            Pricing
          </Reveal>
          <Reveal as="h1" delay={80}>
            Clear plans. No complexity.
          </Reveal>
          <Reveal as="p" className="lead" delay={160}>
            Choose the setup that fits your team today — and upgrade whenever you&apos;re ready.
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "clamp(20px,3vw,40px)" }}>
        <div className="container">
          <div className="price-grid">
            {plans.map((p, i) => (
              <Reveal key={p.name} className={`price-card ${p.popular ? "popular" : ""}`} delay={i * 100}>
                {p.popular && <span className="badge">Most popular</span>}
                <h3>{p.name}</h3>
                <div className="price">
                  <span className="amt">{p.price}</span>
                  <span className="per">/ per month</span>
                </div>
                <span className="billed">Billed monthly. Cancel anytime.</span>
                <p className="desc">{p.desc}</p>
                <ul className="feat">
                  <li className="h">Includes:</li>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${p.popular ? "btn-light" : ""}`}>
                  {p.cta} <Arrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Trust />
      <WhyChoose />

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

      <CtaSection />
    </>
  );
}
