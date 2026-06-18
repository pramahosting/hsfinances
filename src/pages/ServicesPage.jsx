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

const PPM_SERVICES = [
  // ── Project Management ──
  { icon: "🚀", title: "Project Delivery",           list: ["End-to-end project management","Agile and waterfall delivery frameworks","Software development project management","Software implementation projects","Release management"] },
  { icon: "📋", title: "Project Planning & Control", list: ["Budget tracking and reporting","Schedule management","Resource planning","Earned value analysis"] },
  { icon: "✅", title: "Quality Assurance & Testing", list: ["Test planning and execution","Project process improvement","Project management process redesign"] },
  { icon: "👥", title: "Leadership & Team Management",list: ["Cross-functional team leadership","Stakeholder & communication management","Executive communications and status reporting","Vendor management","Client management","Conflict resolution"] },
  // ── Product Management ──
  { icon: "🔍", title: "Market Analysis & Discovery", list: ["Competitive analysis","Market sizing & research","Analysis of market dynamics and new entrants","User research and customer interviews","DVF discovery framework","Customer journey mapping","Persona development","Pretotyping & opportunity mapping","Requirements gathering"] },
  { icon: "🎯", title: "Product Strategy",            list: ["AI product strategy development","Product positioning & roadmap development","Business model design","Product-market fit analysis","Investment readiness","Brand positioning","Product portfolio improvement"] },
  { icon: "⚡", title: "Product Delivery",            list: ["Agile product development methodology","Sprint planning & user story creation","Acceptance criteria definition","Scope management","Risk mitigation strategy development"] },
  { icon: "🌐", title: "Ecosystem Development",       list: ["Development of external partnerships","Management and pilot execution of external startups","Accelerator program execution","Executive-level product endorsement"] },
];

const PRAMA_SERVICES = [
  { icon: "🤖", title: "AI Solutions & Strategy",       list: ["End-to-end AI solution design and delivery","AI readiness assessment for your business","Custom AI model development and fine-tuning","AI integration with existing business systems"] },
  { icon: "🕵️", title: "AI Agents Development",         list: ["Autonomous AI agent design and build","Multi-agent workflow orchestration","Web intelligence and research agents (LinkLens)","Task automation agents for business processes"] },
  { icon: "⚙️", title: "Process Automation using AI",   list: ["Intelligent document processing and extraction","AI-powered workflow automation","RPA combined with AI for end-to-end automation","Business process optimisation using ML insights"] },
  { icon: "🗂️", title: "RAG Development",               list: ["Retrieval-Augmented Generation (RAG) pipeline design","Custom knowledge base and vector store setup","LLM integration with your internal data","Semantic search and intelligent Q&A systems"] },
  { icon: "🔗", title: "LLM Integration & Engineering", list: ["OpenAI, Anthropic, and open-source LLM integration","Prompt engineering and optimisation","LLM API design and management","Fine-tuning and custom model training"] },
  { icon: "📊", title: "AI Consulting & Training",       list: ["AI strategy workshops for leadership teams","Staff AI literacy and upskilling programs","AI governance and ethical AI frameworks","Ongoing AI advisory and innovation roadmaps"] },
];

const PROCESS_STEPS = [
  ["1","Discovery","Free 30-minute consultation to understand your needs, goals, and current situation."],
  ["2","Proposal","Clear, fixed-fee or retainer proposal tailored to your specific requirements and budget."],
  ["3","Onboarding","Smooth transition with dedicated onboarding support, system setup, and team introduction."],
  ["4","Delivery","Ongoing service delivery with regular reporting, proactive advice, and responsive support."],
];

