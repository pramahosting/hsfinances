import { useState } from "react";
import { IMG } from "../utils/constants";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const VALUES = [
  { icon: "🎯", title: "Precision",       text: "Every number matters. We apply meticulous attention to detail across all financial work." },
  { icon: "🤝", title: "Partnership",     text: "We act as your long-term financial partner, not just a service provider." },
  { icon: "💡", title: "Innovation",      text: "We build and use cutting-edge technology to deliver smarter financial outcomes." },
  { icon: "🛡️", title: "Integrity",       text: "Honest, transparent advice and strict compliance with Australian professional standards." },
  { icon: "🌏", title: "Local Expertise", text: "Deep understanding of the Australian tax system, ATO requirements, and local market dynamics." },
  { icon: "⚡", title: "Responsiveness",  text: "Fast turnaround, clear communication, and support when you need it most." },
];

export default function AboutPage() {
  useReveal();
  const [tab, setTab] = useState("story");

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color: "var(--gold-dark)" }}>About Us</div>
          <h1>Built on Trust. Driven by Numbers. Powered by Technology.</h1>
          <p>Headstart Finances Australia Pty Ltd is a Sydney-based financial services and technology company serving Australian businesses with precision and passion.</p>
        </div>
      </div>

      {/* TAB SECTION */}
      <section className="section">
        <div className="container">
          <div className="tab-nav">
            {[["story","Our Story"],["values","Our Values"]].map(([k, l]) => (
              <button key={k} className={`tab-btn${tab === k ? " active" : ""}`} onClick={() => setTab(k)}>{l}</button>
            ))}
          </div>

          {/* OUR STORY */}
          {tab === "story" && (
            <div className="grid-2">
              <div className="reveal">
                <div className="section-eyebrow">Our Story</div>
                <h2 className="section-title">From Idea to Institution</h2>
                <div className="divider" />
                <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                  Headstart Finances Australia Pty Ltd was founded with a singular vision: to give Australian
                  businesses — especially SMEs — access to the calibre of financial expertise previously
                  reserved for large corporations.
                </p>
                <p style={{ color:"var(--slate)", lineHeight:1.8, marginBottom:16 }}>
                  Headquartered at 11 York Street in the heart of Sydney's CBD, we combine traditional
                  accounting rigour with modern AI-powered platforms. Our clients range from sole traders
                  and startups to established mid-market businesses across every sector.
                </p>
                <p style={{ color:"var(--slate)", lineHeight:1.8 }}>
                  Through our service arms and our in-house SaaS products Accfino and LinkLens,
                  we deliver end-to-end financial and AI-Powered technology solutions under one roof.
                </p>
                <div className="highlight-box">
                  <p>
                    <strong style={{ color:"var(--navy)" }}>ABN:</strong> 88 656 265 860 &nbsp;|&nbsp;
                    <strong style={{ color:"var(--navy)" }}>Registered:</strong> 11 York Street, Sydney NSW 2000 &nbsp;|&nbsp;
                    <strong style={{ color:"var(--navy)" }}>Contact:</strong> info@hsfinances.com.au
                  </p>
                </div>
              </div>
              <div className="about-img reveal">
                <img src={IMG.sydney} alt="Sydney CBD" />
              </div>
            </div>
          )}

          {/* VALUES */}
          {tab === "values" && (
            <div>
              <div className="section-header reveal">
                <div className="section-eyebrow">What Guides Us</div>
                <h2 className="section-title">Our Core Values</h2>
                <div className="divider" />
              </div>
              <div className="grid-3">
                {VALUES.map((v, i) => (
                  <div key={v.title} className="value-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-title">{v.title}</div>
                    <p className="value-text">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TEAM */}
          {tab === "team" && (
            <div>
              <div className="section-header reveal">
                <div className="section-eyebrow">Leadership</div>
                <h2 className="section-title">Meet Our Team</h2>
                <div className="divider" />
                <p className="section-lead">Our team combines deep Australian financial expertise with cutting-edge technology skills.</p>
              </div>
              <div className="grid-3">
                {TEAM.map((m, i) => (
                  <div key={m.name} className="team-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                    <img src={m.img} alt={m.name} />
                    <div className="team-info">
                      <div className="team-name">{m.name}</div>
                      <div className="team-role">{m.role}</div>
                      <p className="team-bio">{m.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAREERS */}
          {tab === "careers" && (
            <div>
              <div className="section-header reveal">
                <div className="section-eyebrow">Join Our Team</div>
                <h2 className="section-title">Careers at Headstart Finances</h2>
                <div className="divider" />
                <p className="section-lead">We're always looking for talented finance professionals and technologists to join our growing Sydney team.</p>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                {CAREERS.map((c, i) => (
                  <div key={c.title} className="career-card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                    <div>
                      <span className="career-type">{c.type}</span>
                      <div className="career-title">{c.title}</div>
                      <div className="career-meta">📍 {c.location} &nbsp;·&nbsp; {c.desc}</div>
                    </div>
                    <a href="mailto:info@hsfinances.com.au?subject=Career Enquiry" className="career-btn">Apply Now →</a>
                  </div>
                ))}
              </div>
              <div className="highlight-box" style={{ marginTop: 32 }}>
                <p>Don't see the right role? Send your CV to <strong>info@hsfinances.com.au</strong> with the subject line "Career Enquiry".</p>
              </div>
            </div>
          )}

          {/* PARTNERS */}
          {tab === "partners" && (
            <div>
              <div className="section-header reveal">
                <div className="section-eyebrow">Ecosystem</div>
                <h2 className="section-title">Our Partners &amp; Affiliations</h2>
                <div className="divider" />
                <p className="section-lead">We work with Australia's leading professional bodies and technology platforms to deliver the best outcomes for our clients.</p>
              </div>
              <div className="grid-3" style={{ marginBottom: 48 }}>
                {PARTNERS.map((p, i) => (
                  <div key={p} className="partner-logo reveal" style={{ transitionDelay: `${i * 60}ms` }}>{p}</div>
                ))}
              </div>
              <div className="highlight-box reveal">
                <p><strong style={{ color:"var(--charcoal)" }}>Technology Partners:</strong> Our technology and AI teams maintain partnerships with AWS, Microsoft Azure, and leading open-source communities to deliver reliable, scalable infrastructure for our clients and products.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
