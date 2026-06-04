import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const linkHover = {
    hover: { x: 5, color: "#ffffff" },
  };

  const iconHover = {
    hover: { scale: 1.2, rotate: 8, transition: { type: "spring", stiffness: 300, damping: 10 } },
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-dark text-gray-300 border-t border-gray-800"
    >
      
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">

        {/* ================= ABOUT ================= */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-white">
            Avdesh Glass House
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Avdesh Glass House is a trusted provider of premium glass,
            aluminium & UPVC solutions in Ghaziabad since 2007.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <motion.div whileHover="hover" variants={linkHover} className="inline-block">
                  <Link to={link.to} className="hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Front Elevation",
              "Spider Fitting",
              "UPVC Doors & Windows",
              "Aluminium Partition",
              "Interior Glass Designing",
              "Slim Profile Solutions",
            ].map((service) => (
              <li key={service}>
                <motion.div whileHover="hover" variants={linkHover} className="inline-block cursor-default">
                  <span className="hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white">
            Contact Info
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <motion.div whileHover="hover" variants={iconHover} className="mt-1 shrink-0">
                <FaMapMarkerAlt className="text-secondary" />
              </motion.div>
              <span>
                910, Shakti Khand 4, Indirapuram,<br />
                Ghaziabad, Uttar Pradesh 201014
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <motion.div whileHover="hover" variants={iconHover} className="shrink-0">
                <FaPhoneAlt className="text-secondary" />
              </motion.div>
              <a href="tel:+919971158340" className="hover:text-white transition-colors duration-300">
                +91 99711 58340
              </a>
            </li>
            
            <li className="flex gap-3 items-center">
              <motion.div whileHover="hover" variants={iconHover} className="shrink-0">
                <FaPhoneAlt className="text-secondary" />
              </motion.div>
              <a href="tel:+919811811906" className="hover:text-white transition-colors duration-300">
                +91 98118 11906
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <motion.div whileHover="hover" variants={iconHover} className="shrink-0">
                <FaEnvelope className="text-secondary" />
              </motion.div>
              <a href="mailto:avdeshglasshouse@gmail.com" className="hover:text-white transition-colors duration-300">
                avdeshglasshouse@gmail.com
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <motion.div whileHover="hover" variants={iconHover} className="shrink-0">
                <FaWhatsapp className="text-secondary" />
              </motion.div>
              <a
                href="https://wa.me/919971158340"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Avdesh Glass House. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

