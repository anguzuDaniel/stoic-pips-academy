"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BackgroundOverlay from "./BackgroundOverlay";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function AboutSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 bg-white dark:bg-gray-800 animate-pulse">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 h-80 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black" 
    : "bg-gradient-to-br from-white via-gray-50 to-blue-50/30";

  return (
    <section
      id="about"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      <BackgroundOverlay />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Visual Elements - Trading Metrics */}
          <div className="w-full lg:w-1/2 relative">
            <div className={`relative rounded-3xl p-8 backdrop-blur-sm border ${
              theme === "dark"
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white/50 border-gray-200"
            } shadow-2xl`}>
              
              {/* Animated Chart Container */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-semibold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
                    Trading Progress
                  </span>
                  <span className={`text-sm ${textColor}`}>+84.2%</span>
                </div>
                <div className={`h-2 rounded-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
                  <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 w-3/4 animate-pulse"></div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📈", title: "Price Action", desc: "Master market structure" },
                  { icon: "⚖️", title: "Risk Management", desc: "Protect your capital" },
                  { icon: "🧠", title: "Psychology", desc: "Develop winning mindset" },
                  { icon: "📊", title: "Strategy", desc: "Proven frameworks" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-900/10 to-transparent">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className={`font-semibold ${headingColor}`}>{item.title}</div>
                    <div className={`text-sm ${textColor}`}>{item.desc}</div>
                  </div>
                ))}
              </div>

              {/* Trading Principles */}
              <div className="space-y-4">
                <h4 className={`font-semibold text-lg ${headingColor}`}>Our Principles</h4>
                {[
                  "Price Action Mastery",
                  "Risk Management First",
                  "Disciplined Execution",
                  "Continuous Learning"
                ].map((principle, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      theme === "dark" ? "bg-purple-400" : "bg-blue-500"
                    }`}></div>
                    <span className={textColor}>{principle}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Chart Line */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <path d="M0,20 L15,15 L30,25 L45,10 L60,30" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Floating elements */}
            <div className={`absolute -top-4 -left-4 w-20 h-20 rounded-full blur-xl opacity-20 ${
              theme === "dark" ? "bg-purple-500" : "bg-blue-400"
            }`}></div>
            <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full blur-xl opacity-20 ${
              theme === "dark" ? "bg-pink-500" : "bg-purple-400"
            }`}></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Section Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${
              theme === "dark"
                ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
                : "border-blue-500/30 bg-blue-500/10 text-blue-700"
            }`}>
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className={`text-sm font-medium ${inter.className}`}>Our Story</span>
            </div>

            {/* Heading */}
            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${headingColor}`}>
              Transforming{" "}
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                theme === "dark"
                  ? "from-purple-400 via-pink-400 to-red-400"
                  : "from-blue-600 via-purple-600 to-pink-600"
              }`}>
                Traders
              </span>{" "}
              Into Masters
            </h2>

            {/* Content */}
            <div className={`space-y-6 text-lg leading-relaxed ${textColor} ${inter.className}`}>
              <p>
                At <span className={`font-semibold ${
                  theme === "dark" ? "text-purple-300" : "text-blue-600"
                }`}>Stoic Pips Academy</span>, we transform beginners into consistently profitable traders through mastery of institutional trading strategies.
              </p>

              <p>
                Founded by <span className={`font-semibold ${
                  theme === "dark" ? "text-pink-300" : "text-purple-600"
                }`}>Anguzu Daniel</span>, our philosophy centers on <span className="italic">discipline, mindset, and strategy</span>—the essential foundation for sustainable trading success.
              </p>

              <div className={`p-6 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/50 border-gray-200"
              }`}>
                <p className={`font-semibold text-lg ${
                  theme === "dark" ? "text-purple-200" : "text-purple-700"
                }`}>
                  "Master the market by first mastering yourself. Discipline is the bridge between goals and accomplishment."
                </p>
                <p className={`text-sm mt-2 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  — Anguzu Daniel, Founder
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { number: "2K+", label: "Traders Educated" },
                { number: "95%", label: "Success Rate" },
                { number: "4.9", label: "Rating" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${
                    theme === "dark" ? "text-purple-300" : "text-blue-600"
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}