"use client";

import { useTheme } from "next-themes";
import Button from "./Button";

export default function PricingServices() {
  const { theme } = useTheme();

  const services = [
    {
      title: "Group Mentorship",
      description: "Structured trading guidance from beginner to pro.",
      price: "$100",
      originalPrice: "$299",
      features: [
        "Zoom Mentorship",
        "Lifetime Access",
        "Price Action Mastery",
        "Supply & Demand Training",
      ],
    },
      {
      title: "1-on-1 Mentorship",
      description: "Structured trading guidance from beginner to pro.",
      price: "$300",
      originalPrice: "$299",
      features: [
        "1-on-1 Mentorship",
        "Signals",
        "Lifetime Access",
        "Price Action Mastery",
        "Supply & Demand Training",
      ],
    },
    {
      title: "Signals",
      description: "High-probability trade signals.",
      price: "$20/Monthly",
      originalPrice: "$50/Monthly",
      features: [
        "Daily Signals",
        "Sythentic indices",
        "Forex Pairs",
        "Risk Management Tips",
        "Telegram Group Access",
      ],
    },
    {
      title: "Account Management",
      description: "We manage your account with professional risk strategies.",
      price: "$500",
      originalPrice: "$699",
      features: [
        "Full Account Management",
        "Low-Risk Strategy",
        "Weekly Reports",
        "Profit Sharing",
      ],
    },
    {
      title: "Robot Building",
      description: "Custom trading robots built for your strategy.",
      price: "$600",
      originalPrice: "$1499",
      features: [
        "Custom Bot Design",
        "Backtested Strategy",
        "Installation Support",
        "Lifetime Updates",
      ],
    },
  ];

  // Colors based on theme
  // const sectionBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const sectionBg = theme === "dark"
    ? "bg-gray-700 bg-opacity-90"   // dark mode: deep gray with slight transparency
    : "bg-stone-50 bg-opacity-95"; // light mode: soft, slightly warm white
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-black/10" : "bg-white/30";
  const borderColor = theme === "dark" ? "border-white/20" : "border-gray-300";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const subTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section
      id="pricing-services"
      className={`${sectionBg} relative py-20 px-4 sm:px-6 md:px-8 transition-colors duration-500`}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 drop-shadow-lg ${headingColor}`}>
          Pricing
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-3xl ${cardBg} backdrop-blur-xl border ${borderColor} shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center`}
            >
              {/* Title & Description */}
              <h3 className={`text-xl font-semibold text-center mb-2 ${textColor}`}>
                {service.title}
              </h3>
              <p className={`text-center mb-4 ${textColor}`}>{service.description}</p>

              {/* Prices */}
              <div className="flex flex-col items-center mb-4">
                <p className={`line-through ${subTextColor}`}>{service.originalPrice}</p>
                <p className={`text-2xl font-bold ${textColor}`}>{service.price}</p>
              </div>

              {/* Features */}
              <ul className={`text-sm space-y-2 mb-6 ${textColor}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button onClick={() => alert("Hello!")}>Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
