import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("Page Not Found | Headstart Finances Australia", null, "/404", true);

  return (
    <div className="container" style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.4rem", marginBottom: 16 }}>Page Not Found</h1>
      <p style={{ color: "var(--slate)", marginBottom: 32 }}>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="btn-primary">Back to Home →</Link>
    </div>
  );
}
