"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // for extra custom styling
}

export default function Button({ children, onClick, type = "button", className = "" }: ButtonProps) {
  const { theme } = useTheme();

  // Default colors based on theme
  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
      : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300";

  const textColor = theme === "dark" ? "text-white" : "text-white";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${bgGradient} ${textColor} hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  );
}
