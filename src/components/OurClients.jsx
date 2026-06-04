import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronRight, FaBuilding, FaHospital, FaIndustry, FaHome, FaAward, FaHandshake } from "react-icons/fa";
import Counter from "./Counter";

// ─── Brand colours ───────────────────────────────────────────────────────────
const PRIMARY   = "#0B4F8A";
const SECONDARY = "#2FA4E7";

// ─── Client data ─────────────────────────────────────────────────────────────
const clients = [
  {
    name:     "Crescent Techno Solutions",
    logo:     "/clientLogo/Logo-Crescent-2.png",
    category: "Corporate / Technology",
    icon:     FaBuilding,
  },
  {
    name:     "Family Care Hospital",
    logo:     "/clientLogo/family care hospital.png",
    category: "Healthcare",
    icon:     FaHospital,
  },
  {
    name:     "Krishna Scientific Works",
    logo:     "/clientLogo/ksw.webp",
    category: "Industrial / Scientific",
    icon:     FaIndustry,
  },
  {
    name:     "Real Square Mall",
    logo:     "/clientLogo/real square.png",
    category: "Commercial / Retail",
    icon:     FaBuilding,
  },
  {
    name:     "Kunal Residency",
    logo:     "/clientLogo/kunal residency.png",
    category: "Residential",
    icon:     FaHome,
  },
  {
    name:     "Cloud Nine",
    logo:     "/clientLogo/cloudnine.jpg",
    category: "Healthcare / Maternity",
    icon:     FaHospital,
  },
];

// Duplicate for seamless infinite loop
const marqueeClients = [...clients, ...clients];

// ─── Trust metrics ────────────────────────────────────────────────────────────
const metrics = [
  { value: "50+",  label: "Completed Projects",  icon: FaAward },
  { value: "20+",  label: "Corporate Clients",    icon: FaHandshake },
  { value: "15+",  label: "Years Experience",     icon: FaBuilding },
  { value: "100%", label: "Client Satisfaction",  icon: FaAward },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Matches the site-wide SectionHeading but centred */
const SectionHeading = ({ children }) => (
  <div className="mb-6 flex flex-col items-center">
    <div className="flex items-center">
      <div className="flex items-center -space-x-1.5 md:-space-x-2 mr-3 text-2xl md:text-3xl">
        <FaChevronRight style={{ color: SECONDARY }} />
        <FaChevronRight style={{ color: PRIMARY }}   />
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: PRIMARY }}>
        {children}
      </h2>
    </div>
    <div className="h-1 w-32 mt-2 ml-10 self-start" style={{ background: SECONDARY }} />
  </div>
);

/** Individual client card inside the marquee */
const ClientCard = ({ client }) => (
  <motion.div
    whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(11,79,138,0.16)" }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="relative flex-shrink-0 mx-4 w-52 bg-white rounded-2xl shadow-md overflow-hidden group"
  >
    {/* Top accent bar */}
    <div
      className="h-1 w-full"
      style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})` }}
    />

    {/* Subtle corner decoration */}
    <div
      className="absolute top-2 right-2 w-12 h-12 rounded-full opacity-5"
      style={{ background: PRIMARY }}
    />

    <div className="p-6 flex flex-col items-center gap-3">
      {/* Logo */}
      <div className="w-28 h-20 flex items-center justify-center">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
          src={client.logo}
          alt={client.name}
          className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {/* Divider */}
      <div className="w-10 h-px bg-gray-200 my-1" />

      {/* Name */}
      <p className="font-heading font-semibold text-center text-sm leading-snug" style={{ color: PRIMARY }}>
        {client.name}
      </p>

      {/* Category badge */}
      <span
        className="text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: `${SECONDARY}18`, color: SECONDARY }}
      >
        {client.category}
      </span>
    </div>
  </motion.div>
);

/** Metric counter card */
const MetricCard = ({ metric, index }) => {
  const Icon = metric.icon;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(11,79,138,0.14)" }}
      transition={{ duration: 0.3 }}
      className="relative bg-white rounded-2xl p-8 text-center shadow-md overflow-hidden group"
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: index % 2 === 0
          ? `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`
          : `linear-gradient(90deg, ${SECONDARY}, ${PRIMARY})` }}
      />

      {/* Decorative bg circle */}
      <div
        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: PRIMARY }}
      />

      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
        style={{ background: `${SECONDARY}18` }}
      >
        <Icon className="text-2xl" style={{ color: SECONDARY }} />
      </div>

      {/* Number */}
      <div className="text-4xl font-heading font-extrabold counter-gradient mb-2">
        <Counter value={metric.value} />
      </div>

      {/* Label */}
      <p className="text-gray-600 font-medium text-sm">{metric.label}</p>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const OurClients = () => {
  const sectionRef = useRef(null);
  const inView      = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24"
      style={{ background: "#F7F9FC" }}
    >
      {/* ── Decorative background blobs ─────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full opacity-[0.04]"
        style={{ background: PRIMARY }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[340px] h-[340px] rounded-full opacity-[0.05]"
        style={{ background: SECONDARY }}
      />

      {/* ── Dot-grid texture strip ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, ${PRIMARY} 1.5px, transparent 1.5px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* ── Section Heading ─────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="text-center flex flex-col items-center"
        >
          <SectionHeading>Trusted By Leading Brands</SectionHeading>
          <p className="mt-4 mb-16 max-w-2xl text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Delivering premium glass solutions to India's most recognized businesses.
          </p>
        </motion.div>

        {/* ── Infinite logo marquee ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Fade edges */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to right, #F7F9FC, transparent)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
              style={{ background: "linear-gradient(to left, #F7F9FC, transparent)" }}
            />

            {/* Scrolling track */}
            <div className="marquee-wrapper overflow-hidden py-4">
              <div className="marquee-track">
                {marqueeClients.map((client, idx) => (
                  <ClientCard key={`${client.name}-${idx}`} client={client} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Separator ───────────────────────────────────────────────── */}
        <div className="my-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <div
            className="px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
            style={{ background: `${PRIMARY}12`, color: PRIMARY }}
          >
            Our Track Record
          </div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ── Trust metrics ────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurClients;
