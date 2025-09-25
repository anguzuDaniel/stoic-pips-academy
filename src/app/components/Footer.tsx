"use client";

import { useTheme } from "next-themes";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();

  const bodyBackground = theme === "dark"
    ? "bg-gray-700 bg-opacity-90"
    : "bg-stone-50 bg-opacity-95";
  const bgColor = theme === "dark" ? "bg-black/20" : "bg-white"; // fully white in light mode
  const borderColor = theme === "dark" ? "border-white/10" : "border-gray-200"; // light gray border for white background
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <footer
      className={`${bodyBackground} backdrop-blur-3xl border-t ${borderColor} py-8 mt-24 transition-colors duration-500`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/noise.png"
          alt="Background Noise"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between transition-colors duration-500 ${textColor}`}>
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className={`text-2xl font-bold drop-shadow-lg ${textColor}`}>Stoic Pips Academy</h1>
          <p className={`text-sm mt-1 ${subTextColor}`}>Trading mentorship and resources</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:info@stoicpips.com"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Email
          </a>
          <a
            href="https://t.me/YourTelegramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors"
          >
            <FaTelegramPlane className="w-5 h-5" />
            Telegram
          </a>
          <a
            href="https://wa.me/YourWhatsAppNumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-500 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className={`mt-6 text-center text-sm transition-colors duration-500 ${subTextColor}`}>
        &copy; {new Date().getFullYear()} Stoic Pips Academy. All rights reserved.
      </div>
    </footer>
  );
}
