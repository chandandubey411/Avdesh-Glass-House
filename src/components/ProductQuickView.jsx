import { motion } from "framer-motion";
import { FaTimes, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ProductQuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark backdrop blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10 grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow hover:bg-white text-gray-700 hover:text-black transition-colors"
        >
          <FaTimes size={18} />
        </button>

        {/* Product Image Panel */}
        <div className="relative h-64 md:h-full min-h-[300px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-6 left-6 text-2xl font-bold font-heading text-white">
            {product.title}
          </h3>
        </div>

        {/* Product Details Panel */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#2FA4E7] uppercase">
              Architectural Product
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-dark mt-1.5 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 leading-relaxed font-body mb-6 text-sm md:text-base">
              {product.desc}
            </p>

            <h4 className="font-heading font-bold text-dark text-sm tracking-wider uppercase mb-3">
              Key Specifications:
            </h4>
            <ul className="space-y-2 mb-8">
              {product.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                  <FaCheckCircle className="text-[#2FA4E7] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/919971158340?text=Hello%20Avdhesh%20Glass%20House,%20I%20am%20interested%20in%20enquiring%20about%20${encodeURIComponent(
                product.title
              )}.`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold hover:bg-[#20ba5a] transition shadow-md text-sm active:scale-95"
            >
              <FaWhatsapp size={16} />
              WhatsApp Enquiry
            </a>
            
            <a
              href="tel:09971158340"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-dark transition shadow-md text-sm active:scale-95"
            >
              <FaPhoneAlt size={13} />
              Call For Quote
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductQuickView;
