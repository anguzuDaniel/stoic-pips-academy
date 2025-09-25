"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const bodyBackground = theme === "dark"
    ? "bg-gray-700 bg-opacity-90"   // dark mode: deep gray with slight transparency
    : "bg-stone-50 bg-opacity-95"; // light mode: soft, slightly warm white


  return <div className={`min-h-screen flex flex-col ${bodyBackground} transition-colors duration-500`}>{children}</div>;
}
