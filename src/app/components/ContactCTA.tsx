"use client";

import { useTheme } from "next-themes";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  const { theme } = useTheme();

  const sectionHeading = theme === "dark" ? "text-white" : "text-gray-800";
  const sectionText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const sectionBg = theme === "dark"
    ? "bg-gray-700 bg-opacity-90"   // dark mode: deep gray with slight transparency
    : "bg-stone-50 bg-opacity-95"; // light mode: soft, slightly warm white
  const formBg = theme === "dark" ? "bg-black/10" : "bg-white/30"; // glassy overlay
  const borderColor = theme === "dark" ? "border-white/10" : "border-gray-300";
  const cardBg = theme === "dark" ? "bg-black/10" : "bg-white/30";

  return (
    <section
      id="contact"
      className={`${sectionBg} relative py-24 px-4 sm:px-6 md:px-8 transition-colors duration-500`}
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className={`text-4xl font-bold mb-4 drop-shadow-lg ${sectionHeading}`}>
          Get in Touch
        </h2>
        <p className={`max-w-2xl mx-auto ${sectionText}`}>
          Ready to start your trading journey or have questions about our services? Fill out the form below and we’ll get back to you promptly.
        </p>
      </div>

      {/* Form */}
      <div
        className={`relative z-10 max-w-2xl mx-auto ${cardBg} backdrop-blur-3xl border ${borderColor} rounded-3xl shadow-xl p-8 transition-colors duration-500`}
      >
        <ContactForm />
      </div>
    </section>
  );
}
