"use client";

import { ThemeProvider } from "next-themes";
import "../../globals.css";
import Footer from "../Footer";
import { PageWrapper } from "./PageWrapper";
import LayoutProps from "./LayoutProps";
import { Providers } from "../provider/providers";

export default function SubPageLayout({ children }: LayoutProps) {
  return (
    <Providers>
      <PageWrapper>
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </PageWrapper>
    </Providers>
  );
}