import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Rajesh Kumar",
    role: "Senior Project Manager",
    company: "DLF Group NCR",
    avatar: "RK",
    text: "Avdhesh Glass House transformed our commercial block with state-of-the-art toughened glazing. Their precision, adherence to safety norms, and premium design execution were exemplary. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Sandeep Sharma",
    role: "Medical Director",
    company: "Arihant Hospital",
    avatar: "SS",
    text: "For our healthcare wing, we required energy-efficient soundproof glazing. Avdhesh Glass House provided stellar UPVC frames and partitions that look fantastic and provide excellent acoustics.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "Lead Architect",
    company: "Malhotra & Partners",
    avatar: "VM",
    text: "We worked on a premium villa project that called for minimalist glass railings and designer mirrors. Avdhesh Glass House exceeded our expectations with custom slim-profile railings and gorgeous LED mirrors.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "Managing Partner",
    company: "Aarambh Retreats",
    avatar: "AG",
    text: "The structural spider glazing done by Avdhesh Glass House at our resort entrance is a visual marvel. The frameless continuity is highly praised by all visiting guests.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 220, damping: 22 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.3 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const t = testimonialsData[current];

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4 py-8"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative overflow-hidden min-h-[320px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="glass-card w-full p-8 md:p-12 rounded-3xl flex flex-col items-center text-center gap-6 relative shadow-xl"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-[#2FA4E7] text-4xl opacity-20 absolute top-8 left-8" />

            {/* Rating Stars */}
            <div className="flex gap-1.5 text-yellow-400">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-body italic max-w-2xl">
              "{t.text}"
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0B4F8A] to-[#2FA4E7] flex items-center justify-center font-bold text-white text-lg tracking-wider shadow-md">
                {t.avatar}
              </div>
              <div className="text-left">
                <h4 className="font-heading font-bold text-dark text-lg">{t.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{t.role} — <span className="text-[#0B4F8A] font-semibold">{t.company}</span></p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary active:scale-90 transition duration-300 shadow-sm"
        >
          <FaChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setAutoplay(false); setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === current ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary active:scale-90 transition duration-300 shadow-sm"
        >
          <FaChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
