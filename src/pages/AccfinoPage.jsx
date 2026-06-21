import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const ACCFINO_FEATURES = [
  { icon: "🔀", title: "AI Bank Reconciliation", desc: "Dual-engine LLM + RDR rule classifier auto-categorises every transaction, computes GST, detects duplicates, and flags anomalies. 95% auto-classified." },
  { icon: "📈", title: "ML Cash Flow Forecasting", desc: "Trained ensemble model (scikit-learn) predicts next-month cash flow from your transaction history. Visual charts included on all plans." },
  { icon: "₿", title: "Crypto & Equity CGT", desc: "Import from any AU or global exchange. Computes capital gains under ATO rules (FIFO/ACB) and exports an ATO-ready tax summary." },
  { icon: "🧾", title: "GST Invoice Management", desc: "Generate GST-compliant invoices, extract data from any PDF using built-in OCR, and manage customer records in one screen." },
  { icon: "🏦", title: "Open Banking Feeds", desc: "Direct connections to Westpac, CommBank, ANZ, and NAB. Transactions flow in automatically and are classified in real time." },
  { icon: "🔒", title: "AU Data Residency Always", desc: "Your transaction data, invoices, and customer records never leave Australian infrastructure. Designed and hosted in Australia from the ground up." },
];

export default function AccfinoPage() {
  useReveal();
  usePageMeta(
    "Accfino | AI-Powered Accounting Software for Australian Small Business",
    "Accfino combines AI bank reconciliation, ML cash flow forecasting, crypto & equity CGT, open banking, and GST invoicing — built and hosted in Australia.",
    "/products/accfino"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
            <Link to="/products" style={{ color: "inherit", textDecoration: "none" }}>Our Products</Link> / Accfino
          </div>
          <h1>Accfino — Intelligent Accounting for Small Business</h1>
          <p>Built in Australia. AI bank reconciliation, ML cash flow forecasting, and GST invoicing in one platform.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <div style={{ background: "var(--n100)", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ background: "linear-gradient(135deg, #2B2B2B 0%, #3D3820 100%)", padding: "52px 48px 40px" }}>
                <div style={{ display: "inline-block", background: "rgba(212,160,33,.25)", color: "var(--gold)", fontSize: ".75rem", fontWeight: 700, padding: "5px 16px", borderRadius: 100, letterSpacing: ".2em", marginBottom: 14, border: "1px solid rgba(212,160,33,.4)" }}>LIVE PRODUCT</div>
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <h2 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontFamily: "'Playfair Display',serif" }}>Accfino</h2>
                    <p style={{ color: "rgba(255,255,255,.8)", fontSize: "1.05rem", marginTop: 8 }}>Intelligent Accounting for Small Business — Built in Australia</p>
                  </div>
                  <a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer"
                    style={{ marginLeft: "auto", background: "var(--gold)", color: "var(--navy)", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: ".92rem", display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    Visit Accfino →
                  </a>
                </div>
              </div>
              <div style={{ padding: "48px" }}>
                <p style={{ color: "var(--slate)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 36, maxWidth: 740 }}>
                  Accfino is a next-generation accounting platform purpose-built for Australian SMEs. It unifies
                  AI bank reconciliation, ML cash flow forecasting, Crypto &amp; Equity CGT, Open Banking, and
                  GST invoicing — everything traditional platforms charge extra for, included from day one.
                </p>
                <div className="grid-3" style={{ marginBottom: 36 }}>
                  {ACCFINO_FEATURES.map((f) => (
                    <div key={f.title} className="service-card" style={{ background: "#fff" }}>
                      <div className="service-icon">{f.icon}</div>
                      <div className="service-title">{f.title}</div>
                      <p className="service-text">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: "var(--sky)", borderRadius: 12, padding: "28px 32px", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.05rem", marginBottom: 4 }}>Pricing — Free to Enterprise</div>
                    <p style={{ color: "var(--slate)", fontSize: ".88rem" }}>Free base plan forever · Starter $0/mo · Pro $18/mo · Business $39/mo · All prices AUD inc. GST</p>
                  </div>
                  <a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer"
                    style={{ marginLeft: "auto", background: "var(--charcoal)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: ".88rem", flexShrink: 0 }}>
                    Start Free →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Want a Demo of Accfino?</h2>
          <p>Talk to our team about how Accfino can simplify your bookkeeping and BAS lodgement.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
