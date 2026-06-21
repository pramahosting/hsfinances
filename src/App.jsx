import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar       from "./components/Navbar";
import Footer       from "./components/Footer";
import ScrollToTop  from "./components/ScrollToTop";
import HomePage      from "./pages/HomePage";
import AboutPage     from "./pages/AboutPage";
import ServicesOverviewPage   from "./pages/ServicesOverviewPage";
import FinancialServicesPage  from "./pages/FinancialServicesPage";
import PPMServicesPage        from "./pages/PPMServicesPage";
import AIServicesPage         from "./pages/AIServicesPage";
import ProductsOverviewPage   from "./pages/ProductsOverviewPage";
import AccfinoPage   from "./pages/AccfinoPage";
import LinkLensPage  from "./pages/LinkLensPage";
import HSPayrollPage from "./pages/HSPayrollPage";
import ContactPage   from "./pages/ContactPage";
import NotFoundPage  from "./pages/NotFoundPage";
import "./styles/variables.css";
import "./styles/layout.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 100 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path="/services/financial-services" element={<FinancialServicesPage />} />
          <Route path="/services/project-product-management" element={<PPMServicesPage />} />
          <Route path="/services/ai-automation" element={<AIServicesPage />} />

          <Route path="/products" element={<ProductsOverviewPage />} />
          <Route path="/products/accfino" element={<AccfinoPage />} />
          <Route path="/products/linklens" element={<LinkLensPage />} />
          <Route path="/products/hspayroll" element={<HSPayrollPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
