/* ==========================================================================
   Michael Seda — portfolio app (no build step; plain JS, hash routing)
   Content lives in data.js. Sections: helpers · overlay · views · router
   ========================================================================== */

/* ---------- Helpers ---------- */

const app = document.getElementById("app");
const $ = (selector, root = document) => root.querySelector(selector);

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Tagged template: every interpolated value is HTML-escaped unless it came from
// another html`` call. Arrays are joined, so .map() results can be dropped in.
class Safe { constructor(markup) { this.markup = markup; } }
const toMarkup = (value) => {
  if (value instanceof Safe) return value.markup;
  if (Array.isArray(value)) return value.map(toMarkup).join("");
  if (value === null || value === undefined || value === false) return "";
  return escapeHtml(value);
};
const html = (strings, ...values) =>
  new Safe(strings.reduce((out, str, i) => out + str + (i < values.length ? toMarkup(values[i]) : ""), ""));

const mount = (view) => { app.innerHTML = toMarkup(view); };

/* ---------- Overlay (shared by photo lightbox and video modal) ---------- */

function closeOverlay() {
  $("#overlay")?.remove();
  document.body.style.overflow = "";
}

function openOverlay(label, content) {
  closeOverlay();
  const el = document.createElement("div");
  el.id = "overlay";
  el.className = "ov";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-label", label);
  el.innerHTML = `<button class="x" aria-label="Close">&times;</button>${toMarkup(content)}`;
  el.addEventListener("click", (e) => (e.target === el || e.target.closest(".x")) && closeOverlay());
  document.body.append(el);
  document.body.style.overflow = "hidden";
  return el;
}

/* ---------- Work (home) ---------- */

const gallery = { band: "All", visible: [], index: 0 };

function GalleryView() {
  const bands = ["All", ...new Set(PHOTOS.map((p) => p.band))];
  gallery.visible = gallery.band === "All" ? PHOTOS : PHOTOS.filter((p) => p.band === gallery.band);

  return html`
    <div class="filters" role="group" aria-label="Filter by band">
      ${bands.map((b) => html`<button class="${b === gallery.band ? "on" : ""}" aria-pressed="${b === gallery.band}" data-band="${b}">${b}</button>`)}
    </div>
    <div class="rows">
      ${gallery.visible.map((p, i) => html`
        <button class="tile" data-index="${i}" aria-label="${p.band} at ${p.venue}">
          <img src="${p.src}" alt="${p.band} at ${p.venue}" decoding="async">
          <span class="cap">${p.band}<small>${p.venue}, ${p.date}</small></span>
        </button>`)}
    </div>`;
}

const WorkView = () => html`
  <section class="hero" aria-label="Introduction">
    <div class="hero-img" style="background-image:url('${HERO}')"></div>
    <div class="hero-inner">
      <h1>Live music,<br>up close.</h1>
      <div class="hero-foot">
        <p class="lede">Concert photography and video from basements, club floors, and festival pits.</p>
        <div class="hero-actions">
          <a class="btn" href="#/booking">Book a show</a>
          <a class="btn ghost" href="#/video">Watch the reels</a>
        </div>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery" aria-label="Photo gallery">${GalleryView()}</section>

  <section class="cta">
    <h2>Playing a show? Let’s shoot it.</h2>
    <a class="btn" href="#/booking">See packages</a>
  </section>`;

function bindGallery() {
  // Size each tile to its photo's real aspect ratio so rows line up edge to edge.
  document.querySelectorAll(".tile img").forEach((img) => {
    const fit = () => img.parentElement.style.setProperty("--r", img.naturalWidth / img.naturalHeight);
    img.complete ? fit() : img.addEventListener("load", fit, { once: true });
  });

  document.querySelectorAll("[data-band]").forEach((btn) =>
    btn.addEventListener("click", () => {
      gallery.band = btn.dataset.band;
      $("#gallery").innerHTML = toMarkup(GalleryView()); // only the gallery re-renders
      bindGallery();
    })
  );
  document.querySelectorAll(".tile").forEach((tile) =>
    tile.addEventListener("click", () => openPhoto(Number(tile.dataset.index)))
  );
}

function showWork() { mount(WorkView()); bindGallery(); }

function openPhoto(index) {
  const { visible } = gallery;
  gallery.index = (index + visible.length) % visible.length;
  const p = visible[gallery.index];
  const el = openOverlay("Photo viewer", html`
    <button class="nv pv" aria-label="Previous">&#8249;</button>
    <button class="nv nx" aria-label="Next">&#8250;</button>
    <img src="${p.src}" alt="${p.band} at ${p.venue}">
    <div class="meta"><strong>${p.band}</strong><small>${p.venue}, ${p.date} · ${gallery.index + 1} / ${visible.length}</small></div>`);
  $(".pv", el).addEventListener("click", () => openPhoto(gallery.index - 1));
  $(".nx", el).addEventListener("click", () => openPhoto(gallery.index + 1));
}

addEventListener("keydown", (e) => {
  if (!$("#overlay")) return;
  if (e.key === "Escape") closeOverlay();
  if (e.key === "ArrowLeft" && $(".pv")) openPhoto(gallery.index - 1);
  if (e.key === "ArrowRight" && $(".nx")) openPhoto(gallery.index + 1);
});

/* ---------- Video ---------- */

