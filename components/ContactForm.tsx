"use client";

import { useState } from "react";
import { Arrow } from "./icons";

const servicesList = [
  "General inquiry",
  "Sustainability consulting",
  "ESG strategy & reporting",
  "Carbon footprint assessment",
  "Renewable energy advisory",
  "Partnership opportunities",
  "Press inquiry",
  "Careers",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-card">
        <h3>Thank you</h3>
        <p className="form-ok">
          Your message has been received. Someone from our team will get back to you within two
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" required placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="jane@company.com" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" placeholder="Company name" />
        </div>
        <div className="field">
          <label htmlFor="service">How can we help?</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Choose a topic…
            </option>
            {servicesList.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="Tell us a little about your goals…" />
      </div>
      <span className="consent">We only use your details to respond to your request.</span>
      <button type="submit" className="btn" style={{ alignSelf: "flex-start" }}>
        Send message <Arrow />
      </button>
    </form>
  );
}
