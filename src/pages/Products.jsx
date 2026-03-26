import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Glass",
    desc: "From toughened to decorative glass, our glass solutions combine safety, durability and aesthetics perfectly.",
    image: "/image/fancyglass.jpeg",
    points: ["Toughened Glass", "Decorative Glass", "Frosted Glass", "Laminated Glass"],
  },
  {
    title: "Aluminium",
    desc: "High-quality, precision-engineered aluminium materials for modern construction and premium architectural designs.",
    image: "/image/aluminiumpartition.jpeg",
    points: ["Aluminium Frames", "Partitions", "Sliding Systems", "Structural Glazing"],
  },
  {
    title: "UPVC",
    desc: "Highly durable, beautifully finished, and energy-efficient UPVC products for doors and windows.",
    image: "/image/upvc.jpeg",
    points: ["UPVC Doors", "UPVC Windows", "Low Maintenance", "Weather Resistant"],
  },
  {
    title: "Toughened Glass",
    desc: "Robust, impact-resistant safety glass solutions perfectly suited for heavy-duty residential and commercial applications.",
    image: "/image/Toughened_Glass.jpg",
    points: ["High Strength", "Heat Resistant", "Safety Glass", "Long Life"],
  },
  {
    title: "LED Mirrors",
    desc: "Modern, elegantly backlit LED mirrors designed to completely elevate and enhance luxury bathrooms and interior spaces.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    points: ["Energy Efficient", "Modern Look", "Long Lasting LEDs", "Custom Sizes"],
  },
  {
    title: "Sliding Door Hardware",
    desc: "Smooth, incredibly durable and premium-quality hardware engineered flawlessly for sliding doors and glass systems.",
    image: "/image/slidingdoorhardware.jpg",
    points: ["Smooth Movement", "Rust Resistant", "Premium Finish", "Long Durability"],
  },
];

const Products = () => {
  return (
    <div className="bg-white min-h-screen font-body text-gray-800">
      {/* ================= PAGE HEADER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Premium imported and manufactured glass, aluminium & UPVC products built for unmatched performance and ultimate style.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col"
              >
                {/* Image & Title Header */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="absolute bottom-6 left-6 text-2xl font-heading font-bold text-white tracking-wide">
                    {product.title}
                  </h3>
                </div>

                {/* Content Body */}
                <div className="p-8 flex-1 flex flex-col bg-white z-10 -mt-2 rounded-t-2xl relative">
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {product.desc}
                  </p>

                  <ul className="space-y-4 mb-10 flex-1">
                    {product.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <FaCheckCircle className="text-[#2FA4E7] mt-1 shrink-0 text-lg" />
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="block w-full py-4 text-center rounded-xl bg-[#0B4F8A] text-white font-bold hover:bg-[#2FA4E7] transition-colors shadow-lg"
                  >
                    Enquire About This Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#0B4F8A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Looking for Premium Glass & Aluminium Products?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Contact Avdesh Glass House for expert guidance, custom sizing, and competitive pricing.
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

export default Products;
