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
          TBD. For example what genres and scenes you shoot, how you approach
          stage lighting and pit dynamics, and the tours or publications you've
          covered.
        </p>
        <p>
          MAybe add a second paragraph about how you like to work with bands and
          what they can expect after a show.
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
