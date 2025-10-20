"use client";

import { Award, Users, Target, Shield, Clock, Wrench, CheckCircle, Building2, X, Snowflake, Wind, Flame, ThermometerSun, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const stats = [
    { number: "20+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Service Support", icon: Clock },
    { number: "2", label: "Major Cities", icon: Building2 },
    { number: "1000+", label: "Projects Done", icon: CheckCircle },
  ];

  const hvacServices = [
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Complete AC installation, repair and maintenance services for residential and commercial spaces.",
    },
    {
      icon: Flame,
      title: "Heating Systems",
      description: "Expert heating solutions including furnace installation, repair and energy-efficient upgrades.",
    },
    {
      icon: Wind,
      title: "Ventilation",
      description: "Professional ventilation systems to ensure optimal air quality and circulation in your space.",
    },
    {
      icon: ThermometerSun,
      title: "Climate Control",
      description: "Advanced climate control systems for perfect temperature management year-round.",
    },
  ];

  const capabilities = [
    "Pre-Sale Consultation & Planning",
    "Custom System Design",
    "Professional Installation",
    "24/7 Emergency Service",
    "Preventive Maintenance",
    "After-Sale Support & Care"
  ];

  const facilities = [
    {
      src: "/standy.jpg",
      title: "Modern Workshop Facility",
      description: "State-of-the-art workshop equipped with latest HVAC tools and technology"
    },
    {
      src: "/standy2.jpg",
      title: "Professional Team in Action",
      description: "Experienced engineers and technicians delivering excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-26">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-red-600 hover:bg-white text-white hover:text-red-600 p-2 sm:p-3 transition-colors rounded-full"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-white text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}></div>
        </div>
        <div className="bg-gray-600 relative max mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-16 mb-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              HVAC & R Service Provider
              <br />
              <span className="text-black">Under One Roof</span>
               <div className="w-64 h-1 bg-red-600 mx-auto mb-4"></div>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed px-4">
              Ahmed Enterprises - 20+ Years of Excellence in Complete Heating, Ventilation & Air Conditioning Solutions
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* HVAC Services Showcase */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-2">
              Our HVAC Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional heating, ventilation, and air conditioning services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {hvacServices.map((service, index) => (
              <div key={index} className="group bg-white border-2 border-gray-200 hover:border-red-600 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 group-hover:bg-black flex items-center justify-center transition-all duration-300">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-black group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3 text-center group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-1 bg-red-600 mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              About <span className="text-red-600">Ahmed Enterprises</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p className="border-l-4 border-red-600 pl-4 sm:pl-6 bg-gray-50 py-3">
                We, Ahmad Enterprises, feel pleasure to present ourselves as <strong className="text-red-600">"HVAC&R Service Provider Under One Roof"</strong>. While manufacturers manufacture equipment to meet any of your unique need, we, Ahmad Enterprises, are available for all kind of Pre-Sale or After-Sale support, throughout Pakistan, 24/7.
              </p>
              <p>
                Ahmad Enterprises Management is honored to have a history of <strong className="text-black">more than 20 years</strong> in HVAC&R field and thus, is known by each and every concerned quarter of this specialized engineering domain.
              </p>
              <p>
                Having corporate offices and workshops in two major cities of Pakistan, i.e., <strong className="text-red-600">Karachi and Lahore</strong>, Ahmed Enterprises is further equipped with a group of dedicated and professional engineers, technicians and other professionals who are always eager to perform.
              </p>
              <p className="bg-black text-white p-4 sm:p-6">
                Ahmad Enterprises, therefore, by virtue of its technical and human resources, is fully capable to <strong className="text-red-600">receive, understand, quote, deliver and after-sale care</strong> for any of your HVAC&R requirement.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-500 p-6 sm:p-8 md:p-10 lg:p-12 text-white h-full shadow-xl">
              <div className="space-y-6 sm:space-y-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Commitment</h3>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  To provide comprehensive HVAC&R solutions with complete pre-sale and after-sale support, backed by over 20 years of experience and a dedicated team of professionals.
                </p>
                <div className="pt-4 sm:pt-6 border-t-2 border-white">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-3">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    Our Presence
                  </h4>
                  <p className="text-base sm:text-lg">
                    With corporate offices and workshops in Karachi and Lahore, we serve clients throughout Pakistan with 24/7 availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Images */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 px-2">
              Our Facilities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 mb-2">
              State-of-the-art infrastructure for excellence
            </p>
            <p className="text-sm sm:text-base text-red-600 font-semibold">
              Click on images to view full screen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-500 border-4 border-gray-200 hover:border-red-600"
                onClick={() => setSelectedImage(facility.src)}
              >
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px]">
                  <img
                    src={facility.src}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center px-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{facility.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">{facility.description}</p>
                      <div className="text-red-600 bg-white px-4 sm:px-6 py-2 sm:py-3 font-bold inline-flex items-center gap-2 text-sm sm:text-base">
                        Click to Expand <span className="text-lg sm:text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="bg-gray-700 p-6 sm:p-10 md:p-12 lg:p-16 text-white mb-16 sm:mb-20 md:mb-24 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-red-600 mb-4 sm:mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Complete HVAC&R Services
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                From initial consultation to ongoing maintenance, we provide complete support throughout your HVAC journey. Our experienced team handles every aspect with professionalism and expertise.
              </p>
              <div className="flex items-center gap-3 border-2 border-red-600 p-3 sm:p-4 bg-red-600">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="font-bold text-sm sm:text-base md:text-lg">Available 24/7 Across Pakistan</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white text-black border-2 border-white hover:border-red-600 hover:bg-red-600 hover:text-white p-4 sm:p-5 flex items-center gap-3 sm:gap-4 transition-all group">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base md:text-lg">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>  
        {/* CTA Section */}
        <div className="bg-gray-400 p-8 sm:p-10 md:p-12 lg:p-16 text-center text-white shadow-xl border-t-4 border-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready for Professional HVAC Service?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
            Let our expert team handle all your HVAC requirements with complete pre-sale and after-sale support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="/contactus"
              className="bg-white text-red-600 px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg hover:bg-black hover:text-white transition-all shadow-xl inline-block transform hover:scale-105"
            >
              Contact Us Today
            </a>
            <a
              href="tel:02134321552"
              className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all border-2 border-white inline-block transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              021-34321552
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}