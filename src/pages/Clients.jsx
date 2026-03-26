const clients = [
  { name: "Residential Projects", location: "Ghaziabad" },
  { name: "Commercial Complexes", location: "Noida" },
  { name: "Office Interiors", location: "Indirapuram" },
  { name: "Retail Showrooms", location: "Vaishali" },
  { name: "Corporate Offices", location: "Delhi NCR" },
  { name: "Hospitality Projects", location: "Delhi NCR" },
];

const Clients = () => {
  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-[#2FA4E7] font-medium max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-normal">Trusted by residential and commercial clients across Delhi NCR.</span>
          </p>
        </div>
      </section>

      {/* ================= CLIENT OVERVIEW ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary">
            Building Long-Term Relationships
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-700">
            Over the years, Avdesh Glass House has successfully delivered
            premium glass, aluminium and UPVC solutions for a wide range
            of residential, commercial and corporate projects.
          </p>
        </div>
      </section>

      {/* ================= CLIENT CARDS ================= */}
      <section className="pb-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-heading font-semibold text-dark">
                {client.name}
              </h3>

              <p className="mt-2 text-gray-600">
                Location: {client.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-4xl font-bold text-primary">15+</h3>
            <p className="mt-2 text-gray-700">Years of Experience</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-4xl font-bold text-primary">1000+</h3>
            <p className="mt-2 text-gray-700">Happy Clients</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-4xl font-bold text-primary">5.0★</h3>
            <p className="mt-2 text-gray-700">Google Rating</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-heading font-bold">
          Want to Be Our Next Happy Client?
        </h2>

        <p className="mt-4 text-gray-300">
          Get in touch with Avdesh Glass House for premium glass & aluminium solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919811811906"
            className="bg-primary px-6 py-3 rounded-md hover:bg-secondary transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/099711 58340"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-dark transition"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Clients;
