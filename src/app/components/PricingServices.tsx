"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Button from "./button/Button";
import { services } from "@/data/services";

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
}

export default function PricingServices() {
  const { theme } = useTheme();
  const router = useRouter();

  // Theme-based colors
  const sectionBg = theme === "dark" ? "bg-gray-700 bg-opacity-90" : "bg-stone-50 bg-opacity-95";
  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-black/10 border border-white/20 text-gray-200" : "bg-white/30 border border-gray-300 text-gray-800";

  const servicesArray: Service[] = Object.entries(services).map(([id, service]) => ({
    id, 
    ...service,
  }));

  return (
    <section className={`py-20 px-4 sm:px-6 md:px-8 transition-colors duration-500 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-12 drop-shadow-lg ${headingColor}`}>
          Pricing
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {servicesArray.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center ${cardBg}`}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>

              <div className="mb-4">
                <p className="line-through text-sm opacity-60">{service.originalPrice}</p>
                <p className="text-2xl font-bold">{service.price}</p>
              </div>

              <ul className="text-sm space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => router.push(`/get-started/${service.id}`)}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
