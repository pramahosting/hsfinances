import { Link } from "react-router-dom";
import { IMG } from "../utils/constants";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import ProcessSection from "../components/ProcessSection";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const FINANCIAL_SERVICES = [
  { icon: "🧾", title: "BAS & GST Compliance", list: ["Monthly, quarterly, or annual BAS preparation and lodgement", "GST registration and advice", "Input tax credit optimisation", "ATO query management and audit support"] },
  { icon: "📒", title: "Bookkeeping & Accounting", list: ["Full-cycle cloud bookkeeping (Xero, MYOB, QuickBooks)", "Bank reconciliation and accounts payable/receivable", "Month-end and year-end close", "Management accounts and board reporting"] },
  { icon: "💵", title: "Payroll & Superannuation", list: ["STP Phase 2 compliant payroll processing", "Superannuation Guarantee (SG) calculation and lodgement", "PAYG withholding and payment summaries", "Fair Work Act entitlement management"] },
  { icon: "📊", title: "Tax Advisory & Planning", list: ["Company, trust, partnership, and individual tax returns", "Capital Gains Tax (CGT) planning", "Fringe Benefits Tax (FBT) compliance", "Strategic tax minimisation (within ATO guidelines)"] },
  { icon: "🔮", title: "CFO-as-a-Service", list: ["Virtual CFO for growing businesses", "Cash flow forecasting and budget management", "Financial modelling and scenario analysis", "Investor-ready reporting and board presentations"] },
  { icon: "📈", title: "Financial Advisory", list: ["Business restructuring and entity setup advice", "Mergers, acquisitions, and due diligence support", "Working capital management", "Growth strategy and financial roadmaps"] },
];

export default function FinancialServicesPage() {
  useReveal();
  usePageMeta(
    "Accounting, BAS/GST Compliance & Payroll Services Sydney | Headstart Finances",
    "Expert BAS & GST compliance, bookkeeping, STP Phase 2 payroll, tax advisory, CFO-as-a-Service and financial advisory for Australian businesses. CPA & CA qualified team in Sydney CBD.",
    "/services/financial-services"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-dark)" }}>
            <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Our Services</Link> / Financial Services
          </div>
          <h1>Accounting, BAS/GST &amp; Payroll Services</h1>
          <p>Comprehensive accounting and financial management for Australian businesses of all sizes.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="section-eyebrow">Financial Services</div>
                <h2 className="section-title">Accounting &amp; Financial Advisory</h2>
                <div className="divider" />
                <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 16 }}>
                  Our financial services arm provides comprehensive accounting and financial management
                  for Australian businesses of all sizes — from sole traders to established companies
                  with complex structures.
                </p>
                <p style={{ color: "var(--slate)", lineHeight: 1.8 }}>
                  Our CPA Australia and CA ANZ certified team works as your dedicated financial partner —
                  not just at tax time, but year-round.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
                  <Link to="/contact" className="btn-primary">Get a Quote →</Link>
                  <a href="tel:0435064886" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,33,.12)", color: "var(--charcoal)", padding: "14px 24px", borderRadius: 8, fontWeight: 600, fontSize: ".92rem" }}>📞 0435 064 886</a>
                </div>
              </div>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <img src={IMG.services} alt="Financial Services" style={{ width: "100%", height: 360, objectFit: "cover" }} />
              </div>
            </div>
          </div>

          <div className="grid-3">
            {FINANCIAL_SERVICES.map((s, i) => (
              <div key={s.title} className="service-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <ul className="service-list">
                  {s.list.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Start with a Free Consultation</h2>
          <p>Talk to one of our Sydney-based financial experts about your accounting, BAS/GST, or payroll needs.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us Today →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
