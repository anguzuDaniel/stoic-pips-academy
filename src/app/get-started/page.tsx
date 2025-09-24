"use client";

import { useTheme } from "next-themes";
import { Service, services } from "@/data/services";
import Button from "@/app/components/Button";

export default function GetStartedPage({  title, description, price, originalPrice, features }: Service) {
  const { theme } = useTheme();

  console.log("Services: " + { title, description, price, originalPrice, features });
  
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800/80 border border-gray-700"
      : "bg-white shadow-md border border-gray-200";

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className={`max-w-2xl w-full rounded-3xl p-10 ${cardBg}`}>
        <h1 className={`text-4xl font-bold mb-6 ${headingColor}`}>
          {title}
        </h1>
        <p className={`mb-6 ${textColor}`}>{description}</p>

        <ul className={`space-y-3 mb-8 ${textColor}`}>
          {features.map((feature: string, idx: number) => (
            <li key={idx}>✅ {feature}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between mb-8">
          {originalPrice && (
            <span className={`line-through ${textColor}`}>
              {originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-blue-500">{price}</span>
        </div>

        <Button onClick={() => alert(`Redirect to payment for ${title}`)} className="w-full">
          Proceed to Payment
        </Button>
      </div>
    </section>
  );
}
