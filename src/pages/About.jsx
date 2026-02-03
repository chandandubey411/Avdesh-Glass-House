import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold">
            About Avdesh Glass House
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Trusted glass & aluminium experts in Ghaziabad since 2007
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Established in 2007, Avdesh Glass House has built a strong
              reputation in the glass and aluminium industry by consistently
              delivering quality-driven and innovative solutions.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              From residential projects to large commercial developments,
              we specialize in premium glass, aluminium and UPVC solutions
              tailored to meet the exact needs of our clients.
            </p>
          </div>

          <img
            src="https://lh3.googleusercontent.com/p/AF1QipM8geVPu767fHyf1uOrPDjemvEnthJLuz_NRxzl=s1360-w1360-h1020-rw"
            alt="Glass and aluminium work by Avdesh Glass House"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          <div className="border rounded-lg p-8 shadow-sm hover:rotate-1">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To enhance spaces with premium glass and aluminium solutions,
              tailored to the unique needs of each client through dedication,
              expertise and a customer-first approach.
            </p>
          </div>

          <div className="border rounded-lg p-8 shadow-sm hover:rotate-1">
            <h3 className="text-2xl font-heading font-bold text-primary">
              Our Vision
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              To be recognized as a benchmark in creativity, service and
              efficiency within the glass and aluminium industry, while
              continually setting new standards in quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-primary">
            Why Clients Trust Us
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "15+ Years of Industry Experience",
              "High-Quality Glass & Aluminium Materials",
              "Customized Design Solutions",
              "Skilled & Professional Team",
              "Timely Project Execution",
              "Long-Term Client Relationships",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <FaCheckCircle className="text-primary mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-heading font-bold">
          Ready to Transform Your Space?
        </h2>
        <p className="mt-4 text-gray-300">
          Get in touch with Avdesh Glass House for expert glass & aluminium solutions.
        </p>

        <a
          href="tel:+919811811906"
          className="inline-block mt-6 bg-primary px-6 py-3 rounded-md hover:bg-secondary transition"
        >
          Call Now
        </a>
      </section>
    </>
  );
};

export default About;