export default function ServicesPage({ setPage, tab: tabProp, setTab: setTabProp }) {
  useReveal();
  const [localTab, setLocalTab] = useState(tabProp || "financial");
  const tab = tabProp || localTab;
  const setTab = setTabProp || setLocalTab;
  const services = tab === "financial" ? FINANCIAL_SERVICES : tab === "ppm" ? PPM_SERVICES : PRAMA_SERVICES;

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color:"var(--gold-dark)" }}>Our Services</div>
          <h1>Full-Service Financial &amp; Technology Solutions</h1>
          <p>Comprehensive financial, project, product, and AI services — all under one roof.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* TABS */}
          <div className="tab-nav reveal" style={{ marginBottom: 48 }}>
            <button className={`tab-btn${tab === "financial" ? " active" : ""}`} onClick={() => setTab("financial")}>💼 Financial Services</button>
            <button className={`tab-btn${tab === "ppm"       ? " active" : ""}`} onClick={() => setTab("ppm")}>📋 Project &amp; Product Management</button>
            <button className={`tab-btn${tab === "ai"        ? " active" : ""}`} onClick={() => setTab("ai")}>🤖 AI &amp; Automation Solutions</button>
          </div>

          {/* FINANCIAL INTRO */}
          {tab === "financial" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">Financial Services</div>
                  <h2 className="section-title">Accounting &amp; Financial Advisory</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Our financial services arm provides comprehensive accounting and financial management
                    for Australian businesses of all sizes — from sole traders to established companies
                    with complex structures.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    Our CPA Australia and CA ANZ certified team works as your dedicated financial partner —
                    not just at tax time, but year-round.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <button className="btn-primary" onClick={() => setPage("contact")}>Get a Quote →</button>
                    <a href="tel:0435064886" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(212,160,33,.12)", color:"var(--charcoal)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>📞 0435 064 886</a>
                  </div>
                </div>
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
                  <img src={IMG.services} alt="Financial Services" style={{ width:"100%", height:360, objectFit:"cover" }} />
                </div>
              </div>
            </div>
          )}

          {/* PROJECT & PRODUCT INTRO */}
          {tab === "ppm" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">Project &amp; Product Management</div>
                  <h2 className="section-title">From Strategy to Delivery</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Our Project &amp; Product Management practice covers the full lifecycle — from market
                    analysis and product discovery through to Agile delivery, release management, and
                    ecosystem development. We bring structured frameworks and experienced leadership to
                    every engagement.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    Whether you need end-to-end project delivery or a product strategy that gets you to
                    market faster, our team works alongside yours to make it happen.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <button className="btn-primary" onClick={() => setPage("contact")}>Discuss a Project →</button>
                    <a href="mailto:info@hsfinances.com.au" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(212,160,33,.12)", color:"var(--charcoal)", padding:"14px 24px", borderRadius:8, fontWeight:600, fontSize:".92rem" }}>✉️ Email Us</a>
                  </div>
                </div>
                <div style={{ borderRadius:16, background:"linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 100%)", padding:"48px 40px", display:"flex", flexDirection:"column", justifyContent:"center", minHeight:360, boxShadow:"var(--shadow-lg)" }}>
                  <div style={{ fontSize:"3rem", textAlign:"center", marginBottom:20 }}>📋🎯</div>
                  <h3 style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", textAlign:"center", marginBottom:16 }}>Project &amp; Product Management</h3>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
                    {["Agile","Waterfall","QA & Testing","Product Strategy","Roadmap","Ecosystem","Market Analysis","Discovery"].map(t => (
                      <span key={t} style={{ background:"rgba(212,160,33,.2)", color:"var(--gold)", border:"1px solid rgba(212,160,33,.4)", fontSize:".75rem", fontWeight:600, padding:"4px 12px", borderRadius:100 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI INTRO */}
          {tab === "ai" && (
            <div className="reveal" style={{ marginBottom: 48 }}>
              <div className="grid-2" style={{ alignItems:"start" }}>
                <div>
                  <div className="section-eyebrow">AI &amp; Automation Solutions</div>
                  <h2 className="section-title">Intelligent Automation for Your Business</h2>
                  <div className="divider" />
                  <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                    Our AI &amp; Automation practice delivers cutting-edge artificial intelligence solutions
                    for Australian businesses — from autonomous AI agents to intelligent process automation
                    and RAG-powered knowledge systems.
                  </p>
                  <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                    Our AI engineers work closely with your team to design, build, and deploy AI solutions
                    that deliver measurable business outcomes. Powered by Prama AI Australia.
                  </p>
                  <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:28 }}>
                    <a href="https://www.prama-ai.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Prama AI →</a>
                    <button className="btn-outline" style={{ color:"var(--charcoal)", borderColor:"rgba(43,43,43,.4)" }} onClick={() => setPage("contact")}>Book AI Consultation</button>
                  </div>

                </div>
                <div style={{ borderRadius:16, background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", padding:"48px 40px", display:"flex", flexDirection:"column", justifyContent:"center", minHeight:360, boxShadow:"var(--shadow-lg)" }}>
                  <div style={{ fontSize:"3.5rem", textAlign:"center", marginBottom:24 }}>🤖</div>
                  <h3 style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", textAlign:"center", marginBottom:16 }}>AI &amp; Automation Solutions</h3>
                  <p style={{ color:"rgba(255,255,255,.75)", textAlign:"center", lineHeight:1.7, fontSize:".92rem", marginBottom:20 }}>AI Solutions · AI Agents · Process Automation · RAG Development</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
                    {["AI Agents","RAG Pipelines","LLM Integration","Automation","LinkLens","Prama AI"].map(t => (
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
          <p>Talk to one of our Sydney-based experts about your financial, project, product, or AI needs.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => setPage("contact")}>Contact Us Today →</button>
          </div>
        </div>
      </section>
    </>
  );
}
