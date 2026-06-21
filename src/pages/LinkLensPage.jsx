import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const LINKLENS_FEATURES = [
  { icon: "🔗", title: "Intelligent Web Research", desc: "Automate complex web research tasks with AI agents that navigate, extract, and synthesise information at scale." },
  { icon: "🤖", title: "AI-Powered Workflows", desc: "Build custom AI agent workflows tailored to your business intelligence and financial research needs." },
  { icon: "📋", title: "Structured Data Extraction", desc: "Convert unstructured web content into clean, structured data ready for analysis and reporting." },
  { icon: "⚡", title: "Real-Time Processing", desc: "Live AI reasoning and web browsing capabilities deliver insights in minutes, not days." },
];

export default function LinkLensPage() {
  useReveal();
  usePageMeta(
    "LinkLens | AI Agent Platform for Web Intelligence & Research — Prama AI",
    "LinkLens is an AI-powered web intelligence and research agent that automates complex research workflows and extracts structured insights from the web.",
    "/products/linklens"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
            <Link to="/products" style={{ color: "inherit", textDecoration: "none" }}>Our Products</Link> / LinkLens
          </div>
          <h1>LinkLens — Intelligent AI Agent Platform</h1>
          <p>Powered by Prama AI. Automate research, web intelligence, and knowledge workflows.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal">
            <div style={{ background: "var(--n100)", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <div style={{ background: "linear-gradient(135deg, #2d3a52 0%, #4B5C7A 100%)", padding: "52px 48px 40px" }}>
                <div style={{ display: "inline-block", background: "rgba(212,160,33,.25)", color: "var(--gold)", fontSize: ".75rem", fontWeight: 700, padding: "5px 16px", borderRadius: 100, letterSpacing: ".2em", marginBottom: 14, border: "1px solid rgba(212,160,33,.4)" }}>AI AGENT PLATFORM</div>
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                  <div>
                    <h2 style={{ color: "#fff", fontSize: "clamp(2rem,4vw,3rem)", fontFamily: "'Playfair Display',serif" }}>LinkLens</h2>
                    <p style={{ color: "rgba(255,255,255,.8)", fontSize: "1.05rem", marginTop: 8 }}>Intelligent AI Agent — Powered by Prama AI</p>
                  </div>
                  <a href="https://linklens.prama-ai.com" target="_blank" rel="noopener noreferrer"
                    style={{ marginLeft: "auto", background: "var(--gold)", color: "var(--navy)", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: ".92rem", display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    Try LinkLens →
                  </a>
                </div>
              </div>
              <div style={{ padding: "48px" }}>
                <p style={{ color: "var(--slate)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 36, maxWidth: 740 }}>
                  LinkLens is an AI-powered web intelligence and research agent developed under the Prama AI brand.
                  It enables businesses, analysts, and knowledge workers to automate complex research workflows,
                  extract structured insights from the web, and supercharge decision-making with real-time AI reasoning.
                </p>
                <div className="grid-2" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
                  {LINKLENS_FEATURES.map((f) => (
                    <div key={f.title} className="service-card" style={{ background: "#fff" }}>
                      <div className="service-icon">{f.icon}</div>
                      <div className="service-title">{f.title}</div>
                      <p className="service-text">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container reveal">
          <h2>Curious How LinkLens Could Help Your Team?</h2>
          <p>Talk to us about deploying AI research agents for your business.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
