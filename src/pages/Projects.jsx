import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { pageTransition, fadeUp, staggerContainer, fadeLeft, fadeRight } from "../utils/motion";

const projectsData = [
  // Airports
  { id: 1, category: "Airports", title: "Terminal Full Glass Facade", image: "/project/project13.jpeg" },
  { id: 2, category: "Airports", title: "Modern Airport Exterior", image: "/project/project5.jpg" },
  // Commercial Buildings
  { id: 3, category: "Commercial Buildings", title: "Corporate Glass Tower", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Commercial Buildings", title: "Business Park Entrance", image: "/project/project3.jpg" },
  // Hotels
  { id: 5, category: "Hotels", title: "Luxury Resort Balconies", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Hotels", title: "Modern Hotel Exterior", image: "/project/project7.png" },
  // Residential
  { id: 7, category: "Residential", title: "Aarambh Retreats", image: "/project/arambh_retreats.jpg" },
  { id: 8, category: "Residential", title: "Premium Villas", image: "/project/project2.jpg" },
  { id: 9, category: "Residential", title: "Modern Apartment Glass Railings", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  // Hospitals & Institutions
  { id: 10, category: "Hospitals and Institutions", title: "Arihant Hospital", image: "/project/arihant_hospital.jpg" },
  { id: 11, category: "Hospitals and Institutions", title: "City Medical Center", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Hospitals and Institutions", title: "University Research Wing", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  // Others
  { id: 13, category: "Others", title: "Custom Spider Fittings", image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=800" },
  { id: 14, category: "Others", title: "Interior Decorative Glass", image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=800" }
];

const categories = ["All", "Airports", "Commercial Buildings", "Hotels", "Residential", "Hospitals and Institutions", "Others"];

const clients = [
  { name: "Residential Projects", location: "Ghaziabad" },
  { name: "Commercial Complexes", location: "Noida" },
  { name: "Office Interiors", location: "Indirapuram" },
  { name: "Retail Showrooms", location: "Vaishali" },
  { name: "Corporate Offices", location: "Delhi NCR" },
  { name: "Hospitality Projects", location: "Delhi NCR" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  // Helper to construct masonry grids classes dynamically
  const getMasonryClass = (id) => {
    if (id === 1 || id === 7) return "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto";
    if (id === 3 || id === 9) return "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto";
    return "aspect-square";
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
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
            Our Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Explore our extensive portfolio of premium glass and aluminium installations across various sectors, trusted by clients across Delhi NCR.
          </motion.p>
        </div>
      </section>

      {/* ================= FILTER & MASONRY GRID SECTION ================= */}
      <section className="py-24 bg-light min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm relative text-sm ${
                  activeCategory === cat 
                    ? "bg-primary text-white scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeProjFilter"
                    className="absolute inset-0 bg-primary rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Masonry / Asymmetric Grid */}
          <motion.div 
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id} 
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`relative group overflow-hidden rounded-3xl shadow-md bg-gray-200 cursor-pointer border border-gray-100/50 ${getMasonryClass(project.id)}`}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-secondary font-bold text-xs mb-1 uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-white text-xl font-heading font-bold leading-tight">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* ================= BEFORE/AFTER FACADE COMPARISON ================= */}
      <section className="py-24 bg-white border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant={fadeLeft}>
            <BeforeAfterSlider />
          </AnimatedSection>

          <AnimatedSection variant={fadeRight} className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Interactive Sandbox</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight">
              Aesthetical Glazing Transformations
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-body">
              Explore the transition between initial skeleton structural framing and the final high-end architectural facade installations.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-body">
              Avdhesh Glass House implements state-of-the-art thermal engineering and structural calculations to assure safety, longevity, and beauty for commercial towers and residential complexes alike.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= EXTRA CONTENT ================= */}
      <section className="py-24 bg-light overflow-hidden">
        <AnimatedSection variant={fadeUp} className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-extrabold text-primary mb-6">Built To Last, Designed To Inspire</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8 font-body">
            Every project undertaken by Avdhesh Glass House reflects our commitment to excellence, structural integrity, and architectural beauty. From towering commercial facades to elegant residential interiors, we use only the highest-grade materials to ensure safety and longevity. Our team of seasoned professionals works closely with architects, builders, and homeowners to deliver bespoke glass and aluminium solutions that elevate the aesthetic and functional value of any property.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="tel:09971158340"
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-dark transition shadow-lg text-sm"
            >
              Start Your Project With Us
            </a>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ================= CLIENT OVERVIEW ================= */}
      <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection variant={fadeUp}>
            <h2 className="text-3xl font-heading font-extrabold text-primary">
              Building Long-Term Relationships
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-700 font-body">
              Over the years, Avdhesh Glass House has successfully delivered
              premium glass, aluminium and UPVC solutions for a wide range
              of residential, commercial and corporate projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CLIENT CARDS ================= */}
      <section className="pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <AnimatedSection 
              key={index}
              variant={fadeUp} 
              delay={index * 0.05}
              className="bg-light p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-heading font-bold text-dark">
                  {client.name}
                </h3>
                <p className="mt-2 text-gray-600 font-semibold">
                  Location: {client.location}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="py-20 bg-[#F7F9FC] border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 text-center">
          <AnimatedSection variant={fadeUp} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-primary">
              <Counter value="15+" />
            </h3>
            <p className="mt-2 text-gray-700 font-bold">Years of Experience</p>
          </AnimatedSection>

          <AnimatedSection variant={fadeUp} delay={0.1} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-primary">
              <Counter value="1000+" />
            </h3>
            <p className="mt-2 text-gray-700 font-bold">Happy Clients</p>
          </AnimatedSection>

          <AnimatedSection variant={fadeUp} delay={0.2} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-4xl font-bold text-primary">
              <Counter value="5.0★" />
            </h3>
            <p className="mt-2 text-gray-700 font-bold">Google Rating</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-dark text-white text-center overflow-hidden">
        <AnimatedSection variant={fadeUp}>
          <h2 className="text-3xl font-heading font-extrabold px-6">
            Want to Be Our Next Happy Client?
          </h2>

          <p className="mt-4 text-gray-300 px-6">
            Get in touch with Avdhesh Glass House for premium glass &amp; aluminium solutions.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap px-6">
            <motion.a
              href="tel:+919811811906"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 24px rgba(11,79,138,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary px-6 py-3 rounded-xl hover:bg-[#1a8fd1] transition font-bold"
            >
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/919971158340"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-dark transition font-bold"
            >
              WhatsApp
            </motion.a>
          </div>
        </AnimatedSection>
      </section>

      {/* ================= IMAGE MODAL (LIGHTBOX) ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-[101]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <FaTimes size={40} />
            </motion.button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage} 
              alt="Expanded View" 
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl relative z-[101]"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
