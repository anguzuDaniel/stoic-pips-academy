"use client";

import { useTheme } from "next-themes";
import { paymentFields } from "./paymentFeilds";

export default function PaymentMethods({ 
  price, 
  serviceTitle, 
  onPaymentSuccess, 
  onPaymentError,
  activeMethod,
  setActiveMethod,
  onFormDataChange,
  formData,
  setFormData
}: PaymentMethodsProps) {
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  const handleChange = (field: string, value: string) => {
    onFormDataChange(field, value);
  };

  const paymentMethods = Object.keys(paymentFields);

  const getAutocompleteValue = (fieldName: string) => {
    const autocompleteMap: Record<string, string> = {
      cardNumber: "cc-number",
      expiryDate: "cc-exp",
      cvv: "cc-csc",
      cardName: "cc-name",
      accountName: "cc-name",
      accountNumber: "cc-number",
      bankName: "organization",
      routingNumber: "cc-number",
      airtelNumber: "tel",
      mtnNumber: "tel",
      airtelName: "name",
      mtnName: "name",
      btcWallet: "crypto-wallet-address",
      btcAmount: "transaction-amount",
    };

    return autocompleteMap[fieldName] || "off";
  };

  return (
    <div className="mb-8">
      <h4 className={`text-xl font-semibold mb-6 ${headingColor}`}>
        Select Payment Method
      </h4>
      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map((method) => (
          <div key={method} className="border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
            <button
              type="button"
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
                    <label 
                      htmlFor={`${method}-${field.name}`}
                      className={`block mb-2 text-sm font-medium ${textColor}`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={`${method}-${field.name}`}
                      type={field.type || "text"}
                      value={formData[field.name] || ""}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.label}
                      autoComplete={getAutocompleteValue(field.name)}
                      name={field.name}
                      required
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