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
            <p>Expert financial services and technology solutions for Australian businesses. Trusted, ATO-compliant, and future-ready.</p>
            <div className="footer-meta">
              <div>ABN: {COMPANY.abn}</div>
              <div>{COMPANY.address}</div>
              <div>{COMPANY.email} · {COMPANY.phone}</div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {[
                "BAS & GST Compliance",
                "Bookkeeping & Accounting",
                "Payroll & Super",
                "Tax Advisory",
                "CFO-as-a-Service",
                "Project & Product Management",
                "AI & Automation Solutions",
              ].map((s) => (
                <li key={s}><span onClick={() => setPage("services")}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer">Accfino</a></li>
              <li><a href="https://linklens.prama-ai.com" target="_blank" rel="noopener noreferrer">LinkLens</a></li>
              <li><span onClick={() => setPage("products")}>HSPayroll (Coming Soon)</span></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {[["About Us","about"],["Careers","about"],["Partners","about"],["Contact","contact"]].map(([label, pg]) => (
                <li key={label}><span onClick={() => setPage(pg)}>{label}</span></li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div>© 2026 {COMPANY.name}. All rights reserved. ABN {COMPANY.abn}.</div>
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