import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const projectsData = [
  // Airports
  { id: 1, category: "Airports", title: "Terminal Full Glass Facade", image: "/project/project13.jpeg" },
  { id: 2, category: "Airports", title: "Modern Airport Exterior", image: "/project/project5.jpg" },
  // Commercial Buildings
  { id: 3, category: "Commercial Buildings", title: "Corporate Glass Tower", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Commercial Buildings", title: "Business Park Entrance", image: "/project/project3.jpg" },
  // Hotels
  { id: 5, category: "Hotels", title: "Luxury Resort Balconies", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Hotels", title: "Modern Hotel Exterior", image: "/project/project7.png" },
  // Residential
  { id: 7, category: "Residential", title: "Aarambh Retreats", image: "/project/arambh_retreats.jpg" },
  { id: 8, category: "Residential", title: "Premium Villas", image: "/project/project2.jpg" },
  { id: 9, category: "Residential", title: "Modern Apartment Glass Railings", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  // Hospitals & Institutions
  { id: 10, category: "Hospitals and Institutions", title: "Arihant Hospital", image: "/project/arihant_hospital.jpg" },
  { id: 11, category: "Hospitals and Institutions", title: "City Medical Center", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Hospitals and Institutions", title: "University Research Wing", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  // Others
  { id: 13, category: "Others", title: "Custom Spider Fittings", image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=800" },
  { id: 14, category: "Others", title: "Interior Decorative Glass", image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=800" }
];

const categories = ["All", "Airports", "Commercial Buildings", "Hotels", "Residential", "Hospitals and Institutions", "Others"];

const clients = [
  { name: "Residential Projects", location: "Ghaziabad" },
  { name: "Commercial Complexes", location: "Noida" },
  { name: "Office Interiors", location: "Indirapuram" },
  { name: "Retail Showrooms", location: "Vaishali" },
  { name: "Corporate Offices", location: "Delhi NCR" },
  { name: "Hospitality Projects", location: "Delhi NCR" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/85 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Explore our extensive portfolio of premium glass and aluminium installations across various sectors, trusted by clients across Delhi NCR.
          </p>
        </div>
      </section>

      {/* ================= FILTER & GRID SECTION ================= */}
      <section className="py-20 bg-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all shadow-sm ${
                  activeCategory === cat 
                    ? "bg-primary text-white scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="relative group overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-secondary font-medium text-xs mb-1 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-white text-lg font-heading font-semibold leading-tight">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>

      {/* ================= EXTRA CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Built To Last, Designed To Inspire</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Every project undertaken by Avdesh Glass House reflects our commitment to excellence, structural integrity, and architectural beauty. From towering commercial facades to elegant residential interiors, we use only the highest-grade materials to ensure safety and longevity. Our team of seasoned professionals works closely with architects, builders, and homeowners to deliver bespoke glass and aluminium solutions that elevate the aesthetic and functional value of any property.
          </p>
          <a
            href="tel:09971158340"
            className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-md hover:bg-dark transition shadow-lg"
          >
            Start Your Project With Us
          </a>
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
            href="https://wa.me/09971158340"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-dark transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-[101]"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={40} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Expanded View" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl relative z-[101]"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default Projects;
