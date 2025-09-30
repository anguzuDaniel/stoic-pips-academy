"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BackgroundOverlay from "./BackgroundOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
    );
  }

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-700
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20"
        }`}
    >
      {/* Animated Background Elements */}
      <BackgroundOverlay />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float ${
          theme === "dark" 
            ? "bg-purple-600/30" 
            : "bg-blue-400/20"
        }`} />
        <div className={`absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float-delayed ${
          theme === "dark" 
            ? "bg-pink-600/20" 
            : "bg-purple-400/20"
        }`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 xl:px-12 flex flex-col items-center text-center">
        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-tight lg:leading-tight`}>
            <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${
              theme === "dark"
                ? "from-purple-200 via-pink-300 to-red-300"
                : "from-gray-800 via-blue-700 to-purple-700"
            }`}>
              Master
            </span>
            <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${
              theme === "dark"
                ? "from-purple-400 via-pink-500 to-red-500"
                : "from-blue-600 via-purple-600 to-pink-600"
            } animate-gradient`}>
              Trading
            </span>
            <span className={`block ${theme === "dark" ? "text-white" : "text-gray-900"} mt-2`}>
              with Precision
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className={`${inter.className} text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed tracking-normal ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Learn professional{" "}
          <span className={`font-semibold bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-300 to-pink-300"
              : "bg-gradient-to-r from-blue-600 to-purple-600"
          }`}>
            price action
          </span>
          ,{" "}
          <span className={`font-semibold bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-pink-300 to-red-300"
              : "bg-gradient-to-r from-purple-600 to-pink-600"
          }`}>
            supply & demand
          </span>
          , and institutional trading strategies with{" "}
          <span className={`font-bold italic bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
              : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          }`}>
            Stoic Pips Academy
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="/mentorship"
            className={`group relative px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="/courses"
            className={`group px-8 py-4 rounded-2xl font-semibold border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "border-purple-500/50 text-purple-200 bg-purple-500/10 hover:bg-purple-500/20"
                : "border-blue-500/50 text-blue-700 bg-blue-500/10 hover:bg-blue-500/20"
            }`}
          >
            Explore Courses
          </a>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto ${inter.className}`}>
          {[
            { value: "2,000+", label: "Traders Educated" },
            { value: "4.9/5", label: "Success Rating" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          theme === "dark" ? "border-gray-400" : "border-gray-600"
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
            theme === "dark" ? "bg-gray-400" : "bg-gray-600"
          }`} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}