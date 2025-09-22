"use client";

import { ElementType } from "react";
import { useTheme } from "next-themes";
import ServiceCard from "./ServiceCard";
import {
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Mentorship Program",
    description: "Step-by-step guidance to take you from beginner to pro trader with price action, supply & demand, and mindset training.",
    link: "/mentorship",
    icon: UserGroupIcon,
  },
  {
    title: "Signals & Bots",
    description: "Get access to high-quality trading signals and market insights delivered directly to your Telegram group.",
    link: "/signals",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Educational Resources",
    description: "Free guides, articles, and resources to sharpen your trading edge and keep you updated with market trends.",
    link: "/resources",
    icon: ComputerDesktopIcon, // represents automation / bots
  },
];


export default function OurServices() {
  const { theme } = useTheme();

  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <section
      id="services"
      className={`py-20 px-4 sm:px-6 md:px-8 relative transition-colors duration-500 ${sectionBg}`}
    >
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg ${headingColor}`}>
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
