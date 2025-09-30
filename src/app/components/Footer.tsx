"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-24 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mb-4 md:mb-0"></div>
            <div className="flex gap-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";
  
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-600";

  const gradientText = theme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  return (
    <footer
      className={`relative border-t ${borderColor} py-12 transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h1 className={`${playfair.className} text-3xl font-bold mb-2 ${textColor}`}>
              Stoic Pips{" "}
              <span className={`bg-clip-text text-transparent ${gradientText}`}>
                Academy
              </span>
            </h1>
            <p className={`text-lg max-w-md ${subTextColor} ${inter.className}`}>
              Transforming traders through disciplined strategies and proven mentorship.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="mailto:info@stoicpips.com"
              className={`group flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "border-purple-500/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20"
                  : "border-blue-500/30 bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
              }`}
            >
              <EnvelopeIcon className="w-5 h-5" />
              <span className={`font-medium ${inter.className}`}>Email Us</span>
            </a>
            
            <a
              href="https://t.me/YourTelegramUsername"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
                  : "border-blue-500/30 bg-blue-500/10 text-blue-700 hover:bg-blue-500/20"
              }`}
            >
              <FaTelegramPlane className="w-5 h-5" />
              <span className={`font-medium ${inter.className}`}>Telegram</span>
            </a>
            
            <a
              href="https://wa.me/YourWhatsAppNumber"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "border-green-500/30 bg-green-500/10 text-green-200 hover:bg-green-500/20"
                  : "border-green-500/30 bg-green-500/10 text-green-700 hover:bg-green-500/20"
              }`}
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className={`font-medium ${inter.className}`}>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/mentorship"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Mentorship
            </a>
            <a
              href="/courses"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Courses
            </a>
            <a
              href="/brokers"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Brokers
            </a>
            <a
              href="/about"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`hover:underline transition-all duration-300 ${subTextColor} ${inter.className}`}
            >
              Contact
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className={`font-bold text-lg ${theme === "dark" ? "text-purple-300" : "text-blue-600"}`}>
                2K+
              </div>
              <div className={subTextColor}>Traders</div>
            </div>
            <div className="text-center">
              <div className={`font-bold text-lg ${theme === "dark" ? "text-pink-300" : "text-purple-600"}`}>
                95%
              </div>
              <div className={subTextColor}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center pt-6 border-t border-gray-200 dark:border-gray-700 ${subTextColor} ${inter.className}`}>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Stoic Pips Academy. All rights reserved.{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              Transforming traders, building legacies.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}