// src/pages/index.js

import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400,               // Faster fade-in
      easing: 'ease-in-out',       // Smooth in-out
      offset: 50,                  // Trigger sooner
      delay: 0,
      once: true,
      startEvent: 'DOMContentLoaded',
      disableMutationObserver: true,
    });
  }, []);

  

// Then inside the map:
<Image
  src={service.image}
  alt={service.title}
  width={500}  // Adjust as needed
  height={300} // Adjust as needed
  className="w-full h-48 object-cover mb-6 rounded-lg"
/>


  return (
    <>
      <Head>
        <title>We Create Websites | Octarise</title>
        <meta name="description" content="We build and redesign stunning websites for our clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="font-poppins text-gray-800 overflow-x-hidden">

        {/* Navbar Top Bar */}
        <div className="bg-black text-white text-center py-3 px-4 text-base md:text-lg font-medium tracking-wide">
        <p>&quot;Your online presence is the first impression of your business. Let&apos;s make it count.&quot;</p>

        </div>

        {/* Hero Section */}
        <section className="h-screen flex items-center bg-white relative px-6 lg:px-12">
          <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between items-center space-y-12 md:space-y-0">

            {/* Left Side */}
            <div className="md:w-1/2 space-y-6" data-aos="fade-right">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
                Welcome to <span className="text-black-600">Octarise!</span>
              </h1>
              <p className="text-lg md:text-2xl font-light text-gray-600">
                We create stunning websites that engage your audience and elevate your brand.
              </p>
            </div>

            {/* Right Side */}
            <div
              className="md:w-1/2 bg-white rounded-2xl p-8 shadow-2xl overflow-auto max-h-96 "
              data-aos="fade-left"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
                <li>Boost your credibility and professionalism online.</li>
                <li>Stay accessible to customers 24/7 with a digital storefront.</li>
                <li>Expand your reach and increase brand awareness.</li>
                <li>Track and improve using website analytics.</li>
                <li>Build trust and industry authority.</li>
              </ul>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <p className="text-gray-700 font-semibold">Scroll Down ↓</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50" id="services">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800" data-aos="fade-up">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

              {/* Service Card */}
              {[
                {
                  title: "Website Creation",
                  desc: "We create modern, responsive, and user-friendly websites that elevate your brand.",
                  image: "/website-creation.jpg"
                },
                {
                  title: "Website Redesign",
                  desc: "We breathe new life into outdated websites with modern designs and improved performance.",
                  image: "/website-redesign.jpg"
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.03] transition-transform duration-500 ease-in-out
                  "
                  data-aos="fade-up"
                 
                >
                  <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-6 rounded-lg" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white" id="contact">
          <div className="container mx-auto text-center px-4" data-aos="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-6">We’d love to hear about your project and how we can help bring it to life.</p>

            <div className="mb-8 text-gray-700 text-lg space-y-2">
              <p><strong>Email:</strong> <a href="mailto:info@octarise.com" className="text-blue-600 hover:underline">info@octarise.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a></p>
            </div>

            {/* Optional Contact Buttons */}
            {/* <div className="flex justify-center gap-6">
              <a href="tel:+919876543210" className="btn">Call Us</a>
              <a href="mailto:info@octarise.com" className="btn">Email Us</a>
              <a href="https://wa.me/919876543210" className="btn">WhatsApp</a>
            </div> */}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8">
          <div className="container mx-auto text-center text-white px-4">
            <p className="mb-4 text-lg">Follow Us</p>
            <div className="flex justify-center gap-8 mb-6">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Octarise. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
