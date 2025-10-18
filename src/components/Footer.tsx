"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white font-sans tracking-wide mt-24 pt-6 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ahmed Enterprises
          </h3>
          <p className="text-gray-100 leading-relaxed text-sm">
            A trusted name in HVAC solutions — providing high-quality air
            conditioning systems, spare parts, and expert maintenance services
            across Pakistan.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/40 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="hover:text-yellow-300 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="hover:text-yellow-300 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4 border-b border-white/40 pb-2">
            Contact Info
          </h4>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-300" />
              <span>021-34321552-53</span>
            </li>
            <li className="flex items-center gap-3">
              {/* @ts-ignore */}
              <FaWhatsapp className="text-green-500" size={20} />
              <span>+92 321 2280099</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-300" />
              <span>info@ahmad-ent.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span>Manga Mandi Bypass, Multan Road, Lahore</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://wa.me/923212280099"
              target="_blank"
              className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-gray-100">
        <p>
          © {new Date().getFullYear()} Ahmed Enterprises | HVAC Services — All
          Rights Reserved
        </p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <a
            href="https://my-portfolio--tau.vercel.app/"
            target="_blank"
            className="text-yellow-300 font-semibold hover:underline"
          >
            Hammad Ali
          </a>
        </p>
      </div>
    </footer>
  );
}
