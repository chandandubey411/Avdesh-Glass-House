import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Front Elevation",
    desc: "Modern and customized front elevation solutions combining structural integrity with breathtaking architectural aesthetics for both residential and commercial spaces.",
    image: "/image/frontelevattion.jpeg",
  },
  {
    title: "Spider Fitting",
    desc: "Contemporary glass spider fitting installations offering clear, unobstructed views, allowing maximum natural light while maintaining robust support.",
    image: "/image/spider_fitting.jpeg",
  },
  {
    title: "UPVC Doors & Windows",
    desc: "Energy-efficient, highly durable, and low-maintenance UPVC door and window systems designed to withstand the elements while providing perfect insulation.",
    image: "/image/upvc_door_window.jpeg",
  },
  {
    title: "Aluminium Partition",
    desc: "Sleek and high-strength aluminium partition solutions ideal for creating flexible, modern work environments and separating commercial spaces beautifully.",
    image: "/image/aluminiumpartition.jpeg",
  },
  {
    title: "Interior Glass Designing",
    desc: "Bespoke interior glass designs that visually expand spaces, adding a touch of modern luxury and elegance to offices, homes, and retail environments.",
    image: "/image/interior_glass.jpg",
  },
  {
    title: "Slim Profile (Railing & Balcony)",
    desc: "Minimalistic, highly robust slim-profile solutions for glass railings and balconies that provide safety without interrupting your view.",
    image: "/image/slim_profile.jpeg",
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen font-body text-gray-800">
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Delivering architectural mastery through advanced glass, aluminium, and UPVC installations tailored perfectly to your vision.
          </p>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-2xl relative group">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="lg:w-1/2 w-full max-w-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-heading font-bold text-gray-200">0{index + 1}</span>
                    <div className="h-1 bg-[#2FA4E7] w-12 mt-2"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B4F8A] mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[#2FA4E7] font-semibold text-lg hover:text-[#0B4F8A] transition-colors group">
                    Discuss Your Project <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY OUR SERVICES ================= */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-[#0B4F8A] mb-16">
            Why Our Services Stand Out
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High-Quality Materials Sourced Globally",
              "Cutting-Edge Modern Design Principles",
              "Precision Tailored Custom Solutions",
              "Highly Skilled & Certified Technicians",
              "Strict Adherence to Project Timelines",
              "Unmatched Lifetime After-Sales Support",
            ].map((point, index) => (
              <div key={index} className="flex flex-col bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <FaCheckCircle className="text-[#2FA4E7] text-3xl mb-4" />
                <p className="text-gray-800 font-medium text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0B4F8A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready For Your Next Architectural Masterpiece?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Contact Avdesh Glass House today for reliable, professional, and breathtaking solutions.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="tel:09971158340"
              className="bg-[#2FA4E7] text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-[#0B4F8A] transition shadow-lg"
            >
              Call Us Now
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-[#0B4F8A] transition shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
