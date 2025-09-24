"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { whyJoinItems } from "./WhyJoin";


export default function WhyJoinAccordion({
  headingColor,
  textColor,
  cardBg,
}: {
  headingColor: string;
  textColor: string;
  cardBg: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
        Why Join This Program?
      </h2>
      <div className="space-y-4">
        {whyJoinItems.map((item, idx) => (
          <div key={idx} className="border-b border-gray-300/30 pb-3">
            <button
              onClick={() => toggle(idx)}
              className={`flex w-full items-center justify-between font-medium ${textColor}`}
            >
              <span>✅ {item.title}</span>
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
