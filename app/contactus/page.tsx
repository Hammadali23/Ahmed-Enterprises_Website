"use client";

import { MapPin, Phone, Printer, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Ahmed Enterprises! We will get back to you soon.");
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
         <main className="pt-42"></main>
      <div className="max-w-5xl mx-auto bg-gray-50 shadow-xl rounded-4xl p-8">
        <h1 className="text-3xl font-bold font-serif text-center text-black mb-8">
          📞 Get in Touch with Ahmed Enterprises
        </h1>

        {/* Address Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Address Column */}
          <div>
            <h2 className="text-xl font-semibold text-red-800 mb-4">Our Offices</h2>

            <div className="space-y-5 text-gray-700">
              {/* Karachi */}
              <div>
                <h3 className="font-semibold text-gray-900">Karachi Head Office:</h3>
                <div className="flex items-start gap-3 mt-1">
                  <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                  <p>
                    Office # 104, 1st Floor, Al-Rehman Center, KCHS Block 7&8,
                    Shahrah-e-Faisal, Karachi – 75400
                  </p>
                </div>
              </div>

              {/* Lahore */}
              <div>
                <h3 className="font-semibold text-gray-900">Lahore Office:</h3>
                <div className="flex items-start gap-3 mt-1">
                  <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                  <p>3-F, Raja Chambers, Queens Road, Mozang Chungi, Lahore-Pakistan.</p>
                </div>
              </div>

              {/* Workshop */}
              <div>
                <h3 className="font-semibold text-gray-900">Workshop:</h3>
                <div className="flex items-start gap-3 mt-1">
                  <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                  <p>Manga Mandi Bypass, Multan Road, Lahore.</p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="pt-3">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-green-500" />
                  <p>
                    <strong>Tel:</strong> 021-32351552-53
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-gray-500" />
                  <p>
                    <strong>Fax:</strong> 021-32351552
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div>
            <h2 className="text-xl font-semibold text-red-800 mb-4">Send Us a Message</h2>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-xl p-6 shadow-inner space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-900 transition-all"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Ahmed Enterprises | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
