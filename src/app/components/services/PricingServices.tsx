"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import { services } from "@/data/services";
import { Service } from "./Service";

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
    : "bg-gradient-to-br from-slate-50 via-white to-blue-50/30";

  const servicesArray: Service[] = Object.entries(services).map(([id, service]) => ({
    id, 
    ...service,
  }));

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl max-w-2xl mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-xl max-w-xl mx-auto"></div>
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
    <section className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 mb-8">
            <span className="text-lg">🚀</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              PREMIUM TRADING EDUCATION
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Seamlessly compare our comprehensive trading programs
          </p>
        </div>

        {/* Gapless Cards Container */}
        <div className="relative">
          {/* Main Container with Strong Border */}
          <div className={`
            grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 rounded-2xl overflow-hidden border-2
            ${currentTheme === "dark" 
              ? "border-gray-600 bg-gray-800/30 backdrop-blur-xl shadow-2xl" 
              : "border-gray-300 bg-white/50 backdrop-blur-xl shadow-2xl"
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
                    ${isHovered ? 'scale-105 z-10 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20' : ''}
                    ${!isLast ? `
                      ${currentTheme === "dark" 
                        ? "border-r-2 border-gray-600" 
                        : "border-r-2 border-gray-300"
                      }
                    ` : ''}
                    ${currentTheme === "dark"
                      ? "bg-gray-800/40 hover:bg-gray-700/40"
                      : "bg-white/40 hover:bg-white/60"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Service Header */}
                    <div className="text-center mb-8">
                      {/* Original Icon Style */}
                      <div className="text-4xl mb-4">🚀</div>
                      
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isHovered 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                          : currentTheme === "dark" ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        currentTheme === "dark" ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      {service.originalPrice && (
                        <p className={`text-xs line-through mb-2 transition-colors duration-300 ${
                          currentTheme === "dark" ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {service.originalPrice}
                        </p>
                      )}
                      <p className={`text-3xl font-bold transition-all duration-300 ${
                        isHovered 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 scale-110'
                          : currentTheme === "dark" ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.price}
                      </p>
                    </div>

                    {/* Features List - Original Checkmark Style */}
                    <div className="flex-1 mb-8">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 group/item transition-all duration-300 hover:translate-x-1"
                          >
                            {/* Original Checkmark */}
                            <span className="text-green-500 text-lg flex-shrink-0">✅</span>
                            <span className={`text-xs leading-relaxed transition-colors duration-300 ${
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
                        w-full py-3 font-semibold rounded-lg transition-all duration-300 transform border-2
                        ${isHovered 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 shadow-lg scale-105' 
                          : currentTheme === "dark"
                          ? 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                          : 'bg-gray-900 border-gray-800 hover:bg-gray-800'
                        } text-white
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
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-6 px-8 py-4 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 ${
            currentTheme === "dark" 
              ? 'bg-gray-800/50 border-gray-600 hover:bg-gray-800/70' 
              : 'bg-white/50 border-gray-300 hover:bg-white/70'
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className={`text-sm font-medium ${
                currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'
              }`}>
                7-Day Guarantee
              </span>
            </div>
            <div className="w-px h-4 bg-gray-400/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🚀</span>
              <span className={`text-sm font-medium ${
                currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Instant Access
              </span>
            </div>
            <div className="w-px h-4 bg-gray-400/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-purple-500">💼</span>
              <span className={`text-sm font-medium ${
                currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Professional Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}