import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import { BlogTeaser } from "@/components/sections";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sequora team for questions, support, or guidance. We reply with clear, practical next steps.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero bg-granny" style={{ paddingBottom: "clamp(40px,5vw,72px)" }}>
        <div className="container">
          <div className="inner" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>
            <Reveal as="span" className="eyebrow">
              Contact us
            </Reveal>
            <Reveal as="h1" delay={80}>
              We&apos;re here to help you move forward
            </Reveal>
            <Reveal as="p" className="lead" delay={160}>
              Reach out for questions, support, or guidance — we&apos;ll get back to you with clear,
              practical next steps.
            </Reveal>
          </div>

          <div className="contact-grid">
            <Reveal className="info-card">
              <div>
                <h3>Prefer to talk directly?</h3>
                <p style={{ color: "var(--ink-60)", marginTop: 8 }}>
                  We&apos;re available and happy to help.
                </p>
              </div>
              <div className="info-block">
                <div className="k">Phone support hours</div>
                <div className="v">Every day, 8am–8pm ET · Toll-free {site.phone}</div>
              </div>
              <div className="info-block">
                <div className="k">Email us</div>
                <div className="v">{site.email}</div>
                <div className="v" style={{ marginTop: 4 }}>Replies within 2 business days.</div>
              </div>
              <p className="info-note">
                For urgent account issues, call our toll-free line for the fastest response.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
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
    </>
  );
}
