"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 font-sans tracking-wide shadow-inner mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Ahmed Enterprises
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            A trusted name in HVAC solutions — providing high-quality air
            conditioning systems, spare parts, and expert maintenance services
            across Pakistan.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-red-600 transition font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-red-600 transition font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="hover:text-red-600 transition font-medium"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="hover:text-red-600 transition font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Contact Info
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-500" />
              <span>021-34321552-53</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp size={20} color="#22C55E" />
              <span>+92 321 2280099</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <span>info@ahmad-ent.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Manga Mandi Bypass, Multan Road, Lahore</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://wa.me/923212280099"
              target="_blank"
              className="bg-gray-100 text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition shadow-sm"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-gray-100 text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition shadow-sm"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-gray-100 text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition shadow-sm"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600 bg-gray-50">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">
            Ahmed Enterprises
          </span>{" "}
          | HVAC Services — All Rights Reserved
        </p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <a
            href="https://my-portfolio--tau.vercel.app/"
            target="_blank"
            className="text-red-600 font-semibold hover:underline"
          >
            Hammad Ali (Visit Portfolio)
          </a>
        </p>
      </div>
    </footer>
  );
}
