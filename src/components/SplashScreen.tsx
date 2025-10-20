"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSplash } from "./SplashProvider";

export default function SplashScreen() {
  const { showSplash } = useSplash();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!showSplash) {
      // Fade out animation ke liye
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 100);
      return () => clearTimeout(fadeTimer);
    }
  }, [showSplash]);

  if (!showSplash && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000 ${
        showSplash && isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative animate-fade-in-scale">
        {/* Logo Container with Glow Effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-30 animate-pulse">
            <div className="w-full h-full  rounded-full"></div>
          </div>
          
          {/* Logo */}
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Ahmed Enterprises"
              width={400}
              height={200}
              className="animate-zoom-in drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center mt-6 text-gray-700 text-lg font-light animate-fade-in-up">
          HVAC Excellence. Always.
        </p>
      </div>
    </div>
  );
}