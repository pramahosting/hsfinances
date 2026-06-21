import { PROCESS_STEPS } from "../utils/processSteps";

export default function ProcessSection() {
  return (
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
              <div style={{ width: 44, height: 44, background: "var(--charcoal)", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "1.1rem", margin: "0 auto 16px" }}>{n}</div>
              <div className="value-title">{t}</div>
              <p className="value-text">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
