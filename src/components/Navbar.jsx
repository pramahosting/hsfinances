import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS } from "../utils/constants";
import "../styles/nav-footer.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)} style={{ textDecoration: "none" }}>
          <img src="/data/hsflogo.png" alt="Headstart Finances Logo" />
          <div className="nav-brand">
            <div className="nav-brand-name">Headstart Finances Australia</div>
          </div>
        </Link>

        {/* LINKS */}
        <div className={`nav-links${open ? " open" : ""}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}${path === "/contact" ? " nav-cta" : ""}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
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
