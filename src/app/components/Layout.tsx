"use client";

import { ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import "../globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <PageWrapper>
        <header className="fixed w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}

export function PageWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const bgColor = theme === "dark"
    ? "bg-gray-700" // Dark mode background
    : "bg-white";   // Light mode background

  return <div className={`min-h-screen flex flex-col ${bgColor} transition-colors duration-500`}>{children}</div>;
}
