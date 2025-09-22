"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import ContactBackground from "./ContactBackground";
import Button from "./Button";

const brokers = [
  {
    name: "Deriv",
    description: "A reliable broker for synthetic indices and forex trading.",
    image: "/brokers/deriv.png",
    link: "https://partners.deriv.com/rx?ca=1069524e30dbb2&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU32294",
  },
  {
    name: "Exness",
    description: "Trusted forex broker with competitive spreads and fast execution.",
    image: "/brokers/exness.jpeg",
    link: "https://partners.deriv.com/rx?ca=1069524e30dbb2&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU32294",
  },
  {
    name: "Weltrade",
    description: "Trusted broker offering flexible accounts and fast execution.",
    image: "/brokers/weltrade.png",
    link: "https://partners.deriv.com/rx?ca=1069524e30dbb2&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU32294",
  },
];

export default function RecommendedBrokers() {
  const { theme } = useTheme();

  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg = theme === "dark" ? "bg-black/10" : "bg-white/30";
  const borderColor = theme === "dark" ? "border-white/10" : "border-gray-300";
  const bgImage = theme === "dark" ? "/world_light.svg" : "/world_dark.svg";

  return (
    <section
      id="brokers"
      className={`${sectionBg} py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden transition-colors duration-500`}
    >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none transition-all duration-500"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className={`text-4xl font-bold drop-shadow-lg mb-4 ${headingColor}`}>
          Recommended Brokers
        </h2>
        <p className={`max-w-2xl mx-auto ${textColor}`}>
          We only work with trusted brokers that we personally use and recommend. 
          Click below to create your account and start trading.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {brokers.map((broker) => (
          <a
            key={broker.name}
            href={broker.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative rounded-3xl ${cardBg} backdrop-blur-2xl border ${borderColor} shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center overflow-hidden p-6 text-center`}
          >
            {/* Broker Logo */}
            {broker.image && (
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={broker.image}
                  alt={broker.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Name & Description */}
            <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
              {broker.name}
            </h3>
            <p className={`${textColor} mb-4`}>{broker.description}</p>

            <Button>Create Account</Button>
          </a>
        ))}
      </div>
    </section>
  );
}
