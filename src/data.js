// Files in /public/photos are referenced with img("name.jpg").
const img = (file) => import.meta.env.BASE_URL + "photos/" + file;
const vid = (file) => import.meta.env.BASE_URL + "videos/" + file;

export const PHOTOS = [
  // --- Dear Season (Little Big Planet Show) ---
  {
    src: img("DearSeason01.jpg"),
    band: "Dear Season",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("DearSeason02.jpg"),
    band: "Dear Season",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("DearSeason03.jpg"),
    band: "Dear Season",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },

  // --- Fairwell (Little Big Planet Show) ---
  {
    src: img("Fairwell01.jpg"),
    band: "Fairwell",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("Fairwell02.jpg"),
    band: "Fairwell",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("Fairwell03.jpg"),
    band: "Fairwell",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },

  // --- Falling Behind (Little Big Planet Show) ---
  {
    src: img("FallingBehind01.jpg"),
    band: "Falling Behind",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("FallingBehind02.jpg"),
    band: "Falling Behind",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },
  {
    src: img("FallingBehind03.jpg"),
    band: "Falling Behind",
    venue: "Little Big Planet",
    date: "Aug 2026",
  },

  // --- Extra / Archival Film Works ---
  {
    src: img("SCAN0001.jpg"),
    band: "Film Studies",
    venue: "Macro / Nature",
    date: "2026",
  },
];

// If you host them on YouTube or Vimeo, paste the video ID here: Local video files from /public/videos/
export const FEATURED = {
  src: vid("WSG_NEWS PROMO_FINAL.mov"),
  title: "Two Down — Official Promo",
  poster: img("twodown_thumb.jpg"),
};

export const VIDEOS = [
  {
    src: vid("TWODOWNPROMO_FINAL.mov"),
    title: "Two Down // Live Basement Promo",
    note: "Live set recap",
    poster: img("twodown_thumb.jpg"),
  },
  {
    src: vid("WSG_NEWS PROMO_FINAL.mov"),
    title: "WSG News // Promo Reel",
    note: "Official promo edit",
    poster: img("wsg_thumb.jpg"),
  },
];

export const TIERS = [
  {
    name: "Local Show Coverage",
    price: "$175",
    items: [
      "Full set & pit coverage",
      "15+ high-res edited photos",
      "24-hour turnaround on 5 social edits",
      "Online gallery delivered within 5 business days",
      "Full personal and promotional license",
    ],
  },
  {
    name: "Tour Date / Festival",
    price: "$350",
    items: [
      "Soundcheck through headline encore",
      "40+ retouched concert & crowd captures",
      "Backstage, green room, and pit candids",
      "Priority same-night social delivery",
      "Press-ready digital archive",
    ],
  },
  {
    name: "Promo / Press Kit",
    price: "$225",
    items: [
      "60-minute outdoor or on-location band portrait session",
      "10 fully retouched final images (color & B&W)",
      "Album art, Spotify canvas, and press licensing",
      "Delivered within 7 business days",
    ],
  },
];

export const CONTACT = {
  email: "mikeseda.films@gmail.com",
  instagram: "https://www.instagram.com/mikeseda_films",
  handle: "@mikeseda_films",
  formspree: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your Formspree endpoint
};

export const KIT = [
  "Sony A7 IV full-frame mirrorless body",
  "FE 24-70mm f/2.8 GM & FE 70-200mm f/2.8 GM",
  "FE 35mm f/1.4 GM prime",
  "Adobe Lightroom Classic, Photoshop, and Premiere Pro",
];

// Profile photo (Your night outdoor portrait)
export const ABOUT_MAIN = img("ProfilePicture.jpg");

// Secondary photography features on the About page
export const ABOUT_EXTRA = [img("SCAN0001.jpg")];
