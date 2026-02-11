import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Glass",
    desc: "From toughened to decorative glass, our glass solutions combine safety, durability and aesthetics.",
    image: "/image/fancyglass.jpeg",
    points: ["Toughened Glass", "Decorative Glass", "Frosted Glass", "Laminated Glass"],
  },
  {
    title: "Aluminium",
    desc: "High-quality aluminium materials for modern construction and architectural designs.",
    image: "/image/aluminiumglasspartition.jpeg",
    points: ["Aluminium Frames", "Partitions", "Sliding Systems", "Structural Glazing"],
  },
  {
    title: "UPVC",
    desc: "Durable and energy-efficient UPVC products for doors and windows.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJbV0Bu1WsAhfRVKOSVxGuGJFKJHu-adJ-Q&s",
    points: ["UPVC Doors", "UPVC Windows", "Low Maintenance", "Weather Resistant"],
  },
  {
    title: "Toughened Glass",
    desc: "Robust and safe glass solutions suitable for various residential and commercial applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qKc56deMvf_wfsWkvQY0ujizflh1V_c-PQ&s",
    points: ["High Strength", "Heat Resistant", "Safety Glass", "Long Life"],
  },
  {
    title: "LED Mirrors",
    desc: "Modern LED mirrors designed to enhance bathrooms and interior spaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIuu6cnln92LRJ1x_1VYKcA43r35MeJMSkQ&s",
    points: ["Energy Efficient", "Modern Look", "Long Lasting LEDs", "Custom Sizes"],
  },
  {
    title: "Sliding Door Hardware",
    desc: "Smooth, durable and premium-quality hardware for sliding doors and glass systems.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLKSxImsyFRdglijHCAKVQwLb0DPulrwfeA&s",
    points: ["Smooth Movement", "Rust Resistant", "Premium Finish", "Long Durability"],
  },
];

const Products = () => {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Premium glass, aluminium & UPVC products built for performance and style.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 hover:h-72 hover:object-contain w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-dark">
                    {product.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {product.desc}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {product.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <FaCheckCircle className="text-primary mt-1" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-block mt-5 text-primary font-semibold hover:underline"
                  >
                    Enquire Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-heading font-bold">
          Looking for Premium Glass & Aluminium Products?
        </h2>
        <p className="mt-4 text-gray-300">
          Contact Avdesh Glass House for expert guidance and competitive pricing.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:09971158340"
            className="bg-primary px-6 py-3 rounded-md hover:bg-secondary transition"
          >
            Call Now
          </a>

          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-dark transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Products;
