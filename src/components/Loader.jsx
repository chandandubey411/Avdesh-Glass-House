import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const step = (100 * intervalTime) / duration;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 400); // Slight delay for smooth fade-out
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0A2540] via-[#0B4F8A] to-[#0A2540] text-white">
      <div className="flex flex-col items-center gap-8 max-w-xs w-full px-4">
        
        {/* Logo with Shimmer Reflection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="logo-shimmer p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="Avdhesh Glass House"
            className="h-20 w-auto object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Text Details */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-heading font-extrabold text-xl tracking-wider uppercase text-white/95"
          >
            Avdhesh Glass House
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-[#2FA4E7] mt-1.5 uppercase"
          >
            Architectural Glass &amp; Facade
          </motion.p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2FA4E7] to-white rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        {/* Progress Percentage */}
        <motion.span
          className="text-xs font-bold text-white/50 tracking-wider font-body"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading {Math.min(100, Math.round(progress))}%
        </motion.span>
      </div>
    </div>
  );
};

export default Loader;
