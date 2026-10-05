import { useState, useEffect } from "react";
import { FEATURED, VIDEOS } from "../data.js";

const embed = (id, extra = "") =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1${extra}`;

export default function Video() {
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e) => e.key === "Escape" && setPlaying(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section>
      <h1>Video</h1>
      <p className="sub">Live clips, recaps, and tour diaries.</p>

      <div className="feat">
        <iframe src={embed(FEATURED.id)} title={FEATURED.title} loading="lazy"
          allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      </div>

      <div className="vgrid">
        {VIDEOS.map((v, i) => (
          <button key={i} className="vid" onClick={() => setPlaying(v)}>
            <div className="th">
              <img loading="lazy" src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt="" />
              <span className="play" />
            </div>
            <strong>{v.title}</strong><br /><small>{v.note}</small>
          </button>
        ))}
      </div>

      {playing && (
        <div className="ov" role="dialog" aria-modal="true" aria-label="Video player"
             onClick={(e) => e.target === e.currentTarget && setPlaying(null)}>
          <button className="x" aria-label="Close" onClick={() => setPlaying(null)}>&times;</button>
          <div className="vwrap">
            <iframe src={embed(playing.id, "&autoplay=1")} title={playing.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}
