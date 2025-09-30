"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Button from "./button/Button";

export default function ContactForm() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      {/* Name Field */}
      <div className="group">
        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
          currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`w-full rounded-xl px-4 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105
            ${currentTheme === "dark" 
              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70" 
              : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white"
            }
          `}
          required
        />
      </div>

      {/* Email Field */}
      <div className="group">
        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
          currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full rounded-xl px-4 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105
            ${currentTheme === "dark" 
              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70" 
              : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white"
            }
          `}
          required
        />
      </div>

      {/* Message Field */}
      <div className="group">
        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
          currentTheme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your trading goals and how we can help..."
          rows={6}
          className={`w-full rounded-xl px-4 py-4 border-2 transition-all duration-300 focus:outline-none focus:scale-105 resize-none
            ${currentTheme === "dark" 
              ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70" 
              : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white"
            }
          `}
          required
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit"
        className="w-full py-4 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 mt-6
          bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg"
      >
        <span className="flex items-center justify-center gap-2">
          <span className="text-lg">🚀</span>
          Send Message
        </span>
      </Button>

      {/* Privacy Note */}
      <p className={`text-center text-xs mt-4 transition-colors duration-300 ${
        currentTheme === "dark" ? "text-gray-400" : "text-gray-500"
      }`}>
        Your information is secure. We respect your privacy and never share your data.
      </p>
    </form>
  );
}