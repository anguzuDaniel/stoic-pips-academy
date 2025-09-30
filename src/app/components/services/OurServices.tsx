"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ServiceCard from "./card/ServiceCard";
import { services } from "./services";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OurServices() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-20 bg-white dark:bg-gray-800 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const sectionBg = theme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50/20 to-purple-50/10";
  
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <section
      id="services"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900/5 dark:to-gray-900/10" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            theme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>What We Offer</span>
          </div>

          {/* Main Heading */}
          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
            Transform Your{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === "dark"
                ? "from-purple-400 via-pink-400 to-red-400"
                : "from-blue-600 via-purple-600 to-pink-600"
            }`}>
              Trading Journey
            </span>
          </h2>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${textColor} ${inter.className}`}>
            Comprehensive trading education designed to take you from beginner to consistently 
            profitable trader with proven strategies and personalized mentorship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          } shadow-2xl`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${headingColor} ${inter.className}`}>
                Ready to Start Your Trading Success?
              </h3>
              <p className={`${textColor} ${inter.className}`}>
                Join 2,000+ traders who transformed their results with our proven methods.
              </p>
            </div>
            <a
              href="/mentorship"
              className={`px-8 py-3 rounded-2xl font-semibold text-white whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/25"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-blue-500/25"
              }`}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}