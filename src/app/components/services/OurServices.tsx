"use client";

import { useTheme } from "next-themes";
import ServiceCard from "../ServiceCard";
import { services } from "./services";

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
