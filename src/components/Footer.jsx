import { Link } from "react-router-dom";
import { COMPANY, LEGAL } from "../utils/constants";
import "../styles/nav-footer.css";

const PILLARS = [
  {
    label: "💼 Financial Services",
    path: "/services/financial-services",
    items: ["BAS & GST Compliance", "Bookkeeping & Accounting", "Payroll & Superannuation", "Tax Advisory & Planning", "CFO-as-a-Service", "Financial Advisory"],
  },
  {
    label: "📋 Project & Product",
    path: "/services/project-product-management",
    items: ["Project Delivery", "Project Planning & Control", "Market Analysis & Discovery", "Product Strategy", "Product Delivery"],
  },
  {
    label: "🤖 AI & Automation",
    path: "/services/ai-automation",
    items: ["AI Solutions & Strategy", "AI Agents Development", "Process Automation", "RAG Development", "LLM Integration & Engineering", "AI Consulting & Training"],
  },
];

const QUICK_LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* COL 1 — BRAND */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src="/data/hsflogo.png" alt="Headstart Finances Logo" />
              <h3>Headstart Finances</h3>
            </div>
            <p>Expert accounting, project management and AI solutions for modern Australian businesses.</p>
            <div className="footer-meta">
              <div>ABN: {COMPANY.abn}</div>
              <div>{COMPANY.address}</div>
              <div><a href={`mailto:${COMPANY.email}`} style={{ color: "rgba(255,255,255,.45)" }}>{COMPANY.email}</a></div>
              <div><a href="tel:0435064886" style={{ color: "rgba(255,255,255,.45)" }}>0435 064 886</a></div>
            </div>
          </div>

          {/* COL 2 — FINANCIAL SERVICES */}
          <div className="footer-col">
            <h4>{PILLARS[0].label}</h4>
            <ul>
              {PILLARS[0].items.map((item) => (
                <li key={item}><Link to={PILLARS[0].path}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* COL 3 — PROJECT & PRODUCT */}
          <div className="footer-col">
            <h4>{PILLARS[1].label}</h4>
            <ul>
              {PILLARS[1].items.map((item) => (
                <li key={item}><Link to={PILLARS[1].path}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* COL 4 — AI & AUTOMATION */}
          <div className="footer-col">
            <h4>{PILLARS[2].label}</h4>
            <ul>
              {PILLARS[2].items.map((item) => (
                <li key={item}><Link to={PILLARS[2].path}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* COL 5 — PRODUCTS */}
          <div className="footer-col">
            <h4>📦 Products</h4>
            <ul>
              <li><Link to="/products/accfino">Accfino</Link></li>
              <li><Link to="/products/linklens">LinkLens</Link></li>
              <li>
                <Link to="/products/hspayroll">
                  HSPayroll <span style={{ fontSize: ".7rem", color: "var(--gold)" }}>Soon</span>
                </Link>
              </li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <h4>Quick Links</h4>
              <div className="footer-quick-links">
                {QUICK_LINKS.map(([label, path], i) => (
                  <span key={label}>
                    <Link to={path}>{label}</Link>
                    {i < QUICK_LINKS.length - 1 && <span style={{ color: "rgba(255,255,255,.2)", margin: "0 6px" }}>|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div>© 2026 {COMPANY.name}. All rights reserved.</div>
          <div className="footer-legal">
            <a href={LEGAL.terms} target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
            <a href={LEGAL.privacy} target="_blank" rel="noopener noreferrer">Privacy &amp; Security</a>
            <a href={LEGAL.legal} target="_blank" rel="noopener noreferrer">Legal Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
