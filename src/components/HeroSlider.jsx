import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaProjectDiagram,
  FaAward,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

// ─── Slide data ───────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    service: "Toughened Glass Solutions",
    desc:    "Engineered for maximum safety and clarity — our toughened glass is 5× stronger than ordinary glass, perfect for facades, partitions, and structural applications.",
    image:   "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 2,
    service: "Structural Glazing",
    desc:    "Seamless, frameless glass systems that redefine modern architecture — delivering breathtaking visual continuity and structural integrity for commercial towers.",
    image:   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 3,
    service: "Aluminium Doors & Windows",
    desc:    "Precision-crafted aluminium profiles offering superior thermal performance, noise reduction, and elegant aesthetics for every architectural requirement.",
    image:   "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 4,
    service: "ACP Cladding",
    desc:    "Aluminium Composite Panel cladding solutions that transform building exteriors — lightweight, weather-resistant, and strikingly contemporary for corporate facades.",
    image:   "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 5,
    service: "Glass Partitions",
    desc:    "Create open, light-flooded workspaces with our premium glass partition systems — combining acoustic performance with sleek, modern corporate aesthetics.",
    image:   "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 6,
    service: "Spider Glazing Systems",
    desc:    "Minimalist spider fittings that achieve truly frameless glass installations — offering uninterrupted panoramic views and an ultra-modern architectural statement.",
    image:   "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 7,
    service: "Glass Railings & Balustrades",
    desc:    "Slim-profile glass railings that marry safety with sophistication — ideal for staircases, balconies, mezzanines, and terrace edges in premium properties.",
    image:   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 8,
    service: "Commercial Facade Solutions",
    desc:    "Bespoke curtain-wall and unitised facade systems engineered to meet the demanding performance standards of high-rise and large-scale commercial developments.",
    image:   "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 9,
    service: "Office Interior Glass Works",
    desc:    "Transform your workplace with designer interior glass — feature walls, frameless cabins, brand-etched partitions and decorative glass that inspire productivity.",
    image:   "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=2200",
  },
  {
    id: 10,
    service: "Residential Glass Installations",
    desc:    "Elevate your home with custom glass solutions — shower enclosures, staircase railings, feature walls and exterior glazing crafted to your unique lifestyle.",
    image:   "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=2200",
  },
];

// ─── Stats bar data ───────────────────────────────────────────────────────────
const stats = [
  { icon: FaAward,          value: "15+",  label: "Years Experience"        },
  { icon: FaProjectDiagram, value: "500+", label: "Projects Delivered"      },
  { icon: FaShieldAlt,      value: "100%", label: "Quality Commitment"      },
  { icon: FaMapMarkerAlt,   value: "Pan India", label: "Service Support"    },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const contentVariants = {
  enter:  { opacity: 0, y: 36 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { opacity: 0, y: -20, transition: { duration: 0.35 } },
};

const tagVariants = {
  enter:  { opacity: 0, x: -20 },
  center: { opacity: 1, x: 0,   transition: { duration: 0.5, delay: 0.1 } },
  exit:   { opacity: 0 },
};

const btnVariants = {
  enter:  { opacity: 0, y: 20 },
  center: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: 0.35 + i * 0.12, ease: "easeOut" },
  }),
  exit:   { opacity: 0 },
};

// ─── Main component ───────────────────────────────────────────────────────────
const HeroSlider = () => {
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const [dir,     setDir]       = useState(1);        // 1 = forward, -1 = backward
  const touchStartX             = useRef(null);
  const total                   = slides.length;

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);

  const go = useCallback((index, direction = 1) => {
    setDir(direction);
    setCurrent((index + total) % total);
  }, [total]);

  const next = useCallback(() => go(current + 1,  1), [current, go]);
  const prev = useCallback(() => go(current - 1, -1), [current, go]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "85vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Service showcase hero slider"
    >
      {/* ── Background images (one per slide, crossfade with parallax) ─────────────── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          aria-hidden
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <motion.img
            src={s.image}
            alt=""
            className="w-full h-full object-cover origin-center"
            style={{
              y: i === current ? yParallax : 0,
            }}
            initial={{ scale: 1 }}
            animate={{ scale: i === current ? 1.06 : 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ── Dark gradient overlay ─────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(10,37,64,0.92) 0%, rgba(11,79,138,0.78) 55%, rgba(11,79,138,0.35) 100%)",
          zIndex: 1,
        }}
      />

      {/* Floating Decorative Glass Shapes */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          zIndex: 2
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[5%] w-48 h-48 rounded-2xl pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(47,164,231,0.06) 0%, rgba(11,79,138,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(8px)",
          zIndex: 2
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* ── Decorative grid lines ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 2,
        }}
      />

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col justify-center px-6 md:px-16 lg:px-24"
        style={{ minHeight: "85vh", zIndex: 3 }}
      >
        <div className="max-w-7xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.span
                variants={tagVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(47,164,231,0.18)",
                  color: "#2FA4E7",
                  border: "1px solid rgba(47,164,231,0.35)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#2FA4E7" }}
                />
                Premium Glass &amp; Aluminium Solutions
              </motion.span>

              {/* Service heading */}
              <motion.h1
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="font-heading font-extrabold text-white leading-tight mb-5"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  textShadow: "0 4px 24px rgba(0,0,0,0.35)",
                }}
              >
                {slide.service}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ delay: 0.15 }}
                className="font-body text-gray-200 leading-relaxed mb-10 max-w-xl"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)" }}
              >
                {slide.desc}
              </motion.p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  custom={0}
                  variants={btnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-block font-heading font-semibold px-8 py-3.5 rounded-lg text-center w-full"
                      style={{
                        background: "#2FA4E7",
                        color: "#fff",
                        boxShadow: "0 8px 32px rgba(47,164,231,0.38)",
                      }}
                    >
                      Discuss Your Project
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  custom={1}
                  variants={btnVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Link
                      to="/services"
                      className="inline-block font-heading font-semibold px-8 py-3.5 rounded-lg text-center w-full transition-all duration-300"
                      style={{
                        background: "transparent",
                        color: "#fff",
                        border: "2px solid rgba(255,255,255,0.65)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#fff";
                        e.currentTarget.style.color = "#0B4F8A";
                        e.currentTarget.style.borderColor = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)";
                      }}
                    >
                      View All Services
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Slide counter (top-right) ─────────────────────────────────── */}
      <div
        className="absolute top-8 right-6 md:right-16 font-heading font-bold select-none"
        style={{ zIndex: 10, color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", letterSpacing: "0.12em" }}
      >
        <span style={{ color: "#fff", fontSize: "1.5rem" }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        &nbsp;/ {String(total).padStart(2, "0")}
      </div>

      {/* ── Navigation arrows ─────────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
        style={{
          zIndex: 10,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(8px)",
          color: "#fff",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#2FA4E7"; e.currentTarget.style.borderColor = "#2FA4E7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
      >
        <FaChevronLeft size={16} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
        style={{
          zIndex: 10,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          backdropFilter: "blur(8px)",
          color: "#fff",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#2FA4E7"; e.currentTarget.style.borderColor = "#2FA4E7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
      >
        <FaChevronRight size={16} />
      </button>

      {/* ── Pagination dots ───────────────────────────────────────────── */}
      <div
        className="absolute bottom-32 left-6 md:left-16 lg:left-24 flex gap-2"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-400 rounded-full"
            style={{
              width:  i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "#2FA4E7" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* ── Progress bar ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-full"
        style={{ zIndex: 10, background: "rgba(255,255,255,0.1)" }}
      >
        <motion.div
          key={current}
          className="h-full"
          style={{ background: "#2FA4E7" }}
          initial={{ width: "0%" }}
          animate={{ width: paused ? undefined : "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* ── Glassmorphism stats bar ───────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-4xl"
        style={{ zIndex: 10 }}
      >
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 rounded-xl overflow-hidden"
          style={{
            background:  "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-1 py-4 px-3"
              >
                <Icon
                  className="mb-1"
                  style={{ color: "#2FA4E7", fontSize: "1.1rem" }}
                />
                <span
                  className="font-heading font-extrabold leading-none"
                  style={{ color: "#fff", fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-body text-center leading-tight"
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.7rem", letterSpacing: "0.04em" }}
                >
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
