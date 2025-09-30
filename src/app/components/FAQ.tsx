"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Use resolvedTheme for more reliable theme detection, fallback to light
  const currentTheme = mounted ? (resolvedTheme || theme || 'light') : 'light';
  
  const sectionBg = currentTheme === "dark" ? "bg-gray-900" : "bg-gray-50";
  const headingColor = currentTheme === "dark" ? "text-white" : "text-gray-900";
  const textColor = currentTheme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg = currentTheme === "dark" ? "bg-gray-800/80" : "bg-white";
  const hoverBg = currentTheme === "dark" ? "hover:bg-gray-700/50" : "hover:bg-gray-50";
  const ctaBg = currentTheme === "dark" ? "bg-gray-800" : "bg-white";

  // Show loading state during initial render to avoid flash
  if (!mounted) {
    return (
      <section className="bg-gray-50 py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded-lg max-w-md mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-5 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faq"
      className={`${sectionBg} py-24 px-4 sm:px-6 md:px-8 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${headingColor}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${textColor}`}>
            Everything you need to know about joining Stoic Pips Academy
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`rounded-xl shadow-sm transition-all duration-300 ${cardBg} ${
                openIndex === index ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full px-6 py-5 flex justify-between items-center text-left font-semibold focus:outline-none transition-all duration-300 ${headingColor} ${hoverBg} rounded-xl`}
              >
                <span className="text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 transition-all duration-300">
                  <div className={`text-lg leading-relaxed ${textColor} border-l-4 border-blue-500 pl-4`}>
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        {/* <div className="text-center mt-12">
          <div className={`inline-block rounded-2xl p-8 ${ctaBg} shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-3 ${headingColor}`}>
              Still have questions?
            </h3>
            <p className={`mb-4 ${textColor}`}>
              We&apos;re here to help you get started on your trading journey.
            </p>
            <a
              href="mailto:support@stoicpips.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}