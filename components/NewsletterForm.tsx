"use client";

import { useState } from "react";
import { Arrow } from "./icons";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="news-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <p className="ok">Thanks — you&apos;re on the list. Look out for our next update.</p>
      ) : (
        <div className="row">
          <input type="email" required placeholder="Enter your email" aria-label="Email address" />
          <button type="submit" className="btn btn-light">
            Subscribe <Arrow />
          </button>
        </div>
      )}
      <span className="note">By subscribing you agree to our privacy policy.</span>
    </form>
  );
}
