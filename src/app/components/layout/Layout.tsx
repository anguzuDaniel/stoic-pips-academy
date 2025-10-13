// components/Layout.tsx (or wherever your sub-layout is)
"use client";

import "../../globals.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700">

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
    </div>
  );
}