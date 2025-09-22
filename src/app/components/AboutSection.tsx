"use client";

import { useTheme } from "next-themes";
import BackgroundOverlay from "./BackgroundOverlay";

export default function AboutSection() {
  const { theme } = useTheme();

  // Dynamic colors
  const headingColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  // const sectionBg = theme === "dark"
  //   ? "bg-gray-700 bg-opacity-90"   // dark mode: deep gray with slight transparency
  //   : "bg-stone-50 bg-opacity-95"; // light mode: soft, slightly warm white
  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";

  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 md:px-8 relative transition-colors duration-500 ${sectionBg}`}
    >
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <BackgroundOverlay />

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/mentorship.jpg"
            alt="Trading"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className={`relative z-10 text-center md:text-left md:w-1/2 transition-colors duration-500`}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg ${headingColor}`}>
            About Stoic Pips Academy
          </h2>
          <p className={`mb-4 drop-shadow-md ${textColor}`}>
            At <span className="font-semibold">Stoic Pips Academy</span>, we help traders move from beginners to consistently profitable by mastering price action, supply & demand, and risk management.
          </p>
          <p className={`drop-shadow-md ${textColor}`}>
            Founded in 2024 by <span className="font-semibold">Anguzu Daniel</span>, we focus on discipline, mindset, and strategy to grow your trading journey.
          </p>
        </div>
      </div>
    </section>
  );
}
