// ===== EDIT THIS FILE to change your site content =====
// Photos live in public/photos and videos in public/videos.

const photo = (f) => "public/photos/" + f;
const video = (f) => "public/videos/" + encodeURIComponent(f);

const PHOTOS = [
  { src: photo("DearSeason01.jpg"), band: "Dear Season", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("DearSeason02.jpg"), band: "Dear Season", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("DearSeason03.jpg"), band: "Dear Season", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("Fairwell01.jpg"), band: "Fairwell", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("Fairwell02.jpg"), band: "Fairwell", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("Fairwell03.jpg"), band: "Fairwell", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("FallingBehind01.jpg"), band: "Falling Behind", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("FallingBehind02.jpg"), band: "Falling Behind", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("FallingBehind03.jpg"), band: "Falling Behind", venue: "Little Big Planet", date: "Aug 2026" },
  { src: photo("SCAN0001.jpg"), band: "Film Studies", venue: "Macro / Nature", date: "2026" },
];

// Big photo at the top of the home page
const HERO = photo("DearSeason01.jpg");

const FEATURED = {
  src: video("WSG_NEWS PROMO_FINAL.mov"),
  title: "WSG News // Promo Reel",
  poster: photo("wsg_thumb.jpg"),
};

const VIDEOS = [
  { src: video("TWODOWNPROMO_FINAL.mov"), title: "Two Down // Live Basement Promo", note: "Live set recap", poster: photo("twodown_thumb.jpg") },
  { src: video("WSG_NEWS PROMO_FINAL.mov"), title: "WSG News // Promo Reel", note: "Official promo edit", poster: photo("wsg_thumb.jpg") },
];

const PRICING_NOTE = "All prices are per set/band.";
const PRICING_FOOTNOTE = "*Time of completion is subject to change based on quantity of services selected.";

const TIERS = [
  { name: "Set Coverage (Photos)", price: "$200", items: [
    "Full photo coverage", "In-house editing", "24-hour social media teasers",
    "Gallery complete in 3-5 business days*" ] },
  { name: "Set Coverage (Videos)", price: "$300", items: [
    "Full video coverage", "In-house color grading & editing",
    "Highlight reel completed in 5-7 business days*" ] },
  { name: "Band Press Kit", price: "$250", items: [
    "Band photo session (video services available: +$50)", "In-house editing",
    "24-hour social media teasers", "Gallery completed in 3-5 business days*" ] },
];

const CONTACT = {
  email: "mikeseda.films@gmail.com",
  instagram: "https://www.instagram.com/mikeseda_films",
  handle: "@mikeseda_films",
  formspree: "https://formspree.io/f/YOUR_FORM_ID", // replace with your Formspree endpoint
};

const KIT = [
  "Sony A7 IV full-frame mirrorless body",
  "FE 24-70mm f/2.8 GM & FE 70-200mm f/2.8 GM",
  "FE 35mm f/1.4 GM prime",
  "Adobe Lightroom Classic, Photoshop, and Premiere Pro",
];

const ABOUT_MAIN = photo("ProfilePicture.jpg");
const ABOUT_EXTRA = [photo("SCAN0001.jpg")];
