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

const PRAMA_SERVICES = [
  { icon: "🤖", title: "AI Solutions & Strategy",        list: ["End-to-end AI solution design and delivery","AI readiness assessment for your business","Custom AI model development and fine-tuning","AI integration with existing business systems"] },
  { icon: "🕵️", title: "AI Agents Development",          list: ["Autonomous AI agent design and build","Multi-agent workflow orchestration","Web intelligence and research agents (LinkLens)","Task automation agents for business processes"] },
  { icon: "⚙️", title: "Process Automation using AI",    list: ["Intelligent document processing and extraction","AI-powered workflow automation","RPA combined with AI for end-to-end automation","Business process optimisation using ML insights"] },
  { icon: "🗂️", title: "RAG Development",                list: ["Retrieval-Augmented Generation (RAG) pipeline design","Custom knowledge base and vector store setup","LLM integration with your internal data","Semantic search and intelligent Q&A systems"] },
  { icon: "🔗", title: "LLM Integration & Engineering",  list: ["OpenAI, Anthropic, and open-source LLM integration","Prompt engineering and optimisation","LLM API design and management","Fine-tuning and custom model training"] },
  { icon: "📊", title: "AI Consulting & Training",        list: ["AI strategy workshops for leadership teams","Staff AI literacy and upskilling programs","AI governance and ethical AI frameworks","Ongoing AI advisory and innovation roadmaps"] },
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
  const services = tab === "kasar-financial" ? FINANCIAL_SERVICES : tab === "kasar-tech" ? TECH_SERVICES : PRAMA_SERVICES;

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color:"var(--gold)" }}>Our Services</div>
          <h1>Full-Service Financial &amp; Technology Solutions</h1>
          <p>Delivered through three specialist arms — Kasar Financial Services, Kasar Technologies, and Prama AI Australia.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* TABS */}
          <div className="tab-nav reveal" style={{ marginBottom: 48 }}>
            <button className={`tab-btn${tab === "kasar-financial" ? " active" : ""}`} onClick={() => setTab("kasar-financial")}>💼 Kasar Financial Services</button>
            <button className={`tab-btn${tab === "kasar-tech"      ? " active" : ""}`} onClick={() => setTab("kasar-tech")}>💻 Kasar Technologies</button>
            <button className={`tab-btn${tab === "prama-ai"        ? " active" : ""}`} onClick={() => setTab("prama-ai")}>🤖 Prama AI Australia</button>
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
                    <a href="tel:0435064886" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,230,120,0.22)", color:"var(--charcoal)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>📞 0435 064 886</a>
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
                    <a href="mailto:info@hsfinances.com.au" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,230,120,0.22)", color:"var(--charcoal)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>✉️ Email Us</a>
                  </div>
                </div>
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
                  <img src={IMG.tech} alt="Kasar Technologies" style={{ width:"100%", height:360, objectFit:"cover" }} />
                </div>
              </div>
            </div>
          )}


          {/* PRAMA AI INTRO */}
          {tab === "prama-ai" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">Prama AI Australia</div>
                  <h2 className="section-title">AI Solutions &amp; Intelligent Automation</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Prama AI Australia is the artificial intelligence arm of Headstart Finances, specialising
                    in delivering cutting-edge AI solutions for Australian businesses. From autonomous AI agents
                    to intelligent process automation and RAG-powered knowledge systems, we bring the power of
                    modern AI to your operations.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    Our AI engineers and data scientists work closely with your team to design, build, and
                    deploy AI solutions that deliver measurable business outcomes — not just technology for
                    technology's sake.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <a href="https://www.prama-ai.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Prama AI →</a>
                    <button className="btn-outline" style={{ color:"var(--charcoal)", borderColor:"rgba(43,43,43,.4)" }} onClick={() => setPage("contact")}>Book AI Consultation</button>
                  </div>
                  <div className="highlight-box" style={{ marginTop:28 }}>
                    <p><strong style={{ color:"var(--charcoal)" }}>LinkLens</strong> — our AI-powered web intelligence agent — is a flagship product of Prama AI, enabling businesses to automate complex research and data extraction workflows.</p>
                  </div>
                </div>
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"var(--shadow-lg)", background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", padding:"48px 40px", display:"flex", flexDirection:"column", justifyContent:"center", minHeight:360 }}>
                  <div style={{ fontSize:"3.5rem", marginBottom:24, textAlign:"center" }}>🤖</div>
                  <h3 style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:"1.6rem", textAlign:"center", marginBottom:16 }}>Prama AI Australia</h3>
                  <p style={{ color:"rgba(255,255,255,.75)", textAlign:"center", lineHeight:1.7, fontSize:".95rem" }}>AI Solutions · AI Agents · Process Automation · RAG Development</p>
                  <div style={{ marginTop:28, display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
                    {["AI Agents","RAG Pipelines","LLM Integration","Automation","LinkLens"].map(t => (
                      <span key={t} style={{ background:"rgba(212,160,33,.2)", color:"var(--gold)", border:"1px solid rgba(212,160,33,.4)", fontSize:".78rem", fontWeight:600, padding:"4px 14px", borderRadius:100 }}>{t}</span>
                    ))}
                  </div>
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
                <div style={{ width:44, height:44, background:"var(--charcoal)", color:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1.1rem", margin:"0 auto 16px" }}>{n}</div>
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
