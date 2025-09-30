"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';

  const sectionBg = currentTheme === "dark" 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
    : "bg-gradient-to-br from-blue-50 via-white to-purple-50";

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="h-12 bg-gray-200 rounded-2xl max-w-md mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-xl max-w-2xl mx-auto mb-16"></div>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl animate-pulse">
            <div className="space-y-4">
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-12 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${sectionBg}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 mb-8">
            <span className="text-lg">💬</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              LET'S CONNECT
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Start Your Journey
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your trading? Let's discuss how we can help you achieve your financial goals.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className={`
          relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl
          ${currentTheme === "dark" 
            ? "bg-gray-800/40 border-gray-700/50 hover:border-gray-600/50 shadow-xl" 
            : "bg-white/60 border-white/30 hover:border-white/50 shadow-2xl"
          }
        `}>
          {/* Decorative Corner Accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg"></div>

          <ContactForm />
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-8 px-8 py-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
            currentTheme === "dark" 
              ? 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50' 
              : 'bg-white/40 border-white/30 hover:bg-white/60'
          }`}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className={`text-sm font-medium ${currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'}`}>
                  support@stoicpips.com
                </p>
                <p className={`text-xs ${currentTheme === "dark" ? 'text-gray-400' : 'text-gray-500'}`}>
                  Email Support
                </p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-400/20"></div>
            
            <div className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <p className={`text-sm font-medium ${currentTheme === "dark" ? 'text-gray-300' : 'text-gray-700'}`}>
                  24-48 Hour Response
                </p>
                <p className={`text-xs ${currentTheme === "dark" ? 'text-gray-400' : 'text-gray-500'}`}>
                  Quick Replies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}