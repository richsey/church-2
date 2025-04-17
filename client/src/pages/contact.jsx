import React from "react";

function Contact() {
  return (
    <div className="text-center p-2 text-white bg-gradient-to-r from-blue-500 to-red-500 min-h-screen flex flex-col items-center">
      {/* Google Maps */}
      <div className="w-full max-w-4xl aspect-[16/9] px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Find Us Here</h1>
        <iframe
          className="rounded w-full h-[300px] sm:h-[400px] md:h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.802692965362!2d-0.10386362545109243!3d5.596146033245573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8543d93bd323%3A0xf7bbdff5e2973675!2sGlobal%20Evangelical%20Church%2C%20Victory%20Chapel%20Teshie!5e0!3m2!1sen!2sgh!4v1744196155543!5m2!1sen!2sgh"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-10 px-4 sm:px-6 lg:px-20 gap-10 bg-[url('./images/footer-img.png')] mb-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg p-6 text-white ">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 flex-col items-start text-white">
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <div className="mb-4">
            <p className="text-lg flex items-center gap-2">
              <i className="fa-solid fa-phone"></i> +233 123 456 789
            </p>
            <p className="text-lg flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>+233 987 654 321
            </p>
            <p className="text-lg flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>+233 456 789 123
            </p>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-bold">Email Us</p>
            <p className="text-lg">gec@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Slogan */}
      <div className="mt-10 text-center">
        <p className="text-xl font-bold">VICTORY CHAPEL, WHERE GOD LIVES</p>
      </div>
    </div>
  );
}

export default Contact;
