"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { ServiceCardProps } from "./ServiceCardProps";

export default function ServiceCard({ title, description, icon: Icon, link, image }: ServiceCardProps) {
  const { theme } = useTheme();

  // Text colors based on theme
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const descColor = theme === "dark" ? "text-gray-200" : "text-gray-700";
  const iconColor = theme === "dark" ? "text-white" : "text-gray-900";

  // Card background based on theme
  const cardBg = theme === "dark" ? "bg-black/10" : "bg-white/30";
  const borderColor = theme === "dark" ? "border-white/20" : "border-gray-200";

  return (
    <a
      href={link}
      className={`group relative block rounded-3xl overflow-hidden
                 ${cardBg} backdrop-blur-2xl border ${borderColor}
                 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
    >
      {/* Optional Image */}
      {image && (
        <div className="relative h-40 w-full overflow-hidden rounded-t-3xl">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay for subtle blending */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              theme === "dark" ? "from-black/10 to-black/0" : "from-white/5 to-white/0"
            } pointer-events-none`}
          ></div>
        </div>
      )}

      {/* Text Content */}
      <div className="p-6 flex flex-col items-center relative z-10">
        <div className="flex justify-center mb-4">
            {Icon ? <Icon className="w-10 h-10 mx-auto mb-3 text-blue-500" /> : null}
        </div>
        <h3 className={`text-xl font-semibold text-center mb-2 ${titleColor}`}>{title}</h3>
        <p className={`text-center ${descColor}`}>{description}</p>
      </div>
    </a>
  );
}
