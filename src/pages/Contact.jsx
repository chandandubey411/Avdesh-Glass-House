import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Get in touch with Avdesh Glass House for expert glass & aluminium solutions.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-primary">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="hidden"
                name="subject"
                value="New Enquiry - Avdesh Glass House"
              />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:border-primary"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-secondary transition"
              >
                Send Message
              </button>

              {result && (
                <p className="text-sm text-center mt-3 text-gray-700">
                  {result}
                </p>
              )}
            </form>
          </div>

          {/* ================= CONTACT DETAILS + MAP ================= */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary">
                Contact Details
              </h2>

              <p className="mt-3 text-gray-700">
                <strong>Address:</strong><br />
                910, Shakti Khand 4, Indirapuram,<br />
                Ghaziabad, Uttar Pradesh 201014
              </p>

              <p className="mt-3 text-gray-700">
                <strong>Phone:</strong><br />
                <a href="tel:+919811811906" className="text-primary">
                  +91 98118 11906
                </a>
              </p>

              <p className="mt-3 text-gray-700">
                <strong>Email:</strong><br />
                avdeshglasshouse@gmail.com
              </p>

              <p className="mt-3 text-gray-700">
                <strong>Working Hours:</strong><br />
                Mon – Sun: 10:00 AM – 7:00 PM <br />
                Tuesday: Closed
              </p>
            </div>

            {/* ================= GOOGLE MAP ================= */}
            <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989494.6287953747!2d75.52381435855291!3d29.663642386378733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbd6585ff0ed%3A0x4461722240ce05fa!2sAvdesh%20Glass%20House!5e0!3m2!1sen!2sin!4v1770147108387!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Avdesh Glass House Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
