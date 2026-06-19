import { COMPANY, LEGAL } from "../utils/constants";
import "../styles/nav-footer.css";

const PILLARS = [
  {
    label: "💼 Financial Services",
    tab: "financial",
    items: ["BAS & GST Compliance", "Bookkeeping & Accounting", "Payroll & Superannuation", "Tax Advisory & Planning", "CFO-as-a-Service", "Financial Advisory"],
  },
  {
    label: "📋 Project & Product",
    tab: "ppm",
    items: ["Project Delivery", "Project Planning & Control", "Market Analysis & Discovery", "Product Strategy", "Product Delivery"],
  },
  {
    label: "🤖 AI & Automation",
    tab: "ai",
    items: ["AI Solutions & Strategy", "AI Agents Development", "Process Automation", "RAG Development", "LLM Integration & Engineering", "AI Consulting & Training"],
  },
];

export default function Footer({ setPage, setServiceTab }) {
  const goToService = (tab) => {
    setServiceTab(tab);
    setPage("services");
  };

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
              <div><a href={`mailto:${COMPANY.email}`} style={{ color:"rgba(255,255,255,.45)" }}>{COMPANY.email}</a></div>
              <div><a href="tel:0435064886" style={{ color:"rgba(255,255,255,.45)" }}>0435 064 886</a></div>
            </div>
          </div>

          {/* COL 2 — FINANCIAL SERVICES */}
          <div className="footer-col">
            <h4>{PILLARS[0].label}</h4>
            <ul>
              {PILLARS[0].items.map((item) => (
                <li key={item}><span onClick={() => goToService(PILLARS[0].tab)}>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* COL 3 — PROJECT & PRODUCT + QUICK LINKS below */}
          <div className="footer-col">
            <h4>{PILLARS[1].label}</h4>
            <ul>
              {PILLARS[1].items.map((item) => (
                <li key={item}><span onClick={() => goToService(PILLARS[1].tab)}>{item}</span></li>
              ))}
            </ul>

          </div>

          {/* COL 4 — AI & AUTOMATION */}
          <div className="footer-col">
            <h4>{PILLARS[2].label}</h4>
            <ul>
              {PILLARS[2].items.map((item) => (
                <li key={item}><span onClick={() => goToService(PILLARS[2].tab)}>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* COL 5 — PRODUCTS */}
          <div className="footer-col">
            <h4>📦 Products</h4>
            <ul>
              <li><a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer">Accfino</a></li>
              <li><a href="https://linklens.prama-ai.com" target="_blank" rel="noopener noreferrer">LinkLens</a></li>
              <li>
                <span onClick={() => setPage("products")}>
                  HSPayroll <span style={{ fontSize:".7rem", color:"var(--gold)" }}>Soon</span>
                </span>
              </li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <h4>Quick Links</h4>
              <div className="footer-quick-links">
                {[["Home","home"],["About","about"],["Services","services"],["Products","products"],["Contact","contact"]].map(([label, pg], i) => (
                  <span key={label}>
                    <span onClick={() => setPage(pg)}>{label}</span>
                    {i < 4 && <span style={{ color:"rgba(255,255,255,.2)", margin:"0 6px" }}>|</span>}
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
            <a href={LEGAL.terms}   target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
            <a href={LEGAL.privacy} target="_blank" rel="noopener noreferrer">Privacy &amp; Security</a>
            <a href={LEGAL.legal}   target="_blank" rel="noopener noreferrer">Legal Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}





