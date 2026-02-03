import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[95vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/image/hero-glass.jpg')" }}
      >
        <div className="absolute inset-0 bg-dark/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Premium Glass & Aluminium <br /> Solutions in Ghaziabad
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Since 2007, Avdesh Glass House has been delivering high-quality
            glass, aluminium & UPVC solutions for homes, offices and commercial
            spaces.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+919811811906"
              className="flex items-center gap-2 bg-primary px-6 py-3 rounded-md hover:bg-secondary transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919811811906"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-dark transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary">
              About Avdesh Glass House
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in 2007, Avdesh Glass House is a trusted name in the
              glass and aluminium industry. We specialize in modern, durable and
              aesthetic solutions tailored to client needs.
            </p>

            <Link
              to="/about"
              className="inline-block mt-6 text-primary font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>

          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/9/345443676/JR/HL/NX/137300804/aluminium-facade-work.jpg"
            alt="Glass and aluminium building work"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary">
            Our Services
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Front Elevation",
              "Spider Fitting",
              "UPVC Doors & Windows",
              "Aluminium Partition",
              "Interior Glass Designing",
              "Slim Profile Railings",
            ].map((service, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-dark">{service}</h3>
                <p className="mt-3 text-gray-600">
                  High-quality, modern and durable solutions designed to enhance
                  your space.
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary">
            Why Choose Us
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              "15+ Years Industry Experience",
              "Premium Quality Materials",
              "Customized Design Solutions",
              "Skilled & Professional Team",
              "Timely Project Delivery",
              "Trusted by 1000+ Clients",
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="py-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-heading font-bold">
          Looking for Reliable Glass & Aluminium Work?
        </h2>

        <p className="mt-4 text-gray-300">
          Contact Avdesh Glass House today for expert consultation.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
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

export default Home;
