"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Button from "../components/button/Button";
import WhyJoinAccordion from "./program/WhyJoinProgram";
import SubPageLayout from "../components/layout/SubPageLayout";
import Curiculum from "./curriculum/Curriculum";

export default function MentorshipPage() {
  const { theme } = useTheme();
  const router = useRouter();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800/80 border border-gray-700"
      : "bg-white shadow-md border border-gray-200";

  return (
    <SubPageLayout>
        <section
        className={`min-h-screen px-6 py-20 ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
        >
        <div className="max-w-4xl mx-auto space-y-16">
            {/* Hero */}
            <div className="text-center">
            <h1 className={`text-5xl font-bold mb-4 ${headingColor}`}>
                Stoic Pips Mentorship Program
            </h1>
            <p className={`text-lg ${textColor} max-w-2xl mx-auto`}>
                Learn how to trade Synthetic Indices & Forex with price action, supply & demand, and proven strategies. 
                From beginner to pro — I’ll guide you step by step until you can trade with confidence.
            </p>
            </div>

            <WhyJoinAccordion
                headingColor={headingColor}
                textColor={textColor}
                cardBg={cardBg}
                />

            <Curiculum />

            {/* Testimonials (mock for now) */}
            <div>
            <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
                Student Results
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl ${cardBg}`}>
                <p className={textColor}>
                    "I used to blow accounts, but now I trade with discipline and 
                    patience. I made my first 20% month thanks to this mentorship."
                </p>
                <p className="mt-3 font-bold text-blue-500">– Brian, Student</p>
                </div>
                <div className={`p-6 rounded-2xl ${cardBg}`}>
                <p className={textColor}>
                    "Daniel’s mentorship gave me clarity on supply & demand. 
                    I now wait for quality setups and avoid overtrading."
                </p>
                <p className="mt-3 font-bold text-blue-500">– Sarah, Student</p>
                </div>
            </div>
            </div>

            {/* Pricing */}
            <div className={`rounded-3xl p-10 text-center ${cardBg}`}>
            <h2 className={`text-3xl font-bold mb-4 ${headingColor}`}>
                Program Pricing
            </h2>
            <p className={`mb-6 ${textColor}`}>
                One-time payment — lifetime access to all mentorship sessions, materials, and community.
            </p>
            <p className="text-4xl font-bold text-blue-500 mb-8">$199</p>

            <Button
                onClick={() => router.push("/checkout/mentorship")}
                className="w-full md:w-auto"
            >
                Enroll Now
            </Button>
            </div>
        </div>
        </section>
    </SubPageLayout>
  );
}
