import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import { pageTransition, fadeUp, staggerContainer } from "../utils/motion";

const clients = [
  { name: "Residential Projects", location: "Ghaziabad" },
  { name: "Commercial Complexes", location: "Noida" },
  { name: "Office Interiors", location: "Indirapuram" },
  { name: "Retail Showrooms", location: "Vaishali" },
  { name: "Corporate Offices", location: "Delhi NCR" },
  { name: "Hospitality Projects", location: "Delhi NCR" },
];

const Clients = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Our Clients
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#2FA4E7] font-medium max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-white font-normal">Trusted by residential and commercial clients across Delhi NCR.</span>
          </motion.p>
        </div>
      </section>

      {/* ================= CLIENT OVERVIEW ================= */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection variant={fadeUp}>
            <h2 className="text-3xl font-heading font-extrabold text-primary">
              Building Long-Term Relationships
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-gray-700 font-body text-base md:text-lg">
              Over the years, Avdhesh Glass House has successfully delivered
              premium glass, aluminium and UPVC solutions for a wide range
              of residential, commercial and corporate projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CLIENT CARDS ================= */}
      <section className="pb-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(11,79,138,0.08)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white p-6 rounded-3xl border border-gray-100/50 flex flex-col justify-between cursor-default"
              >
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark">
                    {client.name}
                  </h3>
                  <p className="mt-2 text-gray-600 font-semibold">
                    Location: {client.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="py-20 bg-white border-t border-b border-gray-100 overflow-hidden">
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
              className="bg-primary px-6 py-3 rounded-xl hover:bg-secondary transition font-bold"
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
    </motion.div>
  );
};

export default Clients;
