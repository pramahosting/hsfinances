import { COMPANY, LEGAL } from "../utils/constants";
import "../styles/nav-footer.css";

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src="/data/hsflogo.png" alt="Headstart Finances Logo" />
              <h3>Headstart Finances Australia</h3>
            </div>
            <p>Expert financial services, project & product management, and AI-powered technology solutions for Australian businesses. Trusted, ATO-compliant, and future-ready.</p>
            <div className="footer-meta">
              <div>ABN: {COMPANY.abn}</div>
              <div>{COMPANY.address}</div>
              <div>{COMPANY.email}</div>
            </div>
          </div>

          {/* FINANCIAL SERVICES */}
          <div className="footer-col">
            <h4>💼 Financial Services</h4>
            <ul>
              {[
                "BAS & GST Compliance",
                "Bookkeeping & Accounting",
                "Payroll & Superannuation",
                "Tax Advisory & Planning",
                "CFO-as-a-Service",
                "Financial Advisory",
              ].map((s) => (
                <li key={s}><span onClick={() => setPage("services")}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* PROJECT, PRODUCT & AI */}
          <div className="footer-col">
            <h4>📋 Project & Product</h4>
            <ul>
              {[
                "Project Delivery",
                "Project Planning & Control",
                "Quality Assurance & Testing",
                "Market Analysis & Discovery",
                "Product Strategy",
                "Product Delivery",
                "Ecosystem Development",
              ].map((s) => (
                <li key={s}><span onClick={() => setPage("services")}>{s}</span></li>
              ))}
            </ul>

            <h4 style={{ marginTop: 20 }}>🤖 AI & Automation</h4>
            <ul>
              {[
                "AI Solutions & Strategy",
                "AI Agents Development",
                "Process Automation using AI",
                "RAG Development",
                "LLM Integration & Engineering",
                "AI Consulting & Training",
              ].map((s) => (
                <li key={s}><span onClick={() => setPage("services")}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS & COMPANY */}
          <div className="footer-col">
            <h4>📦 Our Products</h4>
            <ul>
              <li><a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer">Accfino — AI Accounting</a></li>
              <li><a href="https://linklens.prama-ai.com" target="_blank" rel="noopener noreferrer">LinkLens — AI Agents</a></li>
              <li><span onClick={() => setPage("products")}>HSPayroll (Coming Soon)</span></li>
              <li><span onClick={() => setPage("products")}>View All Products →</span></li>
            </ul>

            <h4 style={{ marginTop: 20 }}>🏢 Company</h4>
            <ul>
              {[
                ["Home",     "home"],
                ["About Us", "about"],
                ["Services", "services"],
                ["Products", "products"],
                ["Contact",  "contact"],
              ].map(([label, pg]) => (
                <li key={label}><span onClick={() => setPage(pg)}>{label}</span></li>
              ))}
            </ul>

            <h4 style={{ marginTop: 20 }}>📞 Get in Touch</h4>
            <ul>
              <li><span onClick={() => setPage("contact")}>Book Free Consultation</span></li>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><a href="tel:0435064886">0435 064 886</a></li>
            </ul>
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

