import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary">
              Avdesh
            </span>
            <span className="ml-1 text-sm font-semibold text-gray-600">
              Glass House
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/clients" className="hover:text-primary">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919811811906"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-dark transition"
            >
              <FaPhoneAlt size={14} />
              Call
            </a>

            <a
              href="https://wa.me/919811811906"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t">
            <ul className="flex flex-col py-4 gap-4 font-medium text-gray-700">
              <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/services">Services</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/products">Products</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/clients">Clients</Link></li>
              <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>

              <div className="flex gap-3 px-4 pt-3">
                <a
                  href="tel:+919811811906"
                  className="flex-1 text-center bg-primary text-white py-2 rounded-md"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/919811811906"
                  className="flex-1 text-center border border-primary text-primary py-2 rounded-md"
                >
                  WhatsApp
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
