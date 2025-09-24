"use client";

import { useTheme } from "next-themes";
import Button from "./button/Button";

export default function ContactForm() {
  const { theme } = useTheme();

  const inputBg =
    theme === "dark" ? "bg-white/5" : "bg-white"; // clean white in light mode
  const borderColor =
    theme === "dark" ? "border-white/20" : "border-gray-300";
  const inputText = theme === "dark" ? "text-white" : "text-gray-900";
  const inputPlaceholder =
    theme === "dark" ? "placeholder-gray-300" : "placeholder-gray-500";
  const shadow = theme === "dark" ? "" : "shadow-sm"; // subtle shadow in light mode

  return (
    <form className="flex flex-col space-y-6">
      <input
        type="text"
        placeholder="Your Name"
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} ${shadow}
                   border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300`}
      />
      <input
        type="email"
        placeholder="Your Email"
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} ${shadow}
                   border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300`}
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className={`rounded-xl px-4 py-3 ${inputBg} ${borderColor} ${inputText} ${inputPlaceholder} ${shadow}
                   border focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-colors duration-300`}
      />

      <Button className="w-full mt-4">Send Message</Button>
    </form>
  );
}
