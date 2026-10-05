import { useState, useEffect, useCallback } from "react";
import { PHOTOS } from "../data.js";

const BANDS = ["All", ...new Set(PHOTOS.map((p) => p.band))];

export default function Work() {
  const [band, setBand] = useState("All");
  const [open, setOpen] = useState(null); // index into shown, or null
  const shown = band === "All" ? PHOTOS : PHOTOS.filter((p) => p.band === band);

  const step = useCallback(
    (d) => setOpen((i) => (i === null ? null : (i + d + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open, step]);

  const cur = open !== null ? shown[open] : null;

  return (
    <section>
      <h1>Live music, up close.</h1>
      <p className="sub">Concert and band photography. Filter by artist, tap any photo to view it large.</p>

      <div className="filters" role="group" aria-label="Filter by band">
        {BANDS.map((b) => (
          <button key={b} className={b === band ? "on" : ""} onClick={() => setBand(b)}>{b}</button>
        ))}
      </div>

      <div className="grid">
        {shown.map((p, i) => (
          <button key={p.src} className="tile" onClick={() => setOpen(i)} aria-label={`${p.band} at ${p.venue}`}>
            <img loading="lazy" src={p.src} alt={`${p.band} at ${p.venue}`} />
            <span className="cap">{p.band}<small>{p.venue}, {p.date}</small></span>
          </button>
        ))}
      </div>

      {cur && (
        <div className="ov" role="dialog" aria-modal="true" aria-label="Photo viewer"
             onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button className="x" aria-label="Close" onClick={() => setOpen(null)}>&times;</button>
          <button className="nv pv" aria-label="Previous" onClick={() => step(-1)}>&#8249;</button>
          <button className="nv nx" aria-label="Next" onClick={() => step(1)}>&#8250;</button>
          <img src={cur.src} alt={`${cur.band} at ${cur.venue}`} />
          <div className="meta"><strong>{cur.band}</strong><small>{cur.venue}, {cur.date}</small></div>
        </div>
      )}
    </section>
  );
}
