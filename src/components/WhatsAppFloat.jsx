import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/09971158340"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 bg-[#25d366] text-white p-4 rounded-full shadow-2xl z-50 whatsapp-pulse flex items-center justify-center hover:bg-[#20ba5a] transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
};

export default WhatsAppFloat;
