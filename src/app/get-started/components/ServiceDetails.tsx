"use client";

import { Service } from "@/data/Service";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ServiceDetails({
  title,
  description,
  price,
  originalPrice,
  features,
}: Service) {
    const { theme } = useTheme();
    
    const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
    const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
    const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
    const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

    return(
        <div className="lg:col-span-1">
            <div className={`rounded-2xl p-8 ${cardBg} border ${borderColor} shadow-lg sticky top-8`}>
              <div className="text-center mb-6">
                <h2 className={`text-2xl font-bold mb-2 ${headingColor}`}>
                  {title}
                </h2>
                <div className="flex items-center justify-center space-x-2">
                  {originalPrice && (
                    <span className="line-through text-gray-400 text-lg">
                      {originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-green-500">{price}</span>
                </div>
              </div>

              <p className={`text-center mb-6 leading-relaxed ${textColor}`}>
                {description}
              </p>

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>
                  🎯 What You'll Master
                </h3>
                <div className="space-y-3">
                  {features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${textColor}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-lg border ${borderColor} bg-white dark:bg-gray-900`}>
                <h4 className={`font-semibold mb-2 ${headingColor}`}>
                  ✨ Academy Benefits
                </h4>
                <ul className={`text-sm space-y-1 ${textColor}`}>
                  <li>• Lifetime course access</li>
                  <li>• Daily market analysis</li>
                  <li>• Private trading community</li>
                  <li>• Personal mentorship</li>
                  <li>• Risk management tools</li>
                </ul>
              </div>
            </div>
        </div>
    );
}