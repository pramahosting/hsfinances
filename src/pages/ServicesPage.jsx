import { useState } from "react";
import { IMG } from "../utils/constants";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const FINANCIAL_SERVICES = [
  { icon: "🧾", title: "BAS & GST Compliance",    list: ["Monthly, quarterly, or annual BAS preparation and lodgement","GST registration and advice","Input tax credit optimisation","ATO query management and audit support"] },
  { icon: "📒", title: "Bookkeeping & Accounting", list: ["Full-cycle cloud bookkeeping (Xero, MYOB, QuickBooks)","Bank reconciliation and accounts payable/receivable","Month-end and year-end close","Management accounts and board reporting"] },
  { icon: "💵", title: "Payroll & Superannuation", list: ["STP Phase 2 compliant payroll processing","Superannuation Guarantee (SG) calculation and lodgement","PAYG withholding and payment summaries","Fair Work Act entitlement management"] },
  { icon: "📊", title: "Tax Advisory & Planning",  list: ["Company, trust, partnership, and individual tax returns","Capital Gains Tax (CGT) planning","Fringe Benefits Tax (FBT) compliance","Strategic tax minimisation (within ATO guidelines)"] },
  { icon: "🔮", title: "CFO-as-a-Service",         list: ["Virtual CFO for growing businesses","Cash flow forecasting and budget management","Financial modelling and scenario analysis","Investor-ready reporting and board presentations"] },
  { icon: "📈", title: "Financial Advisory",        list: ["Business restructuring and entity setup advice","Mergers, acquisitions, and due diligence support","Working capital management","Growth strategy and financial roadmaps"] },
];

const TECH_SERVICES = [
  { icon: "💻", title: "Bespoke Software Development", list: ["Custom web applications (React, FastAPI, Django)","Mobile app development (iOS/Android)","API design, development, and integration","Legacy system modernisation"] },
  { icon: "☁️", title: "Cloud Infrastructure",          list: ["AWS, Azure, and GCP architecture and migration","Docker/Kubernetes containerisation","DevOps pipeline setup (CI/CD)","Cost optimisation and infrastructure audits"] },
  { icon: "🤖", title: "AI & Machine Learning",         list: ["AI agent and automation development","LLM integration and RAG pipeline design","ML model training and deployment","Data engineering and analytics platforms"] },
  { icon: "🔒", title: "Cybersecurity",                 list: ["Security audits and penetration testing","OWASP compliance assessments","Incident response planning","Security awareness training for staff"] },
  { icon: "🖥️", title: "Managed IT Support",            list: ["24/7 infrastructure monitoring","Helpdesk and end-user support","Software licensing and procurement","IT strategy and roadmap planning"] },
  { icon: "📦", title: "ERP & Systems Integration",     list: ["ERP implementation and customisation","Third-party system integration (Xero, MYOB, Salesforce)","Data migration and transformation","Business process automation (BPA)"] },
];

const PROCESS_STEPS = [
  ["1","Discovery","Free 30-minute consultation to understand your needs, goals, and current situation."],
  ["2","Proposal","Clear, fixed-fee or retainer proposal tailored to your specific requirements and budget."],
  ["3","Onboarding","Smooth transition with dedicated onboarding support, system setup, and team introduction."],
  ["4","Delivery","Ongoing service delivery with regular reporting, proactive advice, and responsive support."],
];

export default function ServicesPage({ setPage }) {
  useReveal();
  const [tab, setTab] = useState("kasar-financial");
  const services = tab === "kasar-financial" ? FINANCIAL_SERVICES : TECH_SERVICES;

  return (
    <>
      {/* PAGE HERO */}
      <div style={{ background: "linear-gradient(135deg, #0a1e4a 0%, var(--navy) 100%)" }} className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color:"var(--gold)" }}>Our Services</div>
          <h1>Full-Service Financial &amp; Technology Solutions</h1>
          <p>Delivered through two specialist arms — Kasar Financial Services and Kasar Technologies.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* TABS */}
          <div className="tab-nav reveal" style={{ marginBottom: 48 }}>
            <button className={`tab-btn${tab === "kasar-financial" ? " active" : ""}`} onClick={() => setTab("kasar-financial")}>💼 Kasar Financial Services</button>
            <button className={`tab-btn${tab === "kasar-tech"      ? " active" : ""}`} onClick={() => setTab("kasar-tech")}>💻 Kasar Technologies</button>
          </div>

          {/* KASAR FINANCIAL INTRO */}
          {tab === "kasar-financial" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">Kasar Financial Services</div>
                  <h2 className="section-title">Accounting &amp; Financial Advisory</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Kasar Financial Services is the accounting and financial advisory arm of Headstart Finances.
                    We provide comprehensive financial management services to Australian businesses of all sizes —
                    from solo operators to established companies with complex structures.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    Our CPA Australia and CA ANZ certified team works as your dedicated financial partner — not
                    just at tax time, but year-round.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <button className="btn-primary" onClick={() => setPage("contact")}>Get a Quote →</button>
                    <a href="tel:0435064886" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--sky)", color:"var(--navy)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>📞 0435 064 886</a>
                  </div>
                </div>
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
                  <img src={IMG.services} alt="Kasar Financial Services" style={{ width:"100%", height:360, objectFit:"cover" }} />
                </div>
              </div>
            </div>
          )}

          {/* KASAR TECH INTRO */}
          {tab === "kasar-tech" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">Kasar Technologies</div>
                  <h2 className="section-title">Technology Solutions &amp; Development</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Kasar Technologies is the technology and software development arm of Headstart Finances.
                    We deliver bespoke software projects, cloud infrastructure, AI solutions, and managed IT
                    support for businesses across Australia.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    From custom ERP and accounting systems to AI agents and cloud migrations, our engineering team
                    brings the same precision and reliability to technology that Kasar Financial Services delivers
                    in finance.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <button className="btn-primary" onClick={() => setPage("contact")}>Discuss a Project →</button>
                    <a href="mailto:info@hsfinances.com.au" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--sky)", color:"var(--navy)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>✉️ Email Us</a>
                  </div>
                </div>
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
                  <img src={IMG.tech} alt="Kasar Technologies" style={{ width:"100%", height:360, objectFit:"cover" }} />
                </div>
              </div>
            </div>
          )}

          {/* SERVICE CARDS */}
          <div className="grid-3">
            {services.map((s, i) => (
              <div key={s.title} className="service-card reveal" style={{ transitionDelay:`${i * 60}ms` }}>
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

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-eyebrow">How We Work</div>
            <h2 className="section-title">Our Engagement Process</h2>
            <div className="divider center" />
          </div>
          <div className="grid-4">
            {PROCESS_STEPS.map(([n, t, d]) => (
              <div key={t} className="value-card reveal">
                <div style={{ width:44, height:44, background:"var(--navy)", color:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1.1rem", margin:"0 auto 16px" }}>{n}</div>
                <div className="value-title">{t}</div>
                <p className="value-text">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container reveal">
          <h2>Start with a Free Consultation</h2>
          <p>Talk to one of our Sydney-based experts about your financial or technology needs. No obligation, no jargon.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => setPage("contact")}>Contact Us Today →</button>
          </div>
        </div>
      </section>
    </>
  );
}
