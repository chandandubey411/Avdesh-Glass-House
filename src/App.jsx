import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        
        {/* Full-screen Loading Overlay */}
        <AnimatePresence mode="wait">
          {loading && <Loader finishLoading={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <div className="flex flex-col min-h-screen font-body bg-[#F7F9FC] text-[#0A2540]">
            
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <WhatsAppFloat />

            {/* Footer */}
            <Footer />

          </div>
        )}
      </MotionConfig>
    </Router>
  );
}

export default App;


