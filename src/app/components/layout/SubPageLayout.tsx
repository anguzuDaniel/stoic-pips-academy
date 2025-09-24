"use client";

import { ThemeProvider } from "next-themes";
import "../../globals.css";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";


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