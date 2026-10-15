import { KIT, CONTACT, ABOUT_MAIN, ABOUT_EXTRA } from "../data.js";

export default function About() {
  return (
    <section className="about">
      <div>
        {ABOUT_MAIN ? (
          <img className="ph" src={ABOUT_MAIN} alt="Michael Seda" />
        ) : (
          <div className="ph" aria-hidden="true" />
        )}
        {ABOUT_EXTRA.length > 0 && (
          <div className="pics">
            {ABOUT_EXTRA.map((s) => (
              <img className="ph" key={s} src={s} alt="" />
            ))}
          </div>
        )}
      </div>

      <div>
        <h1>About</h1>
        <p>
          I am a concert photographer and videographer specializing in DIY
          basements, packed club floors, and festival pits. I focus on capturing
          raw live energy—sweat, stage dives, feedback, and the connection
          between the band and the room.
        </p>
        <p>
          Whether tracking a full tour stop or capturing an intimate release
          show, I work quickly and inconspicuously in low-light environments.
          Fast turnaround on social assets is standard so bands have media ready
          to post the morning after the show.
        </p>
        <h2>Kit</h2>
        <ul className="kit">
          {KIT.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
        <p>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          {" / "}
          <a href={`mailto:${CONTACT.email}`}>Email</a>
        </p>
      </div>
    </section>
  );
}
