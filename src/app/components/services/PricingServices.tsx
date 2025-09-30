"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import { services } from "@/data/services";
import { Playfair_Display, Inter } from "next/font/google";
import { Service } from "./Service";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function PricingServices() {
  const { theme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';
  
  const sectionBg = currentTheme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-white via-blue-50 to-purple-50";

  const gradientText = currentTheme === "dark" 
    ? "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
    : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600";

  const buttonGradient = currentTheme === "dark"
    ? "bg-gradient-to-r from-purple-500 to-pink-500"
    : "bg-gradient-to-r from-blue-500 to-purple-600";

  const servicesArray: Service[] = Object.entries(services).map(([id, service]) => ({
    id, 
    ...service,
  }));

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-2xl max-w-md mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-xl max-w-2xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-0 rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-gray-600">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/80 dark:bg-gray-800/80 p-8 border-r-2 border-gray-300 dark:border-gray-600 last:border-r-0 animate-pulse">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-1/2 mx-auto mb-8"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          currentTheme === "dark" ? "bg-pink-500" : "bg-purple-400"
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Section Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${
            currentTheme === "dark"
              ? "border-purple-500/30 bg-purple-500/10 text-purple-200"
              : "border-blue-500/30 bg-blue-500/10 text-blue-700"
          }`}>
            <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
            <span className={`text-sm font-medium ${inter.className}`}>Pricing Plans</span>
          </div>
          
          {/* Main Heading */}
          <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            currentTheme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Choose Your{" "}
            <span className={`bg-clip-text text-transparent ${gradientText}`}>
              Trading Plan
            </span>
          </h1>
          
          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${inter.className} ${
            currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Select the perfect mentorship program to accelerate your trading journey and achieve consistent profitability.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative">
          {/* Main Container */}
          <div className={`
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 rounded-3xl overflow-hidden border-2 backdrop-blur-sm
            ${currentTheme === "dark" 
              ? "border-gray-700 bg-gray-800/50 shadow-2xl" 
              : "border-gray-200 bg-white/80 shadow-2xl"
            }
          `}>
            {servicesArray.map((service, index) => {
              const isHovered = hoveredCard === service.id;
              const isLast = index === servicesArray.length - 1;
              
              return (
                <div
                  key={service.id}
                  className={`
                    relative group transition-all duration-500 ease-out
                    ${isHovered ? 'scale-105 z-10' : ''}
                    ${!isLast ? `
                      ${currentTheme === "dark" 
                        ? "border-r-2 border-gray-700" 
                        : "border-r-2 border-gray-200"
                      }
                    ` : ''}
                    ${currentTheme === "dark"
                      ? "bg-gray-800/50 hover:bg-gray-700/50"
                      : "bg-white/60 hover:bg-white/80"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Hover Gradient Overlay */}
                  {isHovered && (
                    <div className={`absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-500 ${
                      currentTheme === "dark"
                        ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                        : "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    }`} />
                  )}

                  <div className="relative p-8 flex flex-col h-full">
                    {/* Service Header */}
                    <div className="text-center mb-8">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 ${
                        currentTheme === "dark"
                          ? "bg-purple-500/20 border border-purple-500/30"
                          : "bg-blue-500/20 border border-blue-500/30"
                      } ${isHovered ? 'scale-110' : ''}`}>
                          <span className="text-2xl">
                            {service.icon ? <service.icon size={24} color={service.iconColor} /> : "🚀"}
                          </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${inter.className} ${
                        isHovered 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                          : currentTheme === "dark" ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${
                        currentTheme === "dark" ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      {service.originalPrice && (
                        <p className={`text-sm line-through mb-2 transition-colors duration-300 ${inter.className} ${
                          currentTheme === "dark" ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {service.originalPrice}
                        </p>
                      )}
                      <p className={`text-3xl font-bold transition-all duration-300 ${inter.className} ${
                        isHovered 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 scale-110'
                          : currentTheme === "dark" ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.price}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                          >
                            <span className={`text-lg flex-shrink-0 ${
                              currentTheme === "dark" ? "text-purple-400" : "text-blue-500"
                            }`}>✓</span>
                            <span className={`text-sm leading-relaxed transition-colors duration-300 ${inter.className} ${
                              currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => router.push(`/get-started/${service.id}`)}
                      className={`
                        w-full py-3 font-semibold rounded-2xl transition-all duration-300 transform border-2
                        ${isHovered 
                          ? 'shadow-lg scale-105' 
                          : ''
                        } text-white ${buttonGradient} hover:shadow-xl
                      `}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border max-w-2xl mx-auto ${
            currentTheme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          }`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${inter.className} ${
                currentTheme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Start Your Trading Transformation Today
              </h3>
              <p className={`${inter.className} ${
                currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
                Join 2,000+ successful traders with our proven mentorship programs.
              </p>
            </div>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 ${buttonGradient}`}
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}