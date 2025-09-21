"use client";

import { Playfair_Display } from "next/font/google";
import { useTheme } from "next-themes";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative h-screen flex items-center overflow-hidden transition-colors duration-500
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
        }`}
    >
      {/* Background Image Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500
          ${theme === "dark" ? "bg-[url('/hero_background_1.svg')] opacity-20" : "bg-[url('/image.png')] opacity-10"}`}
      ></div>

      <div
        className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500
          ${theme === "dark" ? "bg-[url('/hero_background_2.svg')] opacity-20" : "bg-[url('/image.png')] opacity-10"}`}
      ></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 flex flex-col items-center justify-center text-center transition-colors duration-500">
        
        {/* Heading */}
        <h1
          className={`${playfair.className} text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span
            className={`text-transparent bg-clip-text ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"
            }`}
          >
            Master Trading
          </span>{" "}
          <br />
          with Precision
        </h1>

        {/* Paragraph */}
        <p
          className={`text-lg md:text-2xl mb-6 font-serif italic tracking-wide transition-colors duration-500 ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Learn price action, supply & demand, and smart trading strategies with{" "}
          <span
            className={`font-bold text-transparent bg-clip-text ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            }`}
          >
            Stoic Pips Academy
          </span>.
        </p>

        {/* CTA */}
        <a
          href="#mentorship"
          className={`px-8 py-4 rounded-2xl font-semibold text-white shadow-lg transition-all
            ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-400 to-pink-500 hover:opacity-90"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
            }`}
        >
          Join Mentorship
        </a>
      </div>
    </section>
  );
}
