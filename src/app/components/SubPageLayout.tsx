"use client";

import { ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import "../globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PageWrapper } from "./Layout";
import { LayoutProps } from "./Layout";


export default function SubPageLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <PageWrapper>
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}