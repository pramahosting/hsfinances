import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const ACCFINO_FEATURES = [
  { icon: "🔀", title: "AI Bank Reconciliation",    desc: "Dual-engine LLM + RDR rule classifier auto-categorises every transaction, computes GST, detects duplicates, and flags anomalies. 95% auto-classified." },
  { icon: "📈", title: "ML Cash Flow Forecasting",  desc: "Trained ensemble model (scikit-learn) predicts next-month cash flow from your transaction history. Visual charts included on all plans." },
  { icon: "₿",  title: "Crypto & Equity CGT",       desc: "Import from any AU or global exchange. Computes capital gains under ATO rules (FIFO/ACB) and exports an ATO-ready tax summary." },
  { icon: "🧾", title: "GST Invoice Management",    desc: "Generate GST-compliant invoices, extract data from any PDF using built-in OCR, and manage customer records in one screen." },
  { icon: "🏦", title: "Open Banking Feeds",        desc: "Direct connections to Westpac, CommBank, ANZ, and NAB. Transactions flow in automatically and are classified in real time." },
  { icon: "🔒", title: "AU Data Residency Always",  desc: "Your transaction data, invoices, and customer records never leave Australian infrastructure. Designed and hosted in Australia from the ground up." },
];

const LINKLENS_FEATURES = [
  { icon: "🔗", title: "Intelligent Web Research",    desc: "Automate complex web research tasks with AI agents that navigate, extract, and synthesise information at scale." },
  { icon: "🤖", title: "AI-Powered Workflows",        desc: "Build custom AI agent workflows tailored to your business intelligence and financial research needs." },
  { icon: "📋", title: "Structured Data Extraction",  desc: "Convert unstructured web content into clean, structured data ready for analysis and reporting." },
  { icon: "⚡", title: "Real-Time Processing",        desc: "Live AI reasoning and web browsing capabilities deliver insights in minutes, not days." },
];

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

