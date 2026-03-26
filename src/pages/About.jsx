import { FaChevronRight, FaBullseye, FaBinoculars, FaCheckCircle } from "react-icons/fa";

const HeadingIcon = () => (
  <div className="flex items-center -space-x-1.5 md:-space-x-2 mr-3 text-2xl md:text-3xl">
    <FaChevronRight className="text-[#2FA4E7]" />
    <FaChevronRight className="text-[#0B4F8A]" />
  </div>
);

const SectionHeading = ({ children }) => (
  <div className="mb-6">
    <div className="flex items-center">
      <HeadingIcon />
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0B4F8A]">
        {children}
      </h2>
    </div>
    <div className="h-1 bg-[#2FA4E7] w-32 ml-10 mt-2"></div>
  </div>
);

const About = () => {
  return (
    <div className="bg-white min-h-screen pb-24 font-body text-gray-800">
      
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-[#0B4F8A]/80 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Discover Our Story
          </h1>
          <p className="text-xl text-[#2FA4E7] font-medium max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-normal">Building trust through transparency, premium quality, and architectural excellence since 2007. Every pane of glass we install reflects our unwavering commitment to bringing your vision to light.</span>
          </p>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading>About Us</SectionHeading>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
          Established in 2007, Avdesh Glass House has swiftly established itself as a leader in the glass and aluminium industry, consistently delivering innovation and quality in all our endeavours. Our journey is characterised by relentless dedication and a series of successful ventures, culminating in a robust portfolio and a network of satisfied clientele. We strive to create new benchmarks in excellence. Welcome to Avdesh Glass House – where your visions are crafted with expertise and care.
        </p>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Subtle dot background from screenshot */}
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0B4F8A 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
          
          {/* Icons Column */}
          <div className="hidden md:flex md:col-span-3 flex-col items-center relative">
            {/* Connecting curve approximation */}
            <div className="absolute top-24 bottom-24 w-8 bg-[#0B4F8A] rounded-full left-[60%] -translate-x-1/2 z-0 border-r-8 border-white hidden lg:block"></div>
            
            <div className="w-40 h-40 rounded-full border-[10px] border-[#2FA4E7] bg-white flex items-center justify-center shadow-lg relative z-10 mb-20">
              <FaBullseye className="text-6xl text-[#2FA4E7]" />
            </div>

            <div className="w-40 h-40 rounded-full border-[10px] border-[#0B4F8A] bg-white flex items-center justify-center shadow-lg relative z-10">
              <FaBinoculars className="text-6xl text-[#0B4F8A]" />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-9 flex flex-col justify-between py-4">
            
            {/* Mission */}
            <div className="mb-20">
              <div className="flex items-center md:hidden mb-6">
                 <FaBullseye className="text-4xl text-[#2FA4E7] mr-4" />
                 <h2 className="text-3xl font-heading font-bold text-[#0B4F8A]">Mission</h2>
              </div>
              <div className="hidden md:block">
                <SectionHeading>Mission</SectionHeading>
              </div>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed md:pr-12">
                Our mission is to enhance spaces with premium glass and
                aluminium solutions, tailored to the unique needs of each client.
                Through dedication, expertise, and a customer-centric approach,
                we strive to deliver exceptional service and products that transform
                visions into reality.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center md:hidden mb-6">
                 <FaBinoculars className="text-4xl text-[#0B4F8A] mr-4" />
                 <h2 className="text-3xl font-heading font-bold text-[#0B4F8A]">Vision</h2>
              </div>
              <div className="hidden md:block">
                <SectionHeading>Vision</SectionHeading>
              </div>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed md:pr-12">
                To be recognized as the industry benchmark in creativity, service,
                and efficiency in the glass and aluminium sector. We aim to
                continue innovating and expanding our services, setting new
                standards for quality and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <SectionHeading>Our Team</SectionHeading>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
          The backbone of Avdesh Glass House is our talented and dedicated team.
          From designers to technicians, every member is committed to excellence.
          Our team’s expertise allows us to undertake a wide range of projects,
          ensuring precision and quality in everything we do.
        </p>
      </section>

      {/* ================= WHY TRUST US / CTA (Remaining useful content) ================= */}
      <section className="py-20 bg-[#F7F9FC] mt-12 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center text-[#0B4F8A]">
            Why Clients Trust Us
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "15+ Years of Industry Experience",
              "High-Quality Glass & Aluminium Materials",
              "Customized Design Solutions",
              "Skilled & Professional Team",
              "Timely Project Execution",
              "Long-Term Client Relationships",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-4 bg-white rounded shadow-sm">
                <FaCheckCircle className="text-[#2FA4E7] mt-1 shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-[#0B4F8A] p-12 rounded-xl text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Get in touch with Avdesh Glass House for expert glass & aluminium solutions.
            </p>

            <a
              href="tel:09971158340"
              className="inline-block mt-8 bg-[#2FA4E7] text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-[#0B4F8A] transition shadow-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
