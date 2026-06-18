import { IMG } from "../utils/constants";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const SERVICES_OVERVIEW = [
  { icon: "📊", title: "Accounting & Financial Advisory",     text: "Full-cycle bookkeeping, BAS & GST lodgement, tax planning, CFO-as-a-Service and strategic financial guidance — all delivered by CA and CPA-qualified professionals." },
  { icon: "🚀", title: "Project & Product Management",   text: "End-to-end project delivery using Agile and waterfall frameworks, paired with product strategy, roadmap development and market discovery — from concept to launch." },
  { icon: "🎯", title: "Product Strategy & Delivery", text: "AI product strategy, competitive analysis, DVF discovery, sprint planning and ecosystem development — helping you build the right product and get it to market faster." },
  { icon: "🤖", title: "AI Solutions & Automation",    text: "Custom AI model development, intelligent process automation, RAG pipelines and LLM integration — powered by Accfino and LinkLens under the Prama AI platform." },
  { icon: "💰", title: "Payroll & Compliance",     text: "STP Phase 2 payroll, superannuation, PAYG withholding and Fair Work Act adherence — accurate, on-time and fully ATO-compliant." },
  { icon: "🕵️", title: "AI Agents & Consulting",   text: "Autonomous AI agent design, multi-agent workflow orchestration, AI readiness assessments and staff AI upskilling — strategy through to production delivery." },
];

const TESTIMONIALS = [
  { q: "Headstart streamlined our entire finance function. Our BAS is always on time and we sleep easy at ATO time.", name: "Angela T.", role: "Director, Sydney Retail Group" },
  { q: "The Accfino platform transformed how we manage cash flow. The AI reconciliation alone saves my accountant 4 hours a month.", name: "Marcus B.", role: "Founder, Tech Startup Melbourne" },
  { q: "The technology team delivered our custom ERP on time and on budget. Exceptional work.", name: "Priya S.", role: "COO, Manufacturing SME" },
];

const PRODUCTS_TEASER = [
  { name: "Accfino",   tag: "Live Product",       desc: "AI-powered accounting with ML cash flow forecasting, crypto CGT, open banking, and BAS lodgement. Built and hosted in Australia.", link: "https://www.accfino.com",           color: "#0B2D6E" },
  { name: "LinkLens",  tag: "AI Agent Platform",  desc: "Intelligent AI agent platform under the Prama AI brand. Automate research, web intelligence, and knowledge workflows.",          link: "https://linklens.prama-ai.com",     color: "#2d3a52" },
  { name: "HSPayroll", tag: "Coming Soon",         desc: "A next-generation Australian payroll system with STP Phase 2, superannuation automation, and Fair Work compliance built in.",  link: null,                                color: "#7a4e00" },
];

