"use client";

import { useTheme } from "next-themes";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function OurServices() {
  const { theme } = useTheme();

  // Dynamic colors based on theme
  const sectionBg = theme === "dark" ? "bg-gray-700" : "bg-white";
  const overlayFrom = theme === "dark" ? "from-black/10" : "from-white/5";
  const overlayTo = theme === "dark" ? "to-black/0" : "to-white/0";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <section
      id="services"
      className={`py-20 px-4 sm:px-6 md:px-8 relative transition-colors duration-500 ${sectionBg}`}
    >
      {/* Optional subtle background overlay
      <div className={`absolute inset-0 bg-gradient-to-b ${overlayFrom} ${overlayTo} pointer-events-none rounded-3xl`}></div> */}

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg ${headingColor}`}>
          Our Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
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
