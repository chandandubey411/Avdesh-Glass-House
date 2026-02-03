import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300">
      
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
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/clients" className="hover:text-white">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Front Elevation</li>
            <li>Spider Fitting</li>
            <li>UPVC Doors & Windows</li>
            <li>Aluminium Partition</li>
            <li>Interior Glass Designing</li>
            <li>Slim Profile Solutions</li>
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div>
          <h3 className="text-lg font-heading font-semibold text-white">
            Contact Info
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              910, Shakti Khand 4, Indirapuram,
              Ghaziabad, Uttar Pradesh 201014
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-primary" />
              <a href="tel:+919811811906" className="hover:text-white">
                +91 98118 11906
              </a>
            </li>

            <li className="flex gap-3">
              <FaEnvelope className="mt-1 text-primary" />
              avdeshglasshouse@gmail.com
            </li>

            <li className="flex gap-3">
              <FaWhatsapp className="mt-1 text-primary" />
              <a
                href="https://wa.me/919811811906"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Avdesh Glass House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
