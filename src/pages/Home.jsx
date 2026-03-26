import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const sliderData = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    quote: "Strength & Safety You Can Trust – Premium Toughened Glass"
  },
  {
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000",
    quote: "Energy Efficient & Noise-Free – Modern UPVC Profiles"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    quote: "Sleek & Durable – Custom Aluminium Frameworks"
  },
  {
    image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=2000",
    quote: "Seamless Views & Modern Facades – Expert Spider Fittings"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    quote: "Enhance Your Interiors – Decorative & Designer Glass Works"
  },
  {
    image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&q=80&w=2000",
    quote: "Minimalist & Elegant – Slim Profile Glass Railings"
  }
];

const featuredServices = [
  {
    title: "Front Elevation",
    image: "/image/frontelevattion.jpeg"
  },
  {
    title: "Spider Fitting",
    image: "/image/spider_fitting.jpeg"
  },
  {
    title: "UPVC Doors",
    image: "image/upvc.jpeg"
  },
  {
    title: "Interior Glass",
    image: "/image/interior_glass.jpg"
  }
];

const projectShowcase = [
  { title: "Aarambh Retreats", category: "Residential", image: "/project/arambh_retreats.jpg" },
  { title: "Arihant Hospital", category: "Hospitality & Healthcare", image: "/project/arihant_hospital.jpg" },
  { title: "Premium Villas", category: "Residential", image: "/project/project2.jpg" },
  { title: "Business Park Entrance", category: "Commercial Project", image: "/project/project3.jpg" },
  { title: "Commercial Exterior", category: "Commercial Project", image: "/project/project8.jpeg" },
  { title: "Corporate Headquarters", category: "Corporate Office", image: "/project/project9.jpeg" },
  { title: "Modern Workspace", category: "Corporate Office", image: "/project/project10.jpeg" },
  { title: "Commercial Complex", category: "Commercial Project", image: "/project/project11.jpeg" },
  { title: "Business Park Facade", category: "Commercial Project", image: "/project/project12.jpeg" },
  { title: "Retail & Commercial Space", category: "Commercial Project", image: "/project/project13.jpeg" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1);
  };

  return (
    <>
      {/* ================= HEADER SLIDER SECTION ================= */}
      <section className="relative h-[70vh] w-full overflow-hidden group">
        {/* Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt="Slider background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-dark/60"></div>

            {/* Slider Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl tracking-wide leading-tight drop-shadow-lg">
                {slide.quote}
              </h2>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-3 rounded-full transition opacity-0 group-hover:opacity-100 backdrop-blur-sm"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Crafting Excellence in <br className="hidden md:block" /> Glass & Aluminium Since 2007
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to <strong>Avdesh Glass House</strong>, the leading purveyor of premium glass and aluminium architectural solutions in Ghaziabad and the wider NCR region. For over 15 years, we have transformed ordinary spaces into stunning, modern environments.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Whether you are designing a sleek corporate office or a contemporary smart home, our expert team brings precision engineering to every project. We specialize in custom Toughened Glass, robust UPVC frameworks, structural Spider Fittings, and elegant Slim Profile Railings—merging aesthetic brilliance with unmatched durability.
            </p>

            <ul className="grid grid-cols-2 gap-3 mt-2 text-gray-800 font-medium">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> 100% Quality Assured
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Custom Designs
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Expert Installation
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Timely Delivery
              </li>
            </ul>

            <div>
              <Link
                to="/about"
                className="inline-block mt-4 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-dark transition shadow-md"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="Glass and aluminium building work"
            className="rounded-lg shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 relative bg-[#3c4a63]">
        {/* Top half white background to create the overlap effect from screenshot */}
        <div className="absolute top-0 left-0 w-full h-[60%] bg-white -z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-primary mb-16">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-xl h-[350px] bg-white border-b-4 border-transparent hover:border-[#facc15] transition-all cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Text Badge positioned like the screenshot */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10/12 bg-white text-center py-3 shadow-md rounded">
                  <h3 className="font-heading font-bold text-dark whitespace-nowrap px-2 truncate">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 mb-4 text-white">
            <p className="text-lg md:text-xl font-body mb-8">
              Join us on a journey where Glass meets Innovation and Dreams take Shape.
            </p>
            <Link
              to="/services"
              className="inline-block bg-[#facc15] text-[#0f172a] px-8 py-3 rounded hover:bg-[#eab308] transition shadow-md font-bold"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Our Signature Projects
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the shining facades of iconic commercial buildings and international airports to the elegant transparency gracing countless modern homes and hospitals, our glass solutions define the skyline. Explore the spaces we've transformed through precision engineering and visionary design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {projectShowcase.map((project, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-secondary font-medium text-sm mb-1 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-white text-xl font-heading font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
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
            href="tel:099711 58340"
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
            alt="Expanded visual" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl relative z-[101]"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default Home;
