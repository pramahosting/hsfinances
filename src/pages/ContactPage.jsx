import { useState } from "react";
import { COMPANY } from "../utils/constants";
import { useReveal } from "../hooks/useReveal";
import "../styles/hero.css";
import "../styles/components.css";
import "../styles/layout.css";

const SERVICE_OPTIONS = [
  "BAS & GST Compliance",
  "Bookkeeping & Accounting",
  "Payroll & Superannuation",
  "Tax Advisory & Planning",
  "CFO-as-a-Service",
  "Accfino Platform",
  "LinkLens / AI Solutions",
  "HSPayroll (Waitlist)",
  "Bespoke Software Development",
  "Cloud Infrastructure",
  "Other",
];

const CONTACT_ITEMS = [
  ["📍","Office Address",`${COMPANY.address}`],
  ["📞","Phone",COMPANY.phone],
  ["✉️","Email",COMPANY.email],
  ["🕐","Business Hours","Mon – Fri: 9:00am – 5:30pm AEST\nSat: By appointment"],
];

export default function ContactPage() {
  useReveal();
  const [form, setForm]     = useState({ name:"", company:"", email:"", phone:"", service:"", message:"" });
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    setSending(true);
    // ── Wire this up to your FastAPI backend: POST /api/contact ──
    // const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
    await new Promise((r) => setTimeout(r, 1200)); // simulate network
    setSending(false);
    setSent(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="container">
          <div className="section-eyebrow" style={{ color:"var(--gold)" }}>Contact Us</div>
          <h1>Let's Talk Finances</h1>
          <p>Our Sydney team is ready to help. Book a free consultation or send us a message and we'll respond within one business day.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap:56 }}>

            {/* ── CONTACT FORM ── */}
            <div className="contact-form reveal">
              <h2 style={{ fontFamily:"'Playfair Display',serif", color:"var(--navy)", fontSize:"1.6rem", marginBottom:8 }}>Send Us a Message</h2>
              <p style={{ color:"var(--slate)", fontSize:".88rem", marginBottom:28 }}>We'll respond within 1 business day.</p>

              {sent ? (
                <div className="success-msg">
                  <span style={{ fontSize:"1.3rem" }}>✅</span>
                  <div>
                    <strong>Message received!</strong><br />
                    <span style={{ fontSize:".88rem" }}>Thank you {form.name}. Our team will be in touch within 1 business day.</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" placeholder="Sarah Mitchell" value={form.name} onChange={update("name")} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company Name</label>
                      <input className="form-input" placeholder="Acme Pty Ltd" value={form.company} onChange={update("company")} />
                    </div>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" placeholder="hello@yourcompany.com.au" value={form.email} onChange={update("email")} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" placeholder="0400 000 000" value={form.phone} onChange={update("phone")} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service of Interest</label>
                    <select className="form-select" value={form.service} onChange={update("service")}>
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea className="form-textarea" placeholder="Tell us about your business and what you need help with..." value={form.message} onChange={update("message")} />
                  </div>
                  <button className="form-submit" onClick={handleSubmit} disabled={sending}>
                    {sending ? "Sending…" : "Send Message →"}
                  </button>
                </>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="contact-info reveal">
              <h2 style={{ fontFamily:"'Playfair Display',serif", color:"var(--navy)", fontSize:"1.6rem", marginBottom:28 }}>Our Details</h2>

              {CONTACT_ITEMS.map(([icon, title, val]) => (
                <div key={title} className="contact-item">
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <div className="contact-detail-title">{title}</div>
                    <div className="contact-detail-val" style={{ whiteSpace:"pre-line" }}>{val}</div>
                  </div>
                </div>
              ))}

              {/* MAP */}
              <div style={{ marginTop:8, borderRadius:12, overflow:"hidden", boxShadow:"var(--shadow)" }}>
                <iframe
                  title="Headstart Finances Location"
                  width="100%" height="250"
                  style={{ border:0, display:"block" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6!2d151.2058!3d-33.8674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af3b6e0d4c9f%3A0x0!2s11+York+St%2C+Sydney+NSW+2000!5e0!3m2!1sen!2sau!4v1718000000000"
                />
              </div>

              {/* FREE CONSULT BOX */}
              <div style={{ marginTop:24, background:"var(--sky)", borderRadius:12, padding:"20px 24px" }}>
                <div style={{ fontWeight:700, color:"var(--navy)", marginBottom:6 }}>🚀 Free 30-Minute Consultation</div>
                <p style={{ fontSize:".85rem", color:"var(--slate)", lineHeight:1.7 }}>
                  Book a free, no-obligation consultation with one of our Sydney-based financial experts.
                  We'll review your situation and outline how we can help.
                </p>
                <a href={`mailto:${COMPANY.email}?subject=Free Consultation Request`}
                   style={{ display:"inline-block", marginTop:14, background:"var(--charcoal)", color:"#fff", padding:"10px 22px", borderRadius:8, fontWeight:600, fontSize:".85rem" }}>
                  Book Now →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
