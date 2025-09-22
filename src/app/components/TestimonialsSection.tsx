"use client";

import { useTheme } from "next-themes";

const testimonials = [
  {
    name: "James K.",
    role: "Funded Trader",
    text: "Stoic Pips Academy helped me refine my price action strategy and pass my funded account challenge. Highly recommend!",
    image: "/person_1.jpeg",
  },
  {
    name: "Sarah M.",
    role: "Beginner to Consistent Trader",
    text: "I had struggled for years, but Daniel’s mentorship gave me clarity. My win rate improved and I now trade with confidence.",
    image: "/person_2.jpeg",
  },
  {
    name: "Michael T.",
    role: "Forex & Synthetic Indices Trader",
    text: "The community and structured mentorship transformed my trading journey. It’s more than signals—it’s true learning.",
    image: "/person_3.jpeg",
  },
];

export default function TestimonialsSection() {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";

  return (
    <section
      id="testimonials"
      className={`py-20 px-4 sm:px-6 md:px-8 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${headingColor}`}>
          What Our Students Say
        </h2>
        <p className={`${textColor} max-w-2xl mx-auto`}>
          Hear from traders who have taken our mentorship and grown their trading journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`${cardBg} rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2`}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className={`italic mb-4 ${textColor}`}>"{t.text}"</p>
            <h3 className={`font-semibold ${headingColor}`}>{t.name}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
