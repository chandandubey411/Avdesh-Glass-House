import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimes, FaBuilding, FaWindowMaximize, FaBorderAll, FaTh } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import HeroSlider from "../components/HeroSlider";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Testimonials from "../components/Testimonials";
import { 
  pageTransition, 
  fadeUp, 
  fadeLeft, 
  fadeRight, 
  staggerContainer 
} from "../utils/motion";

const featuredServices = [
  {
    title: "Front Elevation",
    desc: "Custom architectural glass facade structural design and elevation systems.",
    image: "/image/frontelevattion.jpeg",
    icon: FaBuilding
  },
  {
    title: "Spider Glazing",
    desc: "Minimalist frameless spider fittings for structural transparency.",
    image: "/image/spider_fitting.jpeg",
    icon: FaTh
  },
  {
    title: "UPVC Profiles",
    desc: "Energy-efficient, soundproof, and low-maintenance UPVC windows & doors.",
    image: "image/upvc.jpeg",
    icon: FaWindowMaximize
  },
  {
    title: "Interior Glass Works",
    desc: "Designer mirrors, slim profiles, custom partitions, and decorative solutions.",
    image: "/image/interior_glass.jpg",
    icon: FaBorderAll
  }
];

const projectShowcase = [
  { title: "Aarambh Retreats", category: "Residential", image: "/project/arambh_retreats.jpg" },
  { title: "Arihant Hospital", category: "Hospitality & Healthcare", image: "/project/arihant_hospital.jpg" },
  { title: "Premium Villas", category: "Residential", image: "/project/project2.jpg" },
  { title: "Business Park Entrance", category: "Commercial Project", image: "/project/project3.jpg" },
  { title: "Commercial Exterior", category: "Commercial Project", image: "/project/project8.jpeg" },
  { title: "Corporate Headquarters", category: "Corporate Office", image: "/project/project9.jpeg" },
  { title: "Modern Workspace", category: "Corporate Office", image: "/project/project10.jpeg" },
  { title: "Commercial Complex", category: "Commercial Project", image: "/project/project11.jpeg" },
  { title: "Business Park Facade", category: "Commercial Project", image: "/project/project12.jpeg" },
  { title: "Retail & Commercial Space", category: "Commercial Project", image: "/project/project13.jpeg" }
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* ================= HERO SLIDER ================= */}
      <HeroSlider />

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Image & Floating Experience Badge */}
          <AnimatedSection variant={fadeLeft} className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
                alt="Glass and aluminium building work"
                className="rounded-3xl shadow-2xl border-8 border-white object-cover aspect-[4/5] w-full"
              />
              {/* Floating Experience Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-[#0A4D8C] border border-white/20 text-white p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center w-40 h-40"
              >
                <span className="text-4xl font-extrabold font-heading text-[#2FA4E7]">
                  <Counter value="15+" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2 text-white/95">
                  Years of Trust
                </span>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Column 2: Text Contents & Counters */}
          <AnimatedSection variant={fadeRight} className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Company Profile</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight">
              Crafting Premium Glass elevations Since 2007
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to <strong>Avdhesh Glass House</strong>, the NCR's leading purveyor of architectural glass, ACP cladding, UPVC, and aluminium solutions. We transform raw blueprints into breathtaking landmarks.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-sm">
              We specialize in state-of-the-art Toughened Glass, robust structural glazing, UPVC insulation profiles, frameless spider fittings, and custom-designed interior glass works, blending premium materials with flawless execution.
            </p>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0A4D8C] font-heading">
                  <Counter value="500+" />
                </span>
                <span className="text-xs font-bold text-gray-500 mt-1.5 uppercase tracking-wider">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0A4D8C] font-heading">
                  <Counter value="1000+" />
                </span>
                <span className="text-xs font-bold text-gray-500 mt-1.5 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>

            <div className="mt-4">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  to="/about"
                  className="inline-block bg-[#0A4D8C] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-dark transition shadow-lg text-sm"
                >
                  Discover Our Story
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 relative bg-[#3c4a63] overflow-hidden">
        {/* Top half white background to create the overlap effect */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-white -z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mt-1">
              Architectural Services
            </h2>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative group rounded-3xl overflow-hidden shadow-xl h-[400px] bg-dark flex flex-col justify-end cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-110 opacity-70 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                  
                  {/* Glass Card content */}
                  <div className="relative z-10 p-6 m-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col gap-2 transition-all duration-500 ease-out opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white/15">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 text-[#2FA4E7]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-heading font-bold text-lg mt-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-body">
                      {service.desc}
                    </p>
                    <Link to="/services" className="text-xs font-bold text-[#2FA4E7] flex items-center gap-1 hover:text-white mt-2 transition-colors">
                      Read More &rarr;
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatedSection variant={fadeUp} className="text-center mt-16 mb-4 text-white">
            <p className="text-lg md:text-xl font-body mb-8 opacity-90">
              Join us on a journey where Glass meets Innovation and Dreams take Shape.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                to="/services"
                className="inline-block bg-[#facc15] text-[#0f172a] px-8 py-3.5 rounded-xl hover:bg-[#eab308] transition shadow-lg font-bold text-sm"
              >
                Know More
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mt-1 mb-6">
              Our Signature Projects
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the shining facades of iconic commercial buildings and international airports to the elegant transparency gracing countless modern homes and hospitals, our glass solutions define the skyline. Explore the spaces we've transformed through precision engineering and visionary design.
            </p>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {projectShowcase.map((project, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group overflow-hidden rounded-2xl shadow-md aspect-square cursor-pointer border border-gray-100"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-secondary font-medium text-xs mb-1 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-white text-lg font-heading font-bold leading-tight">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= BEFORE/AFTER FACADE COMPARISON ================= */}
      <section className="py-24 bg-[#F7F9FC] border-t border-b border-gray-100/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant={fadeLeft} className="flex flex-col gap-6">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Transformation Showcase</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary leading-tight">
              Premium Facade Engineering
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Slide the middle handle to witness how we transform structural building frameworks into majestic, light-reflective glass elevations.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our engineering integrates high-performance structural glazing, spider fittings, and premium double-insulated glass units (IGUs) to deliver structural safety, acoustic insulation, and architectural beauty.
            </p>
            <div className="mt-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
                <Link to="/projects" className="inline-flex items-center gap-2 bg-[#0A4D8C] text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:bg-dark transition-all text-sm">
                  Explore Project Gallery
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant={fadeRight}>
            <BeforeAfterSlider />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">Client Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mt-1">
              What Architects &amp; Clients Say
            </h2>
            <p className="text-gray-600 mt-3 font-medium">
              We build long-term relationships through architectural integrity and glass innovation.
            </p>
          </AnimatedSection>
          <AnimatedSection variant={fadeUp}>
            <Testimonials />
          </AnimatedSection>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-light overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp}>
            <h2 className="text-3xl font-heading font-extrabold text-center text-primary mb-16">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              "15+ Years Industry Experience",
              "Premium Quality Materials",
              "Customized Design Solutions",
              "Skilled & Professional Team",
              "Timely Project Delivery",
              "Trusted by 1000+ Clients",
            ].map((point, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(11,79,138,0.08)" }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50"
              >
                <FaCheckCircle className="text-primary mt-1 shrink-0 text-lg" />
                <p className="text-gray-700 font-bold">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="py-24 bg-dark text-white text-center overflow-hidden">
        <AnimatedSection variant={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold px-6">
            Looking for Reliable Glass &amp; Aluminium Work?
          </h2>

          <p className="mt-4 text-gray-300 px-6 max-w-xl mx-auto text-lg leading-relaxed">
            Contact Avdhesh Glass House today for professional architectural consultation.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap px-6">
            <motion.a
              href="tel:09971158340"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 24px rgba(11,79,138,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0A4D8C] px-8 py-4 rounded-xl hover:bg-[#1a8fd1] transition font-bold"
            >
              Call Now
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="inline-block border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition font-bold"
              >
                Get a Quote
              </Link>
            </motion.div>
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
              alt="Expanded visual" 
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl relative z-[101]"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
