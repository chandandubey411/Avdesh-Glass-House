import { FaChevronRight, FaBullseye, FaBinoculars, FaCheckCircle, FaAward, FaBuilding, FaUsers, FaThList } from "react-icons/fa";
import { motion } from "framer-motion";
import OurClients from "../components/OurClients";
import AnimatedSection from "../components/AnimatedSection";
import Counter from "../components/Counter";
import { pageTransition, fadeUp, fadeLeft, fadeRight, staggerContainer } from "../utils/motion";

const HeadingIcon = () => (
  <div className="flex items-center -space-x-1.5 md:-space-x-2 mr-3 text-2xl md:text-3xl">
    <FaChevronRight className="text-[#2FA4E7]" />
    <FaChevronRight className="text-[#0B4F8A]" />
  </div>
);

const SectionHeading = ({ children }) => (
  <div className="mb-6">
    <div className="flex items-center">
      <HeadingIcon />
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B4F8A]">
        {children}
      </h2>
    </div>
    <div className="h-1 bg-[#2FA4E7] w-32 ml-10 mt-2"></div>
  </div>
);

const About = () => {
  return (
    <motion.div 
      variants={pageTransition} 
      initial="hidden" 
      animate="show" 
      exit="exit"
      className="bg-white min-h-screen pb-24 font-body text-gray-800"
    >
      
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6"
          >
            Discover Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#2FA4E7] font-medium max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-white font-normal">Building trust through transparency, premium quality, and architectural excellence since 2007. Every pane of glass we install reflects our unwavering commitment to bringing your vision to light.</span>
          </motion.p>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection variant={fadeLeft} className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/ownerImage.jpeg"
                alt="Glass facade engineering work"
                className="rounded-3xl shadow-2xl border-8 border-white object-cover aspect-[4/5] w-full"
              />
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                className="absolute -top-6 -right-6 bg-[#0B4F8A]/90 backdrop-blur-md border border-white/20 text-white p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center w-36 h-36"
              >
                <FaAward className="text-3xl text-[#2FA4E7] mb-1.5" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">ISO 9001:2015</span>
                <span className="text-[10px] uppercase tracking-widest text-white/70 mt-0.5">Certified Firm</span>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant={fadeRight} className="flex flex-col gap-6">
            <SectionHeading>About Us</SectionHeading>
            <p className="text-lg text-gray-700 leading-relaxed font-body">
              Established in 2007, Avdhesh Glass House has swiftly established itself as a leader in the glass and aluminium industry, consistently delivering innovation and quality in all our endeavours.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm font-body">
              Our journey is characterised by relentless dedication and a series of successful ventures, culminating in a robust portfolio and a network of satisfied corporate and residential clients. We strive to create new benchmarks in excellence. Welcome to Avdhesh Glass House – where your visions are crafted with expertise, precision engineering, and care.
            </p>
            
            {/* Animated Counters Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center p-4 bg-[#F7F9FC] rounded-2xl border border-gray-100">
                <FaBuilding className="text-[#2FA4E7] text-xl mb-1.5" />
                <span className="text-2xl font-extrabold text-[#0B4F8A] font-heading">
                  <Counter value="500+" />
                </span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider text-center">Projects Done</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F7F9FC] rounded-2xl border border-gray-100">
                <FaAward className="text-[#2FA4E7] text-xl mb-1.5" />
                <span className="text-2xl font-extrabold text-[#0B4F8A] font-heading">
                  <Counter value="15+" />
                </span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider text-center">Years Exp</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F7F9FC] rounded-2xl border border-gray-100">
                <FaUsers className="text-[#2FA4E7] text-xl mb-1.5" />
                <span className="text-2xl font-extrabold text-[#0B4F8A] font-heading">
                  <Counter value="1000+" />
                </span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider text-center">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F7F9FC] rounded-2xl border border-gray-100">
                <FaThList className="text-[#2FA4E7] text-xl mb-1.5" />
                <span className="text-2xl font-extrabold text-[#0B4F8A] font-heading">
                  <Counter value="6" />
                </span>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider text-center">Categories</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 overflow-hidden">
        {/* Subtle dot background */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0B4F8A 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Icons Column */}
          <div className="hidden md:flex md:col-span-3 flex-col items-center relative">
            {/* Connecting line */}
            <div className="absolute top-24 bottom-24 w-1 bg-gradient-to-b from-[#2FA4E7] to-[#0B4F8A] left-1/2 -translate-x-1/2 z-0 hidden lg:block"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-36 h-36 rounded-full border-4 border-[#2FA4E7] bg-white flex items-center justify-center shadow-lg relative z-10 mb-20"
            >
              <FaBullseye className="text-5xl text-[#2FA4E7]" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              className="w-36 h-36 rounded-full border-4 border-[#0B4F8A] bg-white flex items-center justify-center shadow-lg relative z-10"
            >
              <FaBinoculars className="text-5xl text-[#0B4F8A]" />
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-9 flex flex-col justify-between py-4">
            
            {/* Mission */}
            <div className="mb-20">
              <AnimatedSection variant={fadeRight}>
                <div className="flex items-center md:hidden mb-6">
                   <FaBullseye className="text-4xl text-[#2FA4E7] mr-4" />
                   <h2 className="text-3xl font-heading font-bold text-[#0B4F8A]">Mission</h2>
                </div>
                <div className="hidden md:block">
                  <SectionHeading>Mission</SectionHeading>
                </div>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed md:pr-12">
                  Our mission is to enhance spaces with premium glass and
                  aluminium solutions, tailored to the unique needs of each client.
                  Through dedication, expertise, and a customer-centric approach,
                  we strive to deliver exceptional service and products that transform
                  visions into reality.
                </p>
              </AnimatedSection>
            </div>

            {/* Vision */}
            <div>
              <AnimatedSection variant={fadeRight} delay={0.2}>
                <div className="flex items-center md:hidden mb-6">
                   <FaBinoculars className="text-4xl text-[#0B4F8A] mr-4" />
                   <h2 className="text-3xl font-heading font-bold text-[#0B4F8A]">Vision</h2>
                </div>
                <div className="hidden md:block">
                  <SectionHeading>Vision</SectionHeading>
                </div>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed md:pr-12">
                  To be recognized as the industry benchmark in creativity, service,
                  and efficiency in the glass and aluminium sector. We aim to
                  continue innovating and expanding our services, setting new
                  standards for quality and customer satisfaction.
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 overflow-hidden">
        <AnimatedSection variant={fadeUp}>
          <SectionHeading>Our Team</SectionHeading>
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
            The backbone of Avdhesh Glass House is our talented and dedicated team.
            From designers to technicians, every member is committed to excellence.
            Our team’s expertise allows us to undertake a wide range of projects,
            ensuring precision and quality in everything we do.
          </p>
        </AnimatedSection>
      </section>

      {/* ================= OUR CLIENTS ================= */}
      <OurClients />

      {/* ================= WHY TRUST US / CTA (Remaining useful content) ================= */}
      <section className="py-24 bg-[#F7F9FC] mt-12 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <AnimatedSection variant={fadeUp}>
            <h2 className="text-3xl font-heading font-bold text-center text-[#0B4F8A]">
              Why Clients Trust Us
            </h2>
          </AnimatedSection>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              "15+ Years of Industry Experience",
              "High-Quality Glass & Aluminium Materials",
              "Customized Design Solutions",
              "Skilled & Professional Team",
              "Timely Project Execution",
              "Long-Term Client Relationships",
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(11,79,138,0.08)" }}
                className="flex gap-3 items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100/50"
              >
                <FaCheckCircle className="text-[#2FA4E7] mt-1 shrink-0 text-lg" />
                <p className="text-gray-700 font-semibold">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection variant={fadeUp}>
            <div className="text-center bg-[#0B4F8A] p-12 rounded-3xl text-white shadow-xl max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Ready to Transform Your Space?
              </h2>
              <p className="mt-4 text-gray-300 text-lg">
                Get in touch with Avdhesh Glass House for expert glass &amp; aluminium solutions.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block mt-8"
              >
                <a
                  href="tel:09971158340"
                  className="inline-block bg-[#2FA4E7] text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-[#0B4F8A] transition shadow-lg text-lg"
                >
                  Call Us Now
                </a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
