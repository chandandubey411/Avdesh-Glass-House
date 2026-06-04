import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";
import { fadeLeft, fadeRight, pageTransition } from "../utils/motion";

const bannerItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const Contact = () => {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "136cf125-a0c3-45cc-b867-e07b1aa5413d");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    if (data.success) {
      setResult("Message sent successfully!");
      setSuccess(true);
      e.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
      setSuccess(false);
    }
  };

  const inputBase = "w-full border rounded-2xl px-5 py-4 focus:outline-none transition-all duration-300 font-body bg-white/50 backdrop-blur-sm border-gray-200";

  const inputStyle = (name) => ({
    borderColor: focused === name ? "#0B4F8A" : "#e5e7eb",
    boxShadow: focused === name ? "0 0 0 4px rgba(11,79,138,0.12)" : "none",
  });

  return (
    <motion.div variants={pageTransition} initial="hidden" animate="show" exit="exit">
      
      {/* ================= HERO BANNER ================= */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/80 mix-blend-multiply" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 variants={bannerItem(0.1)} initial="hidden" animate="show"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6">
            Contact Us
          </motion.h1>
          <motion.p variants={bannerItem(0.3)} initial="hidden" animate="show"
            className="text-xl text-white font-normal max-w-3xl mx-auto leading-relaxed">
            Get in touch with Avdhesh Glass House for expert architectural glass and aluminium solutions.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT SPLIT LAYOUT ================= */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Glass Details Cards */}
          <AnimatedSection variant={fadeLeft} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase font-heading">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-tight">
                Architectural Glazing Consultants
              </h2>
              <p className="text-gray-600 font-body mt-2 leading-relaxed">
                Have an upcoming facade cladding or glazing project? Reach out to our specialized engineering consultants.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid gap-6">
              {[
                { 
                  icon: FaMapMarkerAlt, 
                  title: "Our Address", 
                  desc: "910, Shakti Khand 4, Indirapuram, Ghaziabad, UP 201014",
                  link: null 
                },
                { 
                  icon: FaPhoneAlt, 
                  title: "Phone Support", 
                  desc: "+91 99711 58340 / +91 98118 11906",
                  link: "tel:09971158340" 
                },
                { 
                  icon: FaEnvelope, 
                  title: "Email Address", 
                  desc: "avdeshglasshouse@gmail.com",
                  link: "mailto:avdeshglasshouse@gmail.com" 
                },
                { 
                  icon: FaClock, 
                  title: "Business Hours", 
                  desc: "Mon - Sun: 10:00 AM - 7:00 PM (Tuesday Closed)",
                  link: null 
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6, boxShadow: "0 15px 30px rgba(11,79,138,0.06)" }}
                    className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0B4F8A]/10 border border-[#0B4F8A]/20 flex items-center justify-center text-primary shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-dark text-lg">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-primary transition-colors font-body mt-1 block font-semibold">
                          {item.desc}
                        </a>
                      ) : (
                        <p className="text-gray-600 font-body mt-1 leading-relaxed font-semibold">{item.desc}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/919971158340"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-[#20ba5a] transition active:scale-95 text-sm md:text-base"
              >
                <FaWhatsapp size={18} />
                WhatsApp Chat
              </a>
              <a
                href="tel:09971158340"
                className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-dark transition active:scale-95 text-sm md:text-base"
              >
                <FaPhoneAlt size={14} />
                Call Now
              </a>
            </div>
          </AnimatedSection>

          {/* Right Column: Premium Contact Form */}
          <AnimatedSection variant={fadeRight} className="flex flex-col gap-8">
            <motion.div
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100/50"
              whileHover={{ boxShadow: "0 25px 50px rgba(11,79,138,0.06)" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h3>
              
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="text-center py-12 flex flex-col items-center justify-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.15 }}
                      className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-2 border border-green-100"
                    >
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
                          strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-dark font-heading">Message Sent!</h3>
                    <p className="text-gray-600 max-w-sm text-center leading-relaxed font-body">
                      Thank you for your inquiry. Our engineering team will review it and reply within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => { setSuccess(false); setResult(""); }}
                      className="mt-6 px-6 py-3 bg-[#0B4F8A] text-white rounded-xl font-bold hover:bg-dark transition shadow-md text-sm"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="subject" value="New Website Inquiry - Avdhesh Glass House" />
                    
                    {[
                      { name: "name", type: "text", placeholder: "Your Full Name" },
                      { name: "phone", type: "tel", placeholder: "Mobile Number" },
                      { name: "email", type: "email", placeholder: "Email Address" },
                    ].map(({ name, type, placeholder }) => (
                      <div key={name} className="relative">
                        <input
                          type={type}
                          name={name}
                          required
                          placeholder={placeholder}
                          className={inputBase}
                          style={inputStyle(name)}
                          onFocus={() => setFocused(name)}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                    ))}
                    
                    <div className="relative">
                      <textarea
                        name="message"
                        rows="4"
                        required
                        placeholder="Project requirements details..."
                        className={inputBase}
                        style={inputStyle("message")}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-[#0B4F8A] text-white py-4 rounded-2xl font-bold hover:bg-dark transition shadow-md text-base"
                    >
                      {result === "Sending..." ? "Sending..." : "Submit Inquiry"}
                    </motion.button>
                    
                    {result && result !== "Sending..." && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-center mt-3 font-semibold text-red-500"
                      >
                        {result}
                      </motion.p>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= GOOGLE MAPS EMBED ================= */}
      <section className="w-full h-[450px] relative border-t border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989494.6287953747!2d75.52381435855291!3d29.663642386378733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbd6585ff0ed%3A0x4461722240ce05fa!2sAvdesh%20Glass%20House!5e0!3m2!1sen!2sin!4v1770147108387!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: 0 }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Avdhesh Glass House Location Map"
        />
      </section>
    </motion.div>
  );
};

export default Contact;
