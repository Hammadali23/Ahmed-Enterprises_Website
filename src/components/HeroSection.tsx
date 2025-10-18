"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "/slide1.jpg",
    "/slide2.jpeg",
    "/sss.jpg",
    "/slide4.png",
    "/slide5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white mt-28 lg:mt-16">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Slider Images Container */}
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                zIndex: index === currentSlide ? 2 : 1,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-12 z-30 bg-red-600 hover:bg-red-700 p-4 rounded-lg text-white transition-all duration-300 border-2 border-white/20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-12 z-30 bg-red-600 hover:bg-red-700 p-4 rounded-lg text-white transition-all duration-300 border-2 border-white/20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 border-2 ${
                index === currentSlide
                  ? "bg-red-600 w-12 border-red-600"
                  : "bg-white/40 w-3 border-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-6 md:px-10 max-w-5xl">
          <div className="mb-6">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4 tracking-wider">
              PAKISTAN'S TRUSTED HVAC PARTNER
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            AHMED ENTERPRISES
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed font-light">
            Engineering Climate Control Excellence Since 2003
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-gray-300">
            Delivering comprehensive HVAC & Refrigeration solutions with unmatched expertise, 
            precision engineering, and nationwide service coverage across Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/about"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl border-2 border-red-600"
            >
              Explore Our Services
            </a>
            <a
              href="/contactus"
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-lg border-2 border-white transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">20+</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">500+</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">24/7</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Support Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">100%</h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              Industry Leaders in HVAC Solutions
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="font-bold text-black">Ahmed Enterprises</span> has established itself 
                as Pakistan's premier HVAC & Refrigeration service provider, bringing over two decades 
                of technical excellence and innovation to the industry.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We specialize in complete end-to-end solutions including system design, professional 
                installation, preventive maintenance, emergency repairs, and genuine spare parts supply. 
                Our commitment to quality and customer satisfaction has made us the preferred choice 
                for commercial, industrial, and residential clients nationwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With strategically located offices in <span className="font-semibold text-black">Karachi</span> and <span className="font-semibold text-black">Lahore</span>, 
                our team of certified engineers and skilled technicians ensures prompt service delivery 
                and technical support across Pakistan, maintaining the highest standards of professionalism 
                and workmanship.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Technical Excellence</h4>
                    <p className="text-gray-400 text-sm">Certified professionals with extensive industry expertise</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-gray-400 text-sm">Premium components and rigorous testing protocols</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Customer Focus</h4>
                    <p className="text-gray-400 text-sm">Tailored solutions meeting specific client requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Reliability</h4>
                    <p className="text-gray-400 text-sm">Consistent performance and long-term support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
              Why Choose Ahmed Enterprises?
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We deliver comprehensive HVAC solutions backed by experience, expertise, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">24/7 Emergency Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock technical assistance and emergency repair services available 
                365 days a year. Our rapid response team ensures minimal downtime for your 
                critical HVAC systems, anywhere in Pakistan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Certified Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our highly qualified engineers and technicians hold international certifications 
                and undergo continuous training. We bring decades of combined experience to every 
                project, ensuring superior workmanship and optimal system performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Nationwide Coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                Extensive service network covering all major cities and regions across Pakistan. 
                From Karachi to Islamabad, Lahore to Peshawar, we deliver consistent quality 
                and reliable service with efficient project management and timely execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Genuine Parts & Warranty</h3>
              <p className="text-gray-600 leading-relaxed">
                We stock and supply only authentic OEM spare parts from authorized distributors. 
                All installations and repairs come with comprehensive warranty coverage, giving 
                you complete peace of mind and long-term reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Energy Efficient Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Our systems are designed for optimal energy efficiency, reducing operational 
                costs while maintaining peak performance. We help you achieve significant 
                savings on electricity bills through smart HVAC design and implementation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Preventive Maintenance Plans</h3>
              <p className="text-gray-600 leading-relaxed">
                Customized maintenance contracts ensure your HVAC systems operate at maximum 
                efficiency year-round. Regular inspections, cleaning, and tune-ups extend 
                equipment life and prevent costly breakdowns before they occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Complete HVAC & Refrigeration Solutions
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">System Design & Installation</h3>
              <p className="text-gray-400 text-sm">Custom HVAC design and professional installation for all applications</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">Maintenance & Repair</h3>
              <p className="text-gray-400 text-sm">Comprehensive maintenance programs and emergency repair services</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">Refrigeration Systems</h3>
              <p className="text-gray-400 text-sm">Cold storage, walk-in coolers, and commercial refrigeration solutions</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold mb-3 text-red-600">Spare Parts Supply</h3>
              <p className="text-gray-400 text-sm">Genuine OEM parts and components with immediate availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-red-600 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner with Pakistan's HVAC Experts
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-10 leading-relaxed">
            Experience unmatched reliability, technical excellence, and professional service. 
            Let Ahmed Enterprises transform your climate control needs into efficient, sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contactus"
              className="bg-black hover:bg-gray-900 text-white font-semibold px-10 py-4 rounded-lg shadow-xl transition-all duration-300 border-2 border-black"
            >
              Request a Quote
            </a>
            <a
              href="/about"
              className="bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-lg border-2 border-white transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}