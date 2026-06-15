import { useState } from "react";
import { NAV_PAGES } from "../utils/constants";
import "../styles/nav-footer.css";

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-logo" onClick={() => { setPage("home"); setOpen(false); }}>
          <img src="/data/hsflogo.png" alt="Headstart Finances Logo" />
          <div className="nav-brand">
            <div className="nav-brand-name">Headstart Finances Australia</div>
          </div>
        </div>

        {/* LINKS */}
        <div className={`nav-links${open ? " open" : ""}`}>
          {NAV_PAGES.map((p) => (
            <span
              key={p}
              className={`nav-link${page === p ? " active" : ""}${p === "contact" ? " nav-cta" : ""}`}
              onClick={() => { setPage(p); setOpen(false); }}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </span>
          ))}
        </div>

        {/* HAMBURGER */}
        <div className="ham" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span style={open ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
        </div>

      </div>
    </nav>
  );
}
