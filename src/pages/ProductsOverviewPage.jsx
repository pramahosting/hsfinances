import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const PRODUCTS = [
  { path: "/products/accfino", tag: "Live Product", name: "Accfino", desc: "AI-powered accounting with ML cash flow forecasting, crypto CGT, open banking, and BAS lodgement. Built and hosted in Australia.", color: "#0B2D6E" },
  { path: "/products/linklens", tag: "AI Agent Platform", name: "LinkLens", desc: "Intelligent AI agent platform under the Prama AI brand. Automate research, web intelligence, and knowledge workflows.", color: "#2d3a52" },
  { path: "/products/hspayroll", tag: "Coming Soon", name: "HSPayroll", desc: "A next-generation Australian payroll system with STP Phase 2, superannuation automation, and Fair Work compliance built in.", color: "#7a4e00" },
];

export default function ProductsOverviewPage() {
  useReveal();
  usePageMeta(
    "Our Products | Accfino, LinkLens & HSPayroll — Australian FinTech Software",
    "Explore Headstart Finances' in-house SaaS products: Accfino AI accounting platform, LinkLens AI research agent, and HSPayroll — Australia's smartest payroll system (coming soon).",
    "/products"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>Our Products</div>
          <h1>Software Built for Australian Finance</h1>
          <p>Our in-house SaaS platforms combine AI, automation, and deep Australian compliance expertise into tools your team will actually love.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {PRODUCTS.map((p) => (
              <Link key={p.path} to={p.path} className="card reveal" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ background: p.color, padding: "32px 28px" }}>
                  <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".72rem", fontWeight: 600, padding: "4px 12px", borderRadius: 100, letterSpacing: ".15em", marginBottom: 12 }}>{p.tag}</div>
                  <h3 style={{ color: "#fff", fontSize: "1.8rem", fontFamily: "'Playfair Display',serif" }}>{p.name}</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">{p.desc}</p>
                  <span className="card-link">Learn more about {p.name} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Want to See These in Action?</h2>
          <p>Talk to our team about which products fit your business.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
