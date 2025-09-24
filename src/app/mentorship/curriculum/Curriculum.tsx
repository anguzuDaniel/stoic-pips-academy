"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { useState } from "react";
import { curriculumList } from "./curriculumList";

export default function Curriculum() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const cardBg =
    theme === "dark"
      ? "bg-gray-800/80 border border-gray-700"
      : "bg-white shadow-md border border-gray-200";

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
        6-Week Mentorship Curriculum
      </h2>
      <div className="space-y-4">
        {curriculumList.map((item, idx) => (
          <div key={idx} className={`rounded-2xl p-6 ${cardBg}`}>
            <button
              onClick={() => toggle(idx)}
              className={`flex w-full items-center justify-between font-semibold ${textColor}`}
            >
              <span>
                📅 {item.week} – {item.title}
              </span>
              {openIndex === idx ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {openIndex === idx && (
              <p className={`mt-3 text-sm leading-relaxed ${textColor}`}>
                {item.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
