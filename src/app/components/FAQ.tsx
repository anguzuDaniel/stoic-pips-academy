"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-black/20" : "bg-white/30";
  const borderColor = theme === "dark" ? "border-white/10" : "border-gray-300";

  return (
    <section
      id="faq"
      className={`${sectionBg} py-24 px-4 sm:px-6 md:px-8 transition-colors duration-500`}
    >
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 drop-shadow-lg ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        <p className={`max-w-2xl mx-auto ${textColor}`}>
          Here are some common questions our students ask before joining Stoic Pips Academy.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`backdrop-blur-3xl rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border ${borderColor} ${cardBg}`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className={`w-full px-6 py-4 flex justify-between items-center text-left font-semibold focus:outline-none transition-colors duration-300 ${headingColor}`}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 text-blue-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-blue-500" />
              )}
            </button>
            {openIndex === index && (
              <div className={`px-6 pb-4 transition-colors duration-300 ${textColor}`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
