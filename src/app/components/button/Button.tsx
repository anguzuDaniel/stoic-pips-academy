"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { ButtonProps } from "./ButtonProps";

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  href,
}: ButtonProps) {
  const { theme } = useTheme();

  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
      : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300";

  const textColor = "text-white";

  const baseClasses = `px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${bgGradient} ${textColor} hover:opacity-90 ${className}`;

  // ✅ if href is provided, render a link
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
