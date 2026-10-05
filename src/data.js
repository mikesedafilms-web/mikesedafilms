// ============ EDIT YOUR CONTENT HERE ============
// Files in /public/photos are referenced with img("name.jpg"). This keeps paths
// working on GitHub Pages, where the site lives in a subfolder.
const img = (file) => import.meta.env.BASE_URL + "photos/" + file;
const TEMP =
  "https://blog.padi.com/wp-content/uploads/2014/12/Fotolia_64349981_S.jpg"; // temporary placeholder: swap each one for a real photo
// Offline fallback: const TEMP = img("turtle.svg");

export const PHOTOS = [
  { src: TEMP, band: "Band A", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Band B", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Band A", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Band C", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Band B", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Festival / Crowd", venue: "Festival Name", date: "2026" },
  { src: TEMP, band: "Band C", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Band A", venue: "Venue Name", date: "2026" },
  { src: TEMP, band: "Festival / Crowd", venue: "Festival Name", date: "2026" },
  { src: TEMP, band: "Band B", venue: "Venue Name", date: "2026" },
];

// YouTube ID = the part after v= in the link
export const FEATURED = { id: "dQw4w9WgXcQ", title: "2026 Live Reel" };
export const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Band A live at Venue", note: "Live clip" },
  { id: "dQw4w9WgXcQ", title: "Band B tour diary", note: "Tour diary" },
  { id: "dQw4w9WgXcQ", title: "Festival recap", note: "Recap" },
  { id: "dQw4w9WgXcQ", title: "Band C music video", note: "Music video" },
];

export const TIERS = [
  {
    name: "Local Show Coverage",
    price: "$TBD",
    items: [
      "Full set coverage",
      "15+ edited photos",
      "24-hour turnaround on 5 social edits",
      "Gallery within 5 business days",
      "Personal and promo license",
    ],
  },
  {
    name: "Tour Date / Festival",
    price: "$TBD",
    items: [
      "Soundcheck through headline set",
      "40+ edited photos",
      "Backstage and crowd candids",
      "Same-day social edits",
      "Press-ready gallery",
    ],
  },
  {
    name: "Promo / Press Kit",
    price: "$TBD",
    items: [
      "1-hour band portrait session",
      "10 retouched final images",
      "Press and social license",
      "Delivered within 7 days",
    ],
  },
];

export const CONTACT = {
  email: "youremail@domain.com",
  instagram: "https://www.instagram.com/christinademerzi",
  handle: "@christinademerzi",
  formspree: "https://formspree.io/f/YOUR_FORM_ID", // paste your Formspree URL
};

export const KIT = [
  "Sony A7 IV body",
  "24-70mm f/2.8 and 70-200mm f/2.8",
  "35mm f/1.4 prime",
  "Adobe Lightroom and Photoshop",
];
export const ABOUT_MAIN = TEMP; // e.g. img("me.jpg")
export const ABOUT_EXTRA = []; // e.g. [img("pit.jpg"), img("backstage.jpg")]
