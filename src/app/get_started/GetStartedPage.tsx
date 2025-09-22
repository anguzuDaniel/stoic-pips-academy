"use client";

import { useTheme } from "next-themes";
import Button from "@/app/components/Button";

interface Service {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
}

export default function GetStartedPage({ service }: { service: Service }) {
  const { theme } = useTheme();

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
          {service.title}
        </h1>
        <p className={`mb-6 ${textColor}`}>{service.description}</p>

        <ul className={`space-y-3 mb-8 ${textColor}`}>
          {service.features.map((feature, idx) => (
            <li key={idx}>✅ {feature}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between mb-8">
          {service.originalPrice && (
            <span className={`line-through ${textColor}`}>
              {service.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-blue-500">
            {service.price}
          </span>
        </div>

        <Button
          onClick={() => alert(`Redirect to payment for ${service.title}`)}
          className="w-full"
        >
          Proceed to Payment
        </Button>
      </div>
    </section>
  );
}
