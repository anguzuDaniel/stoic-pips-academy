// components/ThemeDebug.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeDebug() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log('Current theme:', theme);
    console.log('LocalStorage theme:', localStorage.getItem("stoic-pips-theme"));
  }, [theme]);

  return null;
}