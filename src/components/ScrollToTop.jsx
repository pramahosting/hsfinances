import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top of page on every route change (replaces old hash-based scroll effect). */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
