import { useState } from "react";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ProductQuickView from "../components/ProductQuickView";
import { pageTransition, fadeUp, staggerContainer } from "../utils/motion";

const products = [
  {
    title: "Designer Glass",
    desc: "From toughened to decorative glass, our glass solutions combine safety, durability and aesthetics perfectly.",
    image: "/image/fancyglass.jpeg",
    points: ["Toughened Glass", "Decorative Glass", "Frosted Glass", "Laminated Glass"],
    category: "Glass",
  },
  {
    title: "Architectural Aluminium",
    desc: "High-quality, precision-engineered aluminium materials for modern construction and premium architectural designs.",
    image: "/image/aluminiumpartition.jpeg",
    points: ["Aluminium Frames", "Partitions", "Sliding Systems", "Structural Glazing"],
    category: "Aluminium",
  },
  {
    title: "UPVC Profiles",
    desc: "Highly durable, beautifully finished, and energy-efficient UPVC products for doors and windows.",
    image: "/image/upvc.jpeg",
    points: ["UPVC Doors", "UPVC Windows", "Low Maintenance", "Weather Resistant"],
    category: "UPVC",
  },
  {
    title: "Toughened Glazing",
    desc: "Robust, impact-resistant safety glass solutions perfectly suited for heavy-duty residential and commercial applications.",
    image: "/image/Toughened_Glass.jpg",
    points: ["High Strength", "Heat Resistant", "Safety Glass", "Long Life"],
    category: "Glass",
  },
  {
    title: "Backlit LED Mirrors",
    desc: "Modern, elegantly backlit LED mirrors designed to completely elevate and enhance luxury bathrooms and interior spaces.",
    image: "/image/led_mirror.jpg",
    points: ["Energy Efficient", "Modern Look", "Long Lasting LEDs", "Custom Sizes"],
    category: "LED Mirrors",
  },
  {
    title: "Premium Sliding Hardware",
    desc: "Smooth, incredibly durable and premium-quality hardware engineered flawlessly for sliding doors and glass systems.",
    image: "/image/slidingdoorhardware.jpg",
    points: ["Smooth Movement", "Rust Resistant", "Premium Finish", "Long Durability"],
    category: "Hardware",
  },
];

const categories = ["All", "Glass", "Aluminium", "UPVC", "LED Mirrors", "Hardware"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      variants={pageTransition} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      className="bg-white min-h-screen font-body text-gray-800"
    >
      {/* ================= PAGE HEADER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Premium imported and manufactured glass, aluminium &amp; UPVC products built for unmatched performance and ultimate style.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS FILTER & GRID ================= */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm relative text-sm ${
                  activeCategory === cat 
                    ? "bg-[#0B4F8A] text-white scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeProductFilter"
                    className="absolute inset-0 bg-[#0B4F8A] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(10,37,64,0.1)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col cursor-pointer"
                >
                  {/* Image & Hover Action Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <h3 className="absolute bottom-6 left-6 text-2xl font-heading font-extrabold text-white tracking-wide leading-tight">
                      {product.title}
                    </h3>
                    
                    {/* Quick View Button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="bg-[#0B4F8A] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20 text-sm font-bold gap-2"
                      >
                        <FaEye size={18} />
                        Quick View
                      </motion.button>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex-1 flex flex-col bg-white z-10 -mt-2 rounded-t-3xl relative border-t border-gray-50">
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {product.desc}
                    </p>

                    <ul className="space-y-4 mb-8 flex-1">
                      {product.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                          <FaCheckCircle className="text-[#2FA4E7] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/contact"
                        className="block w-full py-4 text-center rounded-2xl bg-[#0B4F8A] text-white font-bold hover:bg-[#2FA4E7] transition-colors shadow-md"
                      >
                        Enquire About This Product
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0B4F8A] text-white text-center overflow-hidden">
        <AnimatedSection variant={fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
            Looking for Premium Glass &amp; Aluminium Products?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Contact Avdhesh Glass House for expert guidance, custom sizing, and competitive pricing.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <motion.a
              href="tel:09971158340"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(47,164,231,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2FA4E7] text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0B4F8A] transition shadow-lg text-sm"
            >
              Call Us Now
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0B4F8A] transition shadow-lg text-sm"
              >
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ================= PRODUCT QUICK VIEW MODAL ================= */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductQuickView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Products;
