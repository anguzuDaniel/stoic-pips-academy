"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { paymentFields } from "./paymentFeilds";

interface PaymentMethodsProps {
  price: string;
  serviceTitle: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentError: (error: string) => void;
  activeMethod: string | null;
  setActiveMethod: (method: string | null) => void;
  onFormDataChange: (field: string, value: string) => void;
  formData: Record<string, string>;
}

export default function PaymentMethods({ 
  price, 
  serviceTitle, 
  onPaymentSuccess, 
  onPaymentError,
  activeMethod,
  setActiveMethod,
  onFormDataChange,
  formData
}: PaymentMethodsProps) {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  const handleChange = (field: string, value: string) => {
    onFormDataChange(field, value);
  };

  const paymentMethods = Object.keys(paymentFields);

  // Auto-activate credit card by default
  useState(() => {
    if (!activeMethod) {
      setActiveMethod("Credit Card");
    }
  });

  return (
    <div className="mb-8">
      <h4 className={`text-xl font-semibold mb-6 ${headingColor}`}>
        Payment Method
      </h4>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Credit Card Option */}
        <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
          activeMethod === "Credit Card" ? "ring-2 ring-green-500" : ""
        }`}>
          <button
            type="button"
            onClick={() => setActiveMethod("Credit Card")}
            className={`w-full flex justify-between items-center p-4 transition-all duration-200 ${
              activeMethod === "Credit Card"
                ? "bg-green-600 text-white"
                : `${textColor} hover:bg-gray-100 dark:hover:bg-gray-700`
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
              </div>
              <span className="font-medium">Credit/Debit Card</span>
            </div>
            <span className="text-sm">
              {activeMethod === "Credit Card" ? "✓" : ""}
            </span>
          </button>

          {activeMethod === "Credit Card" && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-600 space-y-4 animate-fadeIn">
              {paymentFields["Credit Card"].map((field) => (
                <div key={field.name}>
                  <label 
                    htmlFor={`credit-card-${field.name}`}
                    className={`block mb-2 text-sm font-medium ${textColor}`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={`credit-card-${field.name}`}
                    type={field.type || "text"}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder={
                      field.name === 'cardNumber' ? '1234 5678 9012 3456' :
                      field.name === 'expiryDate' ? 'YYYY-MM' :
                      field.name === 'cvv' ? '123' :
                      'John Doe'
                    }
                    autoComplete={field.autocomplete}
                    name={field.name}
                    required
                  />
                </div>
              ))}
              
              {/* Credit Card Security Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-600 dark:text-blue-400">🔒</span>
                  <div className="text-sm text-blue-700 dark:text-blue-300">
                    <p className="font-semibold">Secure Payment</p>
                    <p>Your card details are encrypted and processed securely.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bitcoin Option */}
        <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
          activeMethod === "Bitcoin" ? "ring-2 ring-orange-500" : ""
        }`}>
          <button
            type="button"
            onClick={() => setActiveMethod("Bitcoin")}
            className={`w-full flex justify-between items-center p-4 transition-all duration-200 ${
              activeMethod === "Bitcoin"
                ? "bg-orange-600 text-white"
                : `${textColor} hover:bg-gray-100 dark:hover:bg-gray-700`
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">₿</span>
              <span className="font-medium">Bitcoin (BTC)</span>
            </div>
            <span className="text-sm">
              {activeMethod === "Bitcoin" ? "✓" : ""}
            </span>
          </button>

          {activeMethod === "Bitcoin" && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-600 space-y-4 animate-fadeIn">
              {paymentFields["Bitcoin"].map((field) => (
                <div key={field.name}>
                  <label 
                    htmlFor={`bitcoin-${field.name}`}
                    className={`block mb-2 text-sm font-medium ${textColor}`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={`bitcoin-${field.name}`}
                    type={field.type || "text"}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                    autoComplete={field.autocomplete}
                    name={field.name}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Optional: Provide your wallet address to receive payment confirmation
                  </p>
                </div>
              ))}
              
              {/* Bitcoin Payment Info */}
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400">₿</span>
                  <div className="text-sm text-orange-700 dark:text-orange-300">
                    <p className="font-semibold">How Bitcoin Payment Works</p>
                    <p>After clicking "Enroll Now", you'll see a BTC address and amount to send. Payment is confirmed within 30 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Security Badges */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🔒</span>
          <span>256-bit SSL</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🛡️</span>
          <span>PCI DSS</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>₿</span>
          <span>Crypto Secure</span>
        </div>
      </div>
    </div>
  );
}