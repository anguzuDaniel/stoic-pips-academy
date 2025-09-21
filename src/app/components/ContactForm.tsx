"use client";

import { useTheme } from "next-themes";
import Button from "./Button";

export default function ContactForm() {
  const { theme } = useTheme();

  const inputBg = theme === "dark" ? "bg-white/5" : "bg-white/30"; // soft glassy white
  const borderColor = theme === "dark" ? "border-white/20" : "border-gray-200";
  const inputText = theme === "dark" ? "text-white" : "text-gray-900";
  const inputPlaceholder = theme === "dark" ? "placeholder-gray-300" : "placeholder-gray-600";

  return (
    <form className="flex flex-col space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md transition-colors duration-300`}
      />
      <input
        type="email"
        placeholder="Your Email"
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md transition-colors duration-300`}
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} 
                   focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-md resize-none transition-colors duration-300`}
      />
    
        <Button className="w-full mt-4">Send Message</Button>
    </form>
  );
}
