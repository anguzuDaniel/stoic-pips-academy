"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = theme === "dark" ? "text-gray-200" : "text-gray-700"; // softer dark for light mode
  const linkHover = "hover:text-blue-500 transition-colors";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 dark:bg-black/20 backdrop-blur-3xl border-b border-white/20 dark:border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
        {/* {scrolled ? <div></div> : `{${
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="/noise.png"
                  alt="Background Noise"
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
          } }`} */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <h1
            className={`font-bold text-2xl drop-shadow-lg cursor-pointer ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Stoic Pips
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6 font-semibold">
            <Link href="#about" className={`${linkColor} ${linkHover}`}>
              About
            </Link>
            <Link href="#services" className={`${linkColor} ${linkHover}`}>
              Services
            </Link>
            <Link href="#pricing-services" className={`${linkColor} ${linkHover}`}>
              Pricing
            </Link>
            <Link href="#faq" className={`${linkColor} ${linkHover}`}>
              FAQ
            </Link>
            <Link href="#contact" className={`${linkColor} ${linkHover}`}>
              Contact
            </Link>
          </div>

          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${linkColor} md:hidden focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 dark:bg-black/20 backdrop-blur-3xl border-t border-white/20 dark:border-white/10 px-4 py-4 space-y-4 text-center transition-colors duration-300">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className={`${linkColor} ${linkHover} block`}
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className={`${linkColor} ${linkHover} block`}
          >
            Services
          </Link>
          <Link
            href="#pricing-services"
            onClick={() => setIsOpen(false)}
            className={`${linkColor} ${linkHover} block`}
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            onClick={() => setIsOpen(false)}
            className={`${linkColor} ${linkHover} block`}
          >
            FAQ
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`${linkColor} ${linkHover} block`}
          >
            Contact
          </Link>

          <div className="mt-4 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
