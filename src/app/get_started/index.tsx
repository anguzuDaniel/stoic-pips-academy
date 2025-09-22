"use client";

import { useTheme } from "next-themes";
import Button from "@/app/components/Button";

export default function GetStartedPage() {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800/80 border border-gray-700"
      : "bg-white/80 border border-gray-200";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div
        className={`max-w-2xl w-full rounded-2xl shadow-lg p-10 backdrop-blur-md ${cardBg}`}
      >
        {/* Heading */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 text-center ${headingColor}`}
        >
          Get Started with Stoic Pips Academy
        </h1>
        <p className={`mb-8 text-center ${textColor}`}>
          Choose your plan below and start your trading journey with us.  
          You’ll gain access to mentorship, signals, and premium learning materials.
        </p>

        {/* Pricing Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Mentorship Program</h2>
          <p className="mb-6 text-lg">
            Lifetime access to strategies, mentorship, and signals.
          </p>
          <p className="text-4xl font-extrabold mb-6">$99</p>

          {/* Payment Button (replace with real checkout) */}
          <form action="/api/checkout" method="POST">
            <Button type="submit" className="w-full">
              Proceed to Payment
            </Button>
          </form>
        </div>

        {/* Alternative info */}
        <p className={`text-sm mt-6 text-center ${textColor}`}>
          Secure payment powered by Stripe/PayPal.  
          You’ll be redirected to checkout.
        </p>
      </div>
    </section>
  );
}
