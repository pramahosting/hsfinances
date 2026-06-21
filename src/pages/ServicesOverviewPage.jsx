import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const CATEGORIES = [
  {
    path: "/services/financial-services",
    icon: "💼",
    title: "Financial Services",
    desc: "Accounting, BAS & GST compliance, bookkeeping, STP Phase 2 payroll, tax advisory, CFO-as-a-Service and financial advisory.",
    tags: ["BAS & GST", "Bookkeeping", "Payroll", "Tax Advisory", "CFO-as-a-Service"],
  },
  {
    path: "/services/project-product-management",
    icon: "📋",
    title: "Project & Product Management",
    desc: "End-to-end project delivery, Agile & waterfall frameworks, market discovery, product strategy and roadmap development.",
    tags: ["Project Delivery", "Agile", "Product Strategy", "Market Discovery"],
  },
  {
    path: "/services/ai-automation",
    icon: "🤖",
    title: "AI & Automation Solutions",
    desc: "Custom AI solutions, autonomous AI agents, RAG pipelines, LLM integration and intelligent process automation.",
    tags: ["AI Agents", "RAG", "LLM Integration", "Automation"],
  },
];

export default function ServicesOverviewPage() {
  useReveal();
  usePageMeta(
    "Our Services | Financial, Project & Product Management, AI Solutions Sydney",
    "Explore Headstart Finances' full range of services: accounting & BAS/GST compliance, project & product management, and AI-powered automation solutions for Australian businesses.",
    "/services"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-dark)" }}>Our Services</div>
          <h1>Full-Service Financial &amp; Technology Solutions</h1>
          <p>Comprehensive financial, project, product, and AI services — all under one roof.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.path}
                to={c.path}
                className="service-card reveal"
                style={{ transitionDelay: `${i * 80}ms`, display: "block", textDecoration: "none", color: "inherit" }}
              >
                <div className="service-icon">{c.icon}</div>
                <div className="service-title">{c.title}</div>
                <p className="service-text" style={{ marginBottom: 16 }}>{c.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {c.tags.map((t) => (
                    <span key={t} style={{ background: "rgba(212,160,33,.12)", color: "var(--gold-dark)", fontSize: ".72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{t}</span>
                  ))}
                </div>
                <span style={{ color: "var(--gold-dark)", fontWeight: 700, fontSize: ".9rem" }}>Explore {c.title} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Start with a Free Consultation</h2>
          <p>Talk to one of our Sydney-based experts about your financial, project, product, or AI needs.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us Today →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
