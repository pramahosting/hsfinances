import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import ProcessSection from "../components/ProcessSection";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const PPM_SERVICES = [
  // ── Project Management ──
  { icon: "🚀", title: "Project Delivery", list: ["End-to-end project management", "Agile and waterfall delivery frameworks", "Software development project management", "Software implementation projects", "Release management"] },
  { icon: "📋", title: "Project Planning & Control", list: ["Budget tracking and reporting", "Schedule management", "Resource planning", "Earned value analysis"] },
  { icon: "✅", title: "Quality Assurance & Testing", list: ["Test planning and execution", "Project process improvement", "Project management process redesign"] },
  { icon: "👥", title: "Leadership & Team Management", list: ["Cross-functional team leadership", "Stakeholder & communication management", "Executive communications and status reporting", "Vendor management", "Client management", "Conflict resolution"] },
  // ── Product Management ──
  { icon: "🔍", title: "Market Analysis & Discovery", list: ["Competitive analysis", "Market sizing & research", "Analysis of market dynamics and new entrants", "User research and customer interviews", "DVF discovery framework", "Customer journey mapping", "Persona development", "Pretotyping & opportunity mapping", "Requirements gathering"] },
  { icon: "🎯", title: "Product Strategy", list: ["AI product strategy development", "Product positioning & roadmap development", "Business model design", "Product-market fit analysis", "Investment readiness", "Brand positioning", "Product portfolio improvement"] },
  { icon: "⚡", title: "Product Delivery", list: ["Agile product development methodology", "Sprint planning & user story creation", "Acceptance criteria definition", "Scope management", "Risk mitigation strategy development"] },
  { icon: "🌐", title: "Ecosystem Development", list: ["Development of external partnerships", "Management and pilot execution of external startups", "Accelerator program execution", "Executive-level product endorsement"] },
];

export default function PPMServicesPage() {
  useReveal();
  usePageMeta(
    "Project & Product Management Services Sydney | Headstart Finances",
    "End-to-end project delivery, Agile & waterfall frameworks, product strategy, market discovery, and roadmap development for Australian businesses.",
    "/services/project-product-management"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-dark)" }}>
            <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Our Services</Link> / Project &amp; Product Management
          </div>
          <h1>Project &amp; Product Management Services</h1>
          <p>End-to-end project delivery and product strategy that gets you to market faster.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="section-eyebrow">Project &amp; Product Management</div>
                <h2 className="section-title">From Delivery to Strategy</h2>
                <div className="divider" />
                <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 16 }}>
                  Our project and product management practice combines disciplined delivery —
                  Agile and waterfall frameworks, QA, and stakeholder management — with strategic
                  product thinking: market discovery, positioning, and roadmap development.
                </p>
                <p style={{ color: "var(--slate)", lineHeight: 1.8 }}>
                  Whether you need end-to-end project delivery or a product strategy that gets you to
                  market faster, our team works alongside yours to make it happen.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
                  <Link to="/contact" className="btn-primary">Discuss a Project →</Link>
                  <a href="mailto:info@hsfinances.com.au" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,33,.12)", color: "var(--charcoal)", padding: "14px 24px", borderRadius: 8, fontWeight: 600, fontSize: ".92rem" }}>✉️ Email Us</a>
                </div>
              </div>
              <div style={{ borderRadius: 16, background: "linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 100%)", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 360, boxShadow: "var(--shadow-lg)" }}>
                <div style={{ fontSize: "3rem", textAlign: "center", marginBottom: 20 }}>📋🎯</div>
                <h3 style={{ color: "#fff", fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", textAlign: "center", marginBottom: 16 }}>Project &amp; Product Management</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                  {["Agile", "Waterfall", "QA & Testing", "Product Strategy", "Roadmap", "Ecosystem", "Market Analysis", "Discovery"].map(t => (
                    <span key={t} style={{ background: "rgba(212,160,33,.2)", color: "var(--gold)", border: "1px solid rgba(212,160,33,.4)", fontSize: ".75rem", fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid-3">
            {PPM_SERVICES.map((s, i) => (
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
          <p>Talk to one of our Sydney-based experts about your project or product needs.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us Today →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