const VideoView = () => html`
  <section class="page">
    <h1>Video</h1>
    <p class="lede">Live clips, recaps, and tour diaries.</p>
    <div class="feat">
      <video src="${FEATURED.src}" poster="${FEATURED.poster}" controls playsinline preload="metadata"></video>
    </div>
    <div class="vgrid">
      ${VIDEOS.map((v, i) => html`
        <button class="vid" data-video="${i}">
          <div class="th"><img loading="lazy" src="${v.poster}" alt="${v.title}"><span class="play"></span></div>
          <strong>${v.title}</strong><br><small>${v.note}</small>
        </button>`)}
    </div>
  </section>`;

function bindVideo() {
  document.querySelectorAll("[data-video]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const v = VIDEOS[Number(btn.dataset.video)];
      openOverlay("Video player", html`<div class="vwrap"><video src="${v.src}" controls autoplay playsinline></video></div>`);
    })
  );
}

/* ---------- Booking ---------- */

const BookingView = () => html`
  <section class="page">
    <h1>Services &amp; Booking</h1>
    <p class="lede">Pick a package, tell me about your show, and I’ll reply within 48 hours. <strong>${PRICING_NOTE}</strong></p>

    <div class="tiers">
      ${TIERS.map((t) => html`
        <article class="tier">
          <h2>${t.name}</h2>
          <div class="price">${t.price}</div>
          <ul>${t.items.map((item) => html`<li>${item}</li>`)}</ul>
        </article>`)}
    </div>
    <p class="footnote">${PRICING_FOOTNOTE}</p>

    <div class="booking-grid">
      <div>
        <h2>Send a booking request</h2>
        <form id="booking-form">
          <label>Your name<input name="name" required autocomplete="name"></label>
          <label>Band / management<input name="band"></label>
          <label>Email<input type="email" name="email" required autocomplete="email"></label>
          <label>Package
            <select name="package">
              ${TIERS.map((t) => html`<option>${t.name}</option>`)}
              <option>Custom / not sure yet</option>
            </select>
          </label>
          <label class="full">Show date and venue<input name="show" placeholder="Oct 24, The Fillmore"></label>
          <label class="full">Budget and notes<textarea name="notes"></textarea></label>
          <button class="btn" type="submit">Send request</button>
          <p class="status" role="status"></p>
        </form>
      </div>
      <p class="contact">
        Prefer email?<br>
        <a href="mailto:${CONTACT.email}">${CONTACT.email}</a><br><br>
        Instagram<br>
        <a href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">${CONTACT.handle}</a>
      </p>
    </div>
  </section>`;

function bindBooking() {
  const form = $("#booking-form");
  const status = $(".status", form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // Until a Formspree ID is set, fall back to a pre-filled email so requests are never lost.
    if (CONTACT.formspree.includes("YOUR_FORM_ID")) {
      const body = [...data].map(([k, v]) => `${k}: ${v}`).join("\n");
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Booking request")}&body=${encodeURIComponent(body)}`;
      status.textContent = "Opening your email app…";
      return;
    }

    status.textContent = "Sending…";
    try {
      const res = await fetch(CONTACT.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      status.textContent = "Request sent. I’ll reply within 48 hours.";
    } catch {
      status.textContent = `That didn’t send. Please email ${CONTACT.email} directly.`;
    }
  });
}

/* ---------- About ---------- */

const AboutView = () => html`
  <section class="page about">
    <div>
      <img class="ph" src="${ABOUT_MAIN}" alt="Michael Seda">
      ${ABOUT_EXTRA.length > 0 && html`<div class="pics">${ABOUT_EXTRA.map((src) => html`<img class="ph" src="${src}" alt="">`)}</div>`}
    </div>
    <div>
      <h1>About</h1>
      <p>I’m a concert photographer and videographer specializing in DIY basements, packed club floors, and festival pits. I focus on capturing raw live energy—sweat, stage dives, feedback, and the connection between the band and the room.</p>
      <p>Whether tracking a full tour stop or capturing an intimate release show, I work quickly and inconspicuously in low-light environments. Fast turnaround on social assets is standard, so bands have media ready to post the morning after the show.</p>
      <h2>Kit</h2>
      <ul class="kit">${KIT.map((item) => html`<li>${item}</li>`)}</ul>
      <p><a href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a> / <a href="mailto:${CONTACT.email}">Email</a></p>
    </div>
  </section>`;

/* ---------- Footer ---------- */

$("#footer").innerHTML = toMarkup(html`
  <span>© ${new Date().getFullYear()} Michael Seda</span>
  <span>
    <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> ·
    <a href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">${CONTACT.handle}</a>
  </span>`);

/* ---------- Router ---------- */

const ROUTES = {
  "/":        { title: "Concert Photography & Video", show: showWork },
  "/video":   { title: "Video",                       show: () => { mount(VideoView());   bindVideo(); } },
  "/booking": { title: "Services & Booking",          show: () => { mount(BookingView()); bindBooking(); } },
  "/about":   { title: "About",                       show: () => { mount(AboutView()); } },
};

function route() {
  const path = location.hash.replace(/^#/, "") || "/";
  const key = path in ROUTES ? path : "/";
  closeOverlay();
  ROUTES[key].show();
  document.title = `Michael Seda — ${ROUTES[key].title}`;
  document.querySelectorAll("nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === key));
  scrollTo(0, 0);
}

addEventListener("hashchange", route);
route();