export default function ProductsPage() {
  useReveal();

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color:"var(--gold)" }}>Our Products</div>
          <h1>Software Built for Australian Finance</h1>
          <p>Our in-house SaaS platforms combine AI, automation, and deep Australian compliance expertise into tools your team will actually love.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">

          {/* ── ACCFINO ── */}
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div style={{ background:"var(--n100)", borderRadius:20, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
              <div style={{ background:"linear-gradient(135deg, #2B2B2B 0%, #3D3820 100%)", padding:"52px 48px 40px" }}>
                <div style={{ display:"inline-block", background:"rgba(212,160,33,.25)", color:"var(--gold)", fontSize:".75rem", fontWeight:700, padding:"5px 16px", borderRadius:100, letterSpacing:".2em", marginBottom:14, border:"1px solid rgba(212,160,33,.4)" }}>LIVE PRODUCT</div>
                <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
                  <div>
                    <h2 style={{ color:"#fff", fontSize:"clamp(2rem,4vw,3rem)", fontFamily:"'Playfair Display',serif" }}>Accfino</h2>
                    <p style={{ color:"rgba(255,255,255,.8)", fontSize:"1.05rem", marginTop:8 }}>Intelligent Accounting for Small Business — Built in Australia</p>
                  </div>
                  <a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer"
                     style={{ marginLeft:"auto", background:"var(--gold)", color:"var(--navy)", padding:"14px 28px", borderRadius:8, fontWeight:700, fontSize:".92rem", display:"inline-flex", alignItems:"center", gap:8, flexShrink:0 }}>
                    Visit Accfino →
                  </a>
                </div>
              </div>
              <div style={{ padding:"48px" }}>
                <p style={{ color:"var(--slate)", lineHeight:1.8, fontSize:"1rem", marginBottom:36, maxWidth:740 }}>
                  Accfino is a next-generation accounting platform purpose-built for Australian SMEs. It unifies
                  AI bank reconciliation, ML cash flow forecasting, Crypto &amp; Equity CGT, Open Banking, and
                  GST invoicing — everything traditional platforms charge extra for, included from day one.
                </p>
                <div className="grid-3" style={{ marginBottom:36 }}>
                  {ACCFINO_FEATURES.map((f) => (
                    <div key={f.title} className="service-card" style={{ background:"#fff" }}>
                      <div className="service-icon">{f.icon}</div>
                      <div className="service-title">{f.title}</div>
                      <p className="service-text">{f.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background:"var(--sky)", borderRadius:12, padding:"28px 32px", display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
                  <div>
                    <div style={{ fontWeight:700, color:"var(--navy)", fontSize:"1.05rem", marginBottom:4 }}>Pricing — Free to Enterprise</div>
                    <p style={{ color:"var(--slate)", fontSize:".88rem" }}>Free base plan forever · Starter $0/mo · Pro $18/mo · Business $39/mo · All prices AUD inc. GST</p>
                  </div>
                  <a href="https://www.accfino.com" target="_blank" rel="noopener noreferrer"
                     style={{ marginLeft:"auto", background:"var(--charcoal)", color:"#fff", padding:"12px 24px", borderRadius:8, fontWeight:600, fontSize:".88rem", flexShrink:0 }}>
                    Start Free →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── LINKLENS ── */}
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div style={{ background:"var(--n100)", borderRadius:20, overflow:"hidden", boxShadow:"var(--shadow-lg)" }}>
              <div style={{ background:"linear-gradient(135deg, #2d3a52 0%, #4B5C7A 100%)", padding:"52px 48px 40px" }}>
                <div style={{ display:"inline-block", background:"rgba(212,160,33,.25)", color:"var(--gold)", fontSize:".75rem", fontWeight:700, padding:"5px 16px", borderRadius:100, letterSpacing:".2em", marginBottom:14, border:"1px solid rgba(212,160,33,.4)" }}>AI AGENT PLATFORM</div>
                <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
                  <div>
                    <h2 style={{ color:"#fff", fontSize:"clamp(2rem,4vw,3rem)", fontFamily:"'Playfair Display',serif" }}>LinkLens</h2>
                    <p style={{ color:"rgba(255,255,255,.8)", fontSize:"1.05rem", marginTop:8 }}>Intelligent AI Agent — Powered by Prama AI</p>
                  </div>
                  <a href="https://linklens.prama-ai.com" target="_blank" rel="noopener noreferrer"
                     style={{ marginLeft:"auto", background:"var(--gold)", color:"var(--navy)", padding:"14px 28px", borderRadius:8, fontWeight:700, fontSize:".92rem", display:"inline-flex", alignItems:"center", gap:8, flexShrink:0 }}>
                    Try LinkLens →
                  </a>
                </div>
              </div>
              <div style={{ padding:"48px" }}>
                <p style={{ color:"var(--slate)", lineHeight:1.8, fontSize:"1rem", marginBottom:36, maxWidth:740 }}>
                  LinkLens is an AI-powered web intelligence and research agent developed under the Prama AI brand.
                  It enables businesses, analysts, and knowledge workers to automate complex research workflows,
                  extract structured insights from the web, and supercharge decision-making with real-time AI reasoning.
                </p>
                <div className="grid-2" style={{ gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))" }}>
                  {LINKLENS_FEATURES.map((f) => (
                    <div key={f.title} className="service-card" style={{ background:"#fff" }}>
                      <div className="service-icon">{f.icon}</div>
                      <div className="service-title">{f.title}</div>
                      <p className="service-text">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── HSPAYROLL ── */}
          <div className="reveal">
            <div style={{ background:"var(--n100)", borderRadius:20, overflow:"hidden", boxShadow:"var(--shadow-lg)", opacity:.92 }}>
              <div style={{ background:"linear-gradient(135deg, #5a3800 0%, #7a4e00 100%)", padding:"52px 48px 40px" }}>
                <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"#fff", fontSize:".75rem", fontWeight:700, padding:"5px 16px", borderRadius:100, letterSpacing:".2em", marginBottom:14, border:"1px solid rgba(255,255,255,.25)" }}>🚧 UNDER DEVELOPMENT</div>
                <h2 style={{ color:"#fff", fontSize:"clamp(2rem,4vw,3rem)", fontFamily:"'Playfair Display',serif" }}>HSPayroll</h2>
                <p style={{ color:"rgba(255,255,255,.8)", fontSize:"1.05rem", marginTop:8 }}>Australia's Smartest Payroll System — Coming Soon</p>
              </div>
              <div style={{ padding:"48px" }}>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(212,160,33,.12)", border:"1px solid rgba(212,160,33,.3)", color:"var(--gold)", padding:"8px 18px", borderRadius:8, fontSize:".85rem", fontWeight:600, marginBottom:24 }}>
                  🔔 Join the Waitlist
                </div>
                <p style={{ color:"var(--slate)", lineHeight:1.8, fontSize:"1rem", marginBottom:36, maxWidth:740 }}>
                  HSPayroll is being built from the ground up to handle the full complexity of Australian payroll —
                  STP Phase 2, superannuation guarantee, award interpretation, Fair Work compliance, and payslip
                  generation — all automated and integrated with Accfino.
                </p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20, marginBottom:32 }}>
                  {HSPAYROLL_FEATURES.map((f) => (
                    <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:".88rem", color:"var(--slate)" }}>
                      <span style={{ color:"var(--gold)", fontWeight:700, flexShrink:0, marginTop:1 }}>→</span>{f}
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
                  <a href="mailto:info@hsfinances.com.au?subject=HSPayroll Waitlist"
                     style={{ background:"var(--charcoal)", color:"#fff", padding:"12px 24px", borderRadius:8, fontWeight:600, fontSize:".88rem" }}>
                    Join Waitlist →
                  </a>
                  <span style={{ color:"var(--slate)", fontSize:".85rem" }}>Expected launch: Q3 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
