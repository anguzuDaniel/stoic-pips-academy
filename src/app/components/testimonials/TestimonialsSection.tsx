"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { testimonials } from "./testimonials";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function TestimonialsSection() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      id="testimonials"
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          theme === "dark" ? "bg-purple-500" : "bg-blue-400"
        }`} />
        <div className={`absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
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
            <span className={`text-sm font-medium ${inter.className}`}>Success Stories</span>
          </div>

          {/* Main Heading */}
          <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${headingColor}`}>
            Transforming{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === "dark"
                ? "from-purple-400 via-pink-400 to-red-400"
                : "from-blue-600 via-purple-600 to-pink-600"
            }`}>
              Lives
            </span>{" "}
            Through Trading
          </h2>

          {/* Subheading */}
          <p className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${textColor} ${inter.className}`}>
            Join thousands of traders who transformed their results and achieved financial 
            freedom with our proven mentorship programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 backdrop-blur-sm border-2 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50"
                  : "bg-white/80 border-gray-200 hover:border-blue-500/50"
              } shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center ${
                theme === "dark" 
                  ? "bg-purple-500 text-white" 
                  : "bg-blue-500 text-white"
              }`}>
                <span className="text-lg">"</span>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-lg leading-relaxed mb-6 italic ${textColor} ${inter.className}`}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 ${
                    theme === "dark" ? "border-gray-800" : "border-white"
                  } ${
                    testimonial.role.includes('Professional') ? 'bg-green-500' :
                    testimonial.role.includes('Beginner') ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`} />
                </div>
                <div className="text-left flex-1">
                  <h3 className={`font-bold text-lg ${headingColor}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-purple-300" : "text-blue-600"} font-medium`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                  : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gray-800/50 border-gray-700"
              : "bg-white/50 border-gray-200"
          } shadow-2xl max-w-2xl mx-auto`}>
            <div className="text-left">
              <h3 className={`text-xl font-bold mb-2 ${headingColor} ${inter.className}`}>
                Ready to Write Your Success Story?
              </h3>
              <p className={`${textColor} ${inter.className}`}>
                Join our community of successful traders and start your transformation today.
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
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}