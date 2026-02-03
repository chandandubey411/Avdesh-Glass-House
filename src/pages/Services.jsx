import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import SEO from "../components/SEO";

const services = [
  {
    title: "Front Elevation",
    desc: "Modern and customized front elevation solutions combining aesthetics with durability.",
    image: "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2022/11/contemporary-glass-elevation.jpg",
  },
  {
    title: "Spider Fitting",
    desc: "Contemporary glass spider fitting installations offering clear views and a premium look.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7ApOjbBbXN0b_NeFLjkQhsElbnhHUNZqpA&s",
  },
  {
    title: "UPVC Doors & Windows",
    desc: "Energy-efficient, low-maintenance UPVC doors and windows for homes and offices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3pX3Qm3ARdDBt_3fxrIWzgvttdFe8WKFqA&s",
  },
  {
    title: "Aluminium Partition",
    desc: "Flexible aluminium partition solutions for offices and commercial spaces.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNyVH8AjrPsmTFWEq3cQFieVrrudYnkuPCTIkaW=s1360-w1360-h1020-rw",
  },
  {
    title: "Interior Glass Designing",
    desc: "Elegant interior glass designs that enhance the beauty of residential and commercial spaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsekglFm_EN99q5uLSQdg5m8cwHmEoJwykw&s",
  },
  {
    title: "Slim Profile (Railing & Balcony)",
    desc: "Minimalistic slim profile solutions for railings, balconies, and shower enclosures.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyPQ5krEJan7JS_in4u0idFsmQfnfQisYxg&s",
  },
];

const Services = () => {
  return (
    <>
      <SEO
  title="Glass & Aluminium Services in Ghaziabad | Avdesh Glass House"
  description="Front elevation, spider fitting, UPVC doors & windows, aluminium partitions and more in Ghaziabad."
  keywords="glass services ghaziabad, aluminium services ghaziabad, spider fitting glass"
  canonical="https://www.avdeshglasshouse.com/services"
/>

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Premium glass, aluminium & UPVC solutions designed for modern spaces.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:scale-105 transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-dark">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {service.desc}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-block mt-4 text-primary font-semibold hover:underline"
                  >
                    Get a Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY OUR SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary">
            Why Our Services Stand Out
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "High-quality glass and aluminium materials",
              "Modern designs and premium finishes",
              "Customized solutions for every project",
              "Experienced and skilled technicians",
              "On-time project completion",
              "Excellent after-sales support",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-heading font-bold">
          Need Expert Glass & Aluminium Services?
        </h2>
        <p className="mt-4 text-gray-300">
          Contact Avdesh Glass House today for reliable and professional solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919811811906"
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

export default Services;
