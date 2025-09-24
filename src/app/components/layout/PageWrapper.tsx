"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const bgColor = theme === "dark"
    ? "bg-gray-700" // Dark mode background
    : "bg-white";   // Light mode background

  return <div className={`min-h-screen flex flex-col ${bgColor} transition-colors duration-500`}>{children}</div>;
}
