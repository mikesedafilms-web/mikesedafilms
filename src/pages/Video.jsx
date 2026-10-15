import { useState, useEffect } from "react";
import { FEATURED, VIDEOS } from "../data.js";

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

      {/* Featured Video Player */}
      <div className="feat">
        <video
          src={FEATURED.src}
          poster={FEATURED.poster}
          controls
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            background: "#000",
          }}
        />
      </div>

      {/* Video Grid */}
      <div className="vgrid">
        {VIDEOS.map((v, i) => (
          <button key={i} className="vid" onClick={() => setPlaying(v)}>
            <div className="th">
              {v.poster ? (
                <img loading="lazy" src={v.poster} alt={v.title} />
              ) : (
                <video
                  src={v.src}
                  muted
                  preload="metadata"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              <span className="play" />
            </div>
            <strong>{v.title}</strong>
            <br />
            <small>{v.note}</small>
          </button>
        ))}
      </div>

      {/* Modal Lightbox Player */}
      {playing && (
        <div
          className="ov"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={(e) => e.target === e.currentTarget && setPlaying(null)}
        >
          <button
            className="x"
            aria-label="Close"
            onClick={() => setPlaying(null)}
          >
            &times;
          </button>
          <div className="vwrap">
            <video
              src={playing.src}
              controls
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%", background: "#000" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
