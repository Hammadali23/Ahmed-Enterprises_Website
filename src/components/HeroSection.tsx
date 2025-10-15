"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const sliderImages = [
    "/sss.jpg",
    "/danfoss.jpeg",
    "/services.jpeg",
    "/expert.jpg"
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-red-900">
        
        {/* Slider Images Container */}
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                zIndex: 1
              }}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
          
          
          <div className="absolute inset-0 bg-red-900 bg-opacity-60" style={{ zIndex: 2 }}></div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 z-30 hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 z-30  hover:bg-opacity-40 text-white p-4 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-10"
                  : "bg-white bg-opacity-50 w-3 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Ahmed Enterprises
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed drop-shadow-md">
            Your trusted partner for HVAC & Refrigeration solutions — combining
            innovation, expertise, and reliability for over 20 years across
            Pakistan.
          </p>
          <Link
            href="/about"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          With a legacy of excellence, <span className="font-semibold">Ahmed Enterprises</span> stands as a leading HVAC&R
          service provider in Pakistan. We offer installation, maintenance, and
          spare parts under one roof. With offices in Karachi and Lahore, our
          dedicated engineers and technicians ensure quality, reliability, and
          satisfaction every step of the way.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-8">
          Why Choose Ahmed Enterprises?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Image
              src="/24.jpg"
              alt="24/7 Support"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Always available for your service — any time, any day, anywhere in
              Pakistan.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Image
              src="/expert.jpg"
              alt="Expert Team"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Team
            </h3>
            <p className="text-gray-600">
              Our skilled engineers and technicians ensure top-notch quality
              with every project.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition sm:col-span-2 md:col-span-1">
            <Image
              src="/sss.jpg"
              alt="Nationwide Service"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nationwide Service
            </h3>
            <p className="text-gray-600">
              Serving clients all over Pakistan with efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-red-800 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Work with Ahmed Enterprises?
        </h2>
        <p className="mb-6 text-base md:text-lg max-w-2xl mx-auto">
          Let's create comfort and reliability together — get in touch today for
          professional HVAC solutions tailored to your needs.
        </p>
        <Link
          href="/contactus"
          className="inline-block bg-white text-red-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}