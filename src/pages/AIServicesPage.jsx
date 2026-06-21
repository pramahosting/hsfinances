import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import ProcessSection from "../components/ProcessSection";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const PRAMA_SERVICES = [
  { icon: "🤖", title: "AI Solutions & Strategy", list: ["End-to-end AI solution design and delivery", "AI readiness assessment for your business", "Custom AI model development and fine-tuning", "AI integration with existing business systems"] },
  { icon: "🕵️", title: "AI Agents Development", list: ["Autonomous AI agent design and build", "Multi-agent workflow orchestration", "Web intelligence and research agents (LinkLens)", "Task automation agents for business processes"] },
  { icon: "⚙️", title: "Process Automation using AI", list: ["Intelligent document processing and extraction", "AI-powered workflow automation", "RPA combined with AI for end-to-end automation", "Business process optimisation using ML insights"] },
  { icon: "🗂️", title: "RAG Development", list: ["Retrieval-Augmented Generation (RAG) pipeline design", "Custom knowledge base and vector store setup", "LLM integration with your internal data", "Semantic search and intelligent Q&A systems"] },
  { icon: "🔗", title: "LLM Integration & Engineering", list: ["OpenAI, Anthropic, and open-source LLM integration", "Prompt engineering and optimisation", "LLM API design and management", "Fine-tuning and custom model training"] },
  { icon: "📊", title: "AI Consulting & Training", list: ["AI strategy workshops for leadership teams", "Staff AI literacy and upskilling programs", "AI governance and ethical AI frameworks", "Ongoing AI advisory and innovation roadmaps"] },
];

export default function AIServicesPage() {
  useReveal();
  usePageMeta(
    "AI Solutions & Automation Services Sydney | AI Agents, RAG, LLM Integration",
    "Custom AI model development, AI agent design, RAG pipelines, LLM integration and intelligent process automation for Australian businesses. Powered by Prama AI.",
    "/services/ai-automation"
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-dark)" }}>
            <Link to="/services" style={{ color: "inherit", textDecoration: "none" }}>Our Services</Link> / AI &amp; Automation
          </div>
          <h1>AI &amp; Automation Solutions</h1>
          <p>Intelligent automation for your business — from autonomous AI agents to RAG-powered knowledge systems.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <div className="grid-2" style={{ alignItems: "start" }}>
              <div>
                <div className="section-eyebrow">AI &amp; Automation Solutions</div>
                <h2 className="section-title">Intelligent Automation for Your Business</h2>
                <div className="divider" />
                <p style={{ color: "var(--slate)", lineHeight: 1.8, marginBottom: 16 }}>
                  Our AI &amp; Automation practice delivers cutting-edge artificial intelligence solutions
                  for Australian businesses — from autonomous AI agents to intelligent process automation
                  and RAG-powered knowledge systems.
                </p>
                <p style={{ color: "var(--slate)", lineHeight: 1.8 }}>
                  Our AI engineers work closely with your team to design, build, and deploy AI solutions
                  that deliver measurable business outcomes. Powered by Prama AI Australia.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
                  <a href="https://www.prama-ai.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Visit Prama AI →</a>
                  <Link to="/contact" className="btn-outline" style={{ color: "var(--charcoal)", borderColor: "rgba(43,43,43,.4)" }}>Book AI Consultation</Link>
                </div>
              </div>
              <div style={{ borderRadius: 16, background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 360, boxShadow: "var(--shadow-lg)" }}>
                <div style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: 24 }}>🤖</div>
                <h3 style={{ color: "#fff", fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", textAlign: "center", marginBottom: 16 }}>AI &amp; Automation Solutions</h3>
                <p style={{ color: "rgba(255,255,255,.75)", textAlign: "center", lineHeight: 1.7, fontSize: ".92rem", marginBottom: 20 }}>AI Solutions · AI Agents · Process Automation · RAG Development</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                  {["AI Agents", "RAG Pipelines", "LLM Integration", "Automation", "LinkLens", "Prama AI"].map(t => (
                    <span key={t} style={{ background: "rgba(212,160,33,.2)", color: "var(--gold)", border: "1px solid rgba(212,160,33,.4)", fontSize: ".78rem", fontWeight: 600, padding: "4px 14px", borderRadius: 100 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid-3">
            {PRAMA_SERVICES.map((s, i) => (
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
          <p>Talk to one of our Sydney-based experts about your AI and automation needs.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us Today →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
