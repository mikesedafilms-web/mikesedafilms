import { useEffect } from "react";
import { NavLink, Link, Routes, Route, useLocation } from "react-router-dom";
import Work from "./pages/Work.jsx";
import Video from "./pages/Video.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <header>
        <Link className="logo" to="/">
          Michael Seda
        </Link>
        <nav aria-label="Main">
          <NavLink to="/" end>
            Work
          </NavLink>
          <NavLink to="/video">Video</NavLink>
          <NavLink to="/booking">Services &amp; Booking</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/video" element={<Video />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Work />} />
        </Routes>
      </main>
    </>
  );
}
