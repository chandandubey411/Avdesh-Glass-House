import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight, FaBuilding, FaTh, FaWindowMaximize, FaColumns, FaBorderAll, FaSlidersH } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer } from "../utils/motion";

const services = [
  {
    title: "Front Elevation",
    desc: "Modern and customized front elevation solutions combining structural integrity with breathtaking architectural aesthetics for both residential and commercial spaces.",
    image: "/image/frontelevattion.jpeg",
    icon: FaBuilding
  },
  {
    title: "Spider Fitting",
    desc: "Contemporary glass spider fitting installations offering clear, unobstructed views, allowing maximum natural light while maintaining robust support.",
    image: "/image/spider_fitting.jpeg",
    icon: FaTh
  },
  {
    title: "UPVC Doors & Windows",
    desc: "Energy-efficient, highly durable, and low-maintenance UPVC door and window systems designed to withstand the elements while providing perfect insulation.",
    image: "/image/upvc_door_windows.jpeg",
    icon: FaWindowMaximize
  },
  {
    title: "Aluminium Partition",
    desc: "Sleek and high-strength aluminium partition solutions ideal for creating flexible, modern work environments and separating commercial spaces beautifully.",
    image: "/image/aluminiumpartition.jpeg",
    icon: FaColumns
  },
  {
    title: "Interior Glass Designing",
    desc: "Bespoke interior glass designs that visually expand spaces, adding a touch of modern luxury and elegance to offices, homes, and retail environments.",
    image: "/image/interior_glass.jpg",
    icon: FaBorderAll
  },
  {
    title: "Slim Profile (Railing & Balcony)",
    desc: "Minimalistic, highly robust slim-profile solutions for glass railings and balconies that provide safety without interrupting your view.",
    image: "/image/slim_profile.jpeg",
    icon: FaSlidersH
  },
];

const Services = () => {
  return (
    <motion.div 
      variants={pageTransition} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      className="bg-white min-h-screen font-body text-gray-800"
    >
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Delivering architectural mastery through advanced glass, aluminium, and UPVC installations tailored perfectly to your vision.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col lg:flex-row items-center gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Column */}
                  <AnimatedSection 
                    variant={isEven ? fadeLeft : fadeRight} 
                    className="lg:w-1/2 w-full h-[350px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl relative group border border-gray-100"
                  >
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </AnimatedSection>

                  {/* Content Column (Glass Card Highlighted) */}
                  <AnimatedSection 
                    variant={isEven ? fadeRight : fadeLeft} 
                    className="lg:w-1/2 w-full p-8 md:p-10 rounded-3xl bg-[#F7F9FC] border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4 relative overflow-hidden"
                  >
                    {/* Top glass badge icon */}
                    <div className="w-14 h-14 bg-[#0B4F8A]/10 border border-[#0B4F8A]/20 text-[#0B4F8A] rounded-2xl flex items-center justify-center shadow-inner mb-2">
                      <Icon size={24} />
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-heading font-extrabold text-[#2FA4E7]/35">0{index + 1}</span>
                      <div className="h-0.5 bg-[#2FA4E7]/40 w-12 mt-1"></div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B4F8A] mt-1">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed font-body text-sm md:text-base">{service.desc}</p>
                    
                    <div className="w-full h-px bg-gray-200/60 my-2" />

                    <motion.div whileHover="hover" className="inline-block mt-1">
                      <Link to="/contact" className="inline-flex items-center gap-2 text-[#2FA4E7] font-bold hover:text-[#0B4F8A] transition-colors group text-sm md:text-base">
                        Discuss Your Project 
                        <motion.span
                          variants={{
                            hover: { x: 6 }
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <FaArrowRight />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY OUR SERVICES ================= */}
      <section className="py-24 bg-[#F7F9FC] overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center text-[#0B4F8A] mb-16">
              Why Our Services Stand Out
            </h2>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "High-Quality Materials Sourced Globally",
              "Cutting-Edge Modern Design Principles",
              "Precision Tailored Custom Solutions",
              "Highly Skilled & Certified Technicians",
              "Strict Adherence to Project Timelines",
              "Unmatched Lifetime After-Sales Support",
            ].map((point, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(11,79,138,0.08)" }}
                className="flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100/50"
              >
                <FaCheckCircle className="text-[#2FA4E7] text-3xl mb-4 shrink-0" />
                <p className="text-gray-800 font-bold text-lg leading-snug">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0B4F8A] text-white text-center overflow-hidden">
        <AnimatedSection variant={fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">
            Ready For Your Next Architectural Masterpiece?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Contact Avdhesh Glass House today for reliable, professional, and breathtaking solutions.
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
    </motion.div>
  );
};

export default Services;
