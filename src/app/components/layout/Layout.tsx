"use client";

import { ThemeProvider, useTheme } from "next-themes";
import "../../globals.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";
import { Providers } from "../provider/providers";

export default function Layout({ children }: LayoutProps) {
  return (
    <Providers>
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
    </Providers>
  );
}