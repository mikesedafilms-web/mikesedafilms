import { useState } from "react";
import { TIERS, CONTACT } from "../data.js";

export default function Booking() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus("Sending...");
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("Request sent. I'll reply within 48 hours.");
    } catch {
      setStatus(`That didn't send. Please email ${CONTACT.email} directly.`);
    }
  }

  return (
    <section>
      <h1>Services &amp; Booking</h1>
      <p className="sub">Pick a package, tell me about your show, and I'll reply within 48 hours.</p>

      <div className="cols">
        <div>
          {TIERS.map((t) => (
            <div className="tier" key={t.name}>
              <h2>{t.name}</h2>
              <div className="price">{t.price}</div>
              <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>

        <div>
          <h2>Send a booking request</h2>
          <form onSubmit={onSubmit}>
            <label>Your name<input name="name" required autoComplete="name" /></label>
            <label>Band / management<input name="band" /></label>
            <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            <label>Package
              <select name="package">
                {TIERS.map((t) => <option key={t.name}>{t.name}</option>)}
                <option>Custom / not sure yet</option>
              </select>
            </label>
            <label>Show date and venue<input name="show" placeholder="Oct 24, The Fillmore" /></label>
            <label>Budget and notes<textarea name="notes" /></label>
            <button className="btn" type="submit">Send request</button>
            <p className="status" role="status">{status}</p>
          </form>

          <p className="contact">
            Prefer email? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
            Instagram: <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">{CONTACT.handle}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
