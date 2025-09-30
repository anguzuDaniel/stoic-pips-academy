"use client";

import { ThemeProvider, useTheme } from "next-themes";
import "../../globals.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";
import { Providers } from "../provider/providers";
import { useEffect, useState } from "react";

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html suppressHydrationWarning>
        <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading Stoic Pips Academy...</p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html suppressHydrationWarning className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">
        <PageWrapper>
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>

            <main className="flex-1">
              {children}
            </main>

            <Footer />
        </PageWrapper>
        
        {/* Global background noise/texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('/noise.png')] bg-repeat mix-blend-overlay"></div>
      </body>
    </html>
  );
}