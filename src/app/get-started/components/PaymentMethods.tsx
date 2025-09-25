"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { paymentFields } from "./paymentFeilds";

export default function PaymentMethods() {
  const { theme } = useTheme();
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const paymentMethods = Object.keys(paymentFields);

  return(
      <div className="mb-8">
        <h4 className={`text-xl font-semibold mb-6 ${headingColor}`}>
          Select Payment Method
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {paymentMethods.map((method) => (
            <div key={method} className="border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
              <button
                onClick={() => setActiveMethod(activeMethod === method ? null : method)}
                className={`w-full flex justify-between items-center p-4 transition-all duration-200 ${
                  activeMethod === method
                    ? "bg-blue-500 text-white"
                    : `${textColor} hover:bg-gray-100 dark:hover:bg-gray-700`
                }`}
              >
                <span className="font-medium">{method}</span>
                <span className="text-lg font-semibold">
                  {activeMethod === method ? "–" : "+"}
                </span>
              </button>

              {activeMethod === method && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-600 space-y-4 animate-fadeIn">
                  {paymentFields[method].map((field) => (
                    <div key={field.name}>
                      <label className={`block mb-2 text-sm font-medium ${textColor}`}>
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={field.label}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  );
}