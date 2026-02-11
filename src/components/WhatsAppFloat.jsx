import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
<<<<<<< HEAD
      href="https://wa.me/919971158340"
=======
      href="https://wa.me/+919971158340"
>>>>>>> b7b8d39019f97715a296725a014fbc8a86dc98e9
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white p-2 md:px-4 md:py-3 rounded-full shadow-lg hover:scale-105 transition whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="hidden md:inline font-semibold">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppFloat;
