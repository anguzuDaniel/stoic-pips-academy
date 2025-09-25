"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Button from "@/app/components/button/Button";
import { Service } from "@/data/Service";

export default function GetStartedPage({
  title,
  description,
  price,
  originalPrice,
  features,
}: Service) {
  const { theme } = useTheme();
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800/80 border border-gray-700"
      : "bg-white shadow-md border border-gray-200";

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method before proceeding.");
      return;
    }
    alert(`Proceeding to payment with ${paymentMethod} for ${title}`);
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className={`max-w-2xl w-full rounded-3xl p-10 ${cardBg}`}>
        {/* Title & Description */}
        <h1 className={`text-4xl font-bold mb-6 ${headingColor}`}>{title}</h1>
        <p className={`mb-6 ${textColor}`}>{description}</p>

        {/* Features */}
        <ul className={`space-y-3 mb-8 ${textColor}`}>
          {features.map((feature: string, idx: number) => (
            <li key={idx}>✅ {feature}</li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-8">
          {originalPrice && (
            <span className={`line-through ${textColor}`}>{originalPrice}</span>
          )}
          <span className="text-3xl font-bold text-blue-500">{price}</span>
        </div>

        {/* Payment Options */}
        <div className="mb-6">
          <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
            Choose Payment Method
          </h2>
          <div className="space-y-3">
            {["Bank Transfer", "Bitcoin", "Airtel Money", "MTN Money"].map(
              (method) => (
                <label
                  key={method}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${
                    theme === "dark"
                      ? "border-gray-700 hover:bg-gray-700/40"
                      : "border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <span className={textColor}>{method}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Confirm Button */}
        <Button onClick={handlePayment} className="w-full">
          Confirm & Pay
        </Button>
      </div>
    </section>
  );
}
