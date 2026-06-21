import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const HSPAYROLL_FEATURES = [
  "STP Phase 2 direct lodgement to ATO",
  "Superannuation Guarantee auto-calculation",
  "Award/EBA pay rate interpretation",
  "Multi-entity and multi-site support",
  "Leave management & entitlements",
  "Integration with Accfino general ledger",
  "Employee self-service portal",
  "Fair Work Act compliant reporting",
];

export default function HSPayrollPage() {
  useReveal();
  usePageMeta(
    "HSPayroll | Australia's Smartest Payroll System — Coming Soon",
    "HSPayroll automates STP Phase 2, superannuation, award interpretation and Fair Work compliance for Australian businesses. Join the waitlist.",
    "/products/hspayroll"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
            <Link to="/products" style={{ color: "inherit", textDecoration: "none" }}>Our Products</Link> / HSPayroll
          </div>
          <h1>HSPayroll — Australia's Smartest Payroll System</h1>
          <p>Coming soon. STP Phase 2, superannuation, award interpretation and Fair Work compliance — fully automated.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <div style={{ background: "var(--n100)", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-lg)", opacity: .92 }}>
              <div style={{ background: "linear-gradient(135deg, #5a3800 0%, #7a4e00 100%)", padding: "52px 48px 40px" }}>
                <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", color: "#fff", fontSize: ".75rem", fontWeight: 700, padding: "5px 16px", borderRadius: 100, letterSpacing: ".2em", marginBottom: 14, border: "1px solid rgba(255,255,255,.25)" }}>🚧 UNDER DEVELOPMENT</div>
                <h2 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontFamily: "'Playfair Display',serif" }}>HSPayroll</h2>
                <p style={{ color: "rgba(255,255,255,.8)", fontSize: "1.05rem", marginTop: 8 }}>Australia's Smartest Payroll System — Coming Soon</p>
              </div>
              <div style={{ padding: "48px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,33,.12)", border: "1px solid rgba(212,160,33,.3)", color: "var(--gold)", padding: "8px 18px", borderRadius: 8, fontSize: ".85rem", fontWeight: 600, marginBottom: 24 }}>
                  🔔 Join the Waitlist
                </div>
                <p style={{ color: "var(--slate)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 36, maxWidth: 740 }}>
                  HSPayroll is being built from the ground up to handle the full complexity of Australian payroll —
                  STP Phase 2, superannuation guarantee, award interpretation, Fair Work compliance, and payslip
                  generation — all automated and integrated with Accfino.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, marginBottom: 32 }}>
                  {HSPAYROLL_FEATURES.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: ".88rem", color: "var(--slate)" }}>
                      <span style={{ color: "var(--gold)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>{f}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <a href="mailto:info@hsfinances.com.au?subject=HSPayroll Waitlist"
                    style={{ background: "var(--charcoal)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, fontSize: ".88rem" }}>
                    Join Waitlist →
                  </a>
                  <span style={{ color: "var(--slate)", fontSize: ".85rem" }}>Expected launch: Q3 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Want Early Access to HSPayroll?</h2>
          <p>Join the waitlist or talk to us about your current payroll needs in the meantime.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
