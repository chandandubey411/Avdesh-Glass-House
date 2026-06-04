import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 20);

      // Hide navbar if scrolling down, show if scrolling up
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-[90] transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-[12px] shadow-lg border-b border-gray-100/50 py-1.5" 
          : "bg-white/70 backdrop-blur-[6px] border-b border-gray-50/20 py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Avdhesh Glass House Logo" 
            className="h-[60px] md:h-[70px] w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `relative py-2 text-sm font-semibold transition-all duration-300 block hover:-translate-y-[1px] ${
                    isActive ? "text-[#0A4D8C] font-extrabold" : "text-gray-600 hover:text-[#0A4D8C]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span 
                        layoutId="nav-active-line"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A4D8C] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href="tel:09971158340"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 24px rgba(10,77,140,0.25)" }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-[#0A4D8C] text-white px-5 py-2.5 rounded-xl transition-colors font-bold text-sm shadow-md"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 3 }}
            >
              <FaPhoneAlt size={12} />
            </motion.span>
            Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/919971158340"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2, backgroundColor: "#25D366", color: "#ffffff", borderColor: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.25)" }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 border border-[#25D366] text-[#25D366] bg-white px-5 py-2.5 rounded-xl transition-all font-bold text-sm shadow-sm"
          >
            <FaWhatsapp size={15} />
            WhatsApp
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="lg:hidden z-[100] relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-gray-50/80 rounded-xl border border-gray-200/50 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation Menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
            className="w-5 h-0.5 bg-[#0A4D8C] rounded-full"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-5 h-0.5 bg-[#0A4D8C] rounded-full"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
            className="w-5 h-0.5 bg-[#0A4D8C] rounded-full"
          />
        </button>
      </nav>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] bg-white flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8 max-w-sm mx-auto w-full text-center mt-12">
              <ul className="flex flex-col gap-6 text-2xl font-bold font-heading">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 transition-colors ${
                          isActive ? "text-[#0A4D8C] scale-105" : "text-gray-500 hover:text-[#0A4D8C]"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 pt-6 border-t border-gray-100"
              >
                <a
                  href="tel:09971158340"
                  className="w-full text-center bg-[#0A4D8C] text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 text-lg active:scale-95 transition-transform"
                >
                  <FaPhoneAlt size={14} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919971158340"
                  className="w-full text-center border border-[#25D366] text-[#25D366] bg-white py-4 rounded-2xl font-bold shadow-md flex items-center justify-center gap-2 text-lg active:scale-95 transition-transform"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Support
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