export default function HomePage({ setPage }) {
  useReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url('${IMG.hero}')` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">Sydney CBD · Est. {2022}</div>
          <h1>Your <em>Financial Edge</em> in the Australian Market</h1>
          <p className="hero-sub">
            Headstart Finances Australia delivers expert accounting, financial advisory, payroll,
            and AI-powered technology solutions — purpose-built for Australian businesses.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage("services")}>Explore Services →</button>
            <button className="btn-outline" onClick={() => setPage("contact")}>Talk to an Expert</button>
          </div>
          <div className="hero-stats">
            {[["$20M+","Finance Managed"],["7+","Years Experience"],["99%","Compliance Rate"]].map(([n, l]) => (
              <div key={l} className="hero-stat">
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── FEATURES BAR ── */}
      <div className="features-bar">
        <div className="features-bar-inner">
          {[
            ["ATO Compliant","Fully compliant with all ATO regulations and reporting standards"],
            ["CA & CPA Qualified","Supported by a team of CA ANZ and CPA Australia certified professionals"],
            ["Advanced Data Security","Your data is fully protected with industry-leading security technologies"],
            ["24-Hour Turnaround","Fast, reliable service with guaranteed response times"]
          ].map(([t, d]) => (
            <div key={t} className="feat-item">
              <div className="feat-num">✓</div>
              <div className="feat-label"><strong>{t}</strong>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title">Comprehensive Financial &amp; Technology Services</h2>
            <div className="divider" />
            <p className="section-lead">
              From day-to-day bookkeeping to AI-driven platforms, Headstart Finances covers every
              financial need of the modern Australian business.
            </p>
          </div>
          <div className="grid-3">
            {SERVICES_OVERVIEW.map((s, i) => (
              <div key={s.title} className="service-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <p className="service-text">{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-primary" onClick={() => setPage("services")}>View All Services →</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            <div className="about-img reveal">
              <img src={IMG.about} alt="Headstart Finances team at work" />
            </div>
            <div className="reveal">
              <div className="section-eyebrow">About Headstart Finances</div>
              <h2 className="section-title">Australian Expertise, Global Standards</h2>
              <div className="divider" />
              <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 16 }}>
                Founded and headquartered in Sydney's CBD, Headstart Finances Australia Pty Ltd was
                built to bridge the gap between traditional accounting and modern technology. We serve
                businesses from sole traders to mid-market enterprises across Australia.
              </p>
              <ul className="about-list">
                {[
                  ["🏛️","Registered Australian company — ABN 88 656 265 860"],
                  ["🎓","CA and CPA Australia qualified professionals"],
                  ["🚀","AI-powered products. Projects expertly delivered"],
                  ["💡","Innovators in FinTech through Accfino and LinkLens"],
                ].map(([icon, text]) => (
                  <li key={text}><span className="icon">{icon}</span>{text}</li>
                ))}
              </ul>
              <button className="btn-primary" style={{ marginTop: 28 }} onClick={() => setPage("about")}>Our Story →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS TEASER ── */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-eyebrow">Our Products</div>
            <h2 className="section-title">Technology Built for Australian Finance</h2>
            <div className="divider center" />
            <p className="section-lead">
              Our in-house SaaS products are designed to make financial management smarter, faster,
              and fully ATO-compliant.
            </p>
          </div>
          <div className="grid-3">
            {PRODUCTS_TEASER.map((p) => (
              <div key={p.name} className="card reveal">
                <div style={{ background: p.color, padding: "32px 28px" }}>
                  <div style={{ display:"inline-block", background:"rgba(255,255,255,.15)", color:"#fff", fontSize:".72rem", fontWeight:600, padding:"4px 12px", borderRadius:100, letterSpacing:".15em", marginBottom:12 }}>{p.tag}</div>
                  <h3 style={{ color:"#fff", fontSize:"1.8rem", fontFamily:"'Playfair Display',serif" }}>{p.name}</h3>
                </div>
                <div className="card-body">
                  <p className="card-text">{p.desc}</p>
                  {p.link
                    ? <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">Visit {p.name} →</a>
                    : <span className="coming-badge">Under Development</span>
                  }
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:40 }}>
            <button className="btn-primary" onClick={() => setPage("products")}>Explore All Products →</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-eyebrow">Client Stories</div>
            <h2 className="section-title">Trusted by Australian Businesses</h2>
            <div className="divider center" />
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="card-body">
                  <div style={{ fontSize:"2rem", color:"var(--gold)", marginBottom:16, lineHeight:1 }}>"</div>
                  <p style={{ fontStyle:"italic", color:"var(--slate)", lineHeight:1.75, fontSize:".92rem", marginBottom:24 }}>{t.q}</p>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:40, height:40, borderRadius:"50%", background:"var(--sky)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, color:"var(--navy)", flexShrink:0 }}>{t.name[0]}</div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:".88rem", color:"var(--navy)" }}>{t.name}</div>
                      <div style={{ fontSize:".78rem", color:"var(--gold)", fontWeight:600 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <div className="reveal">
            <h2>Ready to Headstart Your Finances?</h2>
            <p>Book a free 30-minute consultation with one of our Sydney-based financial experts today.</p>
            <div className="cta-btns">
              <button className="btn-primary" onClick={() => setPage("contact")}>Book Free Consultation</button>
              <button className="btn-outline" onClick={() => setPage("services")}>View Our Services</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
