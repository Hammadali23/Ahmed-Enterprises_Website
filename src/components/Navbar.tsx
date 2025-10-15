"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Contact us", href: "/contactus" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-300 text-red-600 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ahmed Enterprises Logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-end">
          <div className="flex space-x-8 mb-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`transition-transform duration-200 hover:scale-110 ${
                  active === link.name
                    ? "scale-110 font-semibold text-red-500"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info - One Line with Icons */}
          <div className="flex items-center space-x-3 text-sm text-gray-700 mt-2">
            <div className="flex items-center space-x-1">
              <Phone size={16} className="text-blue-700" />
              <a
                href="tel:+922134321552"
                className="hover:underline text-blue-700"
              >
                +92 21 34321552
              </a>
            </div>
            <span className="text-gray-500">|</span>
            <div className="flex items-center space-x-1">
              <Mail size={16} className="text-blue-700" />
              <a
                href="mailto:info@ahmad-ent.com"
                className="hover:underline text-blue-700"
              >
                info@ahmad-ent.com
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-red-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 flex flex-col items-center py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setIsOpen(false);
              }}
              className={`transition-transform duration-200 hover:scale-110 ${
                active === link.name
                  ? "scale-110 font-semibold text-blue-600"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Contact Info */}
          <div className="flex flex-col items-center text-gray-700 text-sm mt-3 space-y-1">
            <div className="flex items-center space-x-1">
              <Phone size={16} className="text-blue-700" />
              <a
                href="tel:+922134321552"
                className="hover:underline text-blue-700"
              >
                +92 21 34321552
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={16} className="text-blue-700" />
              <a
                href="mailto:info@ahmad-ent.com"
                className="hover:underline text-blue-700"
              >
                info@ahmad-ent.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
