import { useState, useEffect } from "react";
import Navbar      from "./components/Navbar";
import Footer      from "./components/Footer";
import HomePage    from "./pages/HomePage";
import AboutPage   from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage  from "./pages/ContactPage";
import "./styles/variables.css";
import "./styles/layout.css";

const VALID_PAGES = ["home", "about", "products", "services", "contact"];

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return VALID_PAGES.includes(hash) ? hash : "home";
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash);

  // When setPage is called, push a new history entry
  const navigate = (newPage) => {
    window.location.hash = newPage === "home" ? "" : newPage;
    setPage(newPage);
  };

  // Listen to browser back/forward
  useEffect(() => {
    const onPopState = () => setPage(getPageFromHash());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":     return <HomePage     setPage={navigate} />;
      case "about":    return <AboutPage    />;
      case "products": return <ProductsPage />;
      case "services": return <ServicesPage setPage={navigate} />;
      case "contact":  return <ContactPage  />;
      default:         return <HomePage     setPage={navigate} />;
    }
  };

  return (
    <>
      <Navbar page={page} setPage={navigate} />
      <main style={{ paddingTop: 100 }}>
        {renderPage()}
      </main>
      <Footer setPage={navigate} />
    </>
  );
}

