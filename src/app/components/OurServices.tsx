"use client";

import { ElementType } from "react";
import { useTheme } from "next-themes";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: ElementType | null;
  link?: string;
  image?: string;
}

export default function OurServices() {
  const { theme } = useTheme();

  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";

  // Convert services object to array with id
  const servicesArray: Service[] = Object.entries(services).map(([id, service]) => ({
    id,
    ...service,
  }));

  return (
    <section
      id="services"
      className={`py-20 px-4 sm:px-6 md:px-8 relative transition-colors duration-500 ${sectionBg}`}
    >
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg ${headingColor}`}>
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {servicesArray.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
