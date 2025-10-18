"use client";

import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  Clock,
  MessageSquare,
  Printer,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Ahmed Enterprises! We'll respond soon.");
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  const telephoneNumber = "021-34321552-53";
  const whatsappNumber = "923212280099";
  const whatsappMessage = encodeURIComponent(
    "Hi Ahmed Enterprises, I'm interested in your HVAC products and services. Please assist me."
  );

  return (
    <div className="min-h-screen bg-white mt-28 font-[Poppins]">
      {/* Hero Section */}
      <div className="bg-red-700 text-white py-16 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions about our HVAC solutions? We’re here to provide the
            best support and reliable cooling solutions for your business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 pb-16">
        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {/* Call Us */}
          <a
            href={`tel:${telephoneNumber}`}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-red-600"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-black mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">{telephoneNumber}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-green-600"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <FaWhatsapp size={24} color="#16a34a" />
              </div>
              <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-600">Chat Now</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@ahmad-ent.com"
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-red-700"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="font-semibold text-black mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">info@ahmad-ent.com</p>
            </div>
          </a>

          {/* Hours */}
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-black">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold text-black mb-1">Working Hours</h3>
              <p className="text-sm text-gray-600">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-red-700" />
                Our Offices
              </h2>

              {/* Office Cards */}
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">
                        Karachi Head Office
                      </h3>
                      <p className="text-sm text-gray-700">
                        Office #104, 1st Floor, Al-Rehman Center, KCHS Block
                        7&8, Shahrah-e-Faisal, Karachi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">
                        Lahore Office
                      </h3>
                      <p className="text-sm text-gray-700">
                        3-F, Raja Chambers, Queens Road, Mozang Chungi, Lahore
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">Workshop</h3>
                      <p className="text-sm text-gray-700">
                        Manga Mandi Bypass, Multan Road, Lahore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-red-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-md font-semibold text-white">Phone</p>
                    <p>{telephoneNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-md font-semibold text-white">Fax</p>
                    <p>021-34321552</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-black" />
                  <div>
                    <p className="text-md font-semibold text-white">Email</p>
                    <p>info@ahmad-ent.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-gray-600">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="+92 300 1234567"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your HVAC requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-900 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmed Enterprises | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
