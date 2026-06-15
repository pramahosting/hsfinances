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

export default function App() {
  const [page, setPage] = useState("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":     return <HomePage     setPage={setPage} />;
      case "about":    return <AboutPage    />;
      case "products": return <ProductsPage />;
      case "services": return <ServicesPage setPage={setPage} />;
      case "contact":  return <ContactPage  />;
      default:         return <HomePage     setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <main style={{ paddingTop: 100 }}>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}
