"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Service } from "@/data/Service";
import PriceSummary from "./components/PriceSummary";
import ServiceDetails from "./components/ServiceDetails";
import SubPageLayout from "../components/layout/SubPageLayout";
import TronPayment from "./components/TronPayment";

export default function GetStartedPage({
  title,
  description,
  price,
  originalPrice,
  features,
}: Service) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [transactionId, setTransactionId] = useState('');

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

  const handlePaymentSuccess = (txId: string) => {
    setPaymentStatus('success');
    setTransactionId(txId);
    // No alert here - let the TronPayment component handle the display
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    // Show error as inline message instead of alert
    console.error('Payment error:', error);
  };

  const handleFormDataChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validate form before showing Tron payment
  const isFormValid = () => {
    return formData.name && formData.email;
  };

  return (
    <SubPageLayout>
      <section className={`px-4 sm:px-6 lg:px-8 py-12`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${headingColor}`}>
              Join Stoic Pips Academy
            </h1>
            <p className={`text-lg ${textColor} max-w-2xl mx-auto`}>
              Complete your enrollment and start your trading journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Side - Payment Section */}
            <div className="lg:col-span-2">
              <div className={`rounded-2xl p-8 ${cardBg} border ${borderColor} shadow-lg`}>
                <h3 className={`text-2xl font-bold mb-6 ${headingColor}`}>
                  Complete Payment
                </h3>

                <PriceSummary 
                  title={title} 
                  description={description} 
                  price={price}
                  originalPrice={originalPrice}
                  features={features}
                />

                {/* Customer Information Form */}
                <div className="mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <h4 className={`text-lg font-semibold mb-4 ${headingColor}`}>
                    Your Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${textColor}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name || ""}
                        onChange={(e) => handleFormDataChange('name', e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${textColor}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email || ""}
                        onChange={(e) => handleFormDataChange('email', e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${textColor}`}>
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone || ""}
                        onChange={(e) => handleFormDataChange('phone', e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+256 712 345 678"
                      />
                    </div>
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${textColor}`}>
                        Country
                      </label>
                      <select
                        value={formData.country || ""}
                        onChange={(e) => handleFormDataChange('country', e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select your country</option>
                        <option value="UG">Uganda</option>
                        <option value="KE">Kenya</option>
                        <option value="TZ">Tanzania</option>
                        <option value="RW">Rwanda</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {!isFormValid() && (
                    <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                        💡 Please fill in your name and email to see payment options.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tron Payment Component - Only show if form is valid */}
                {isFormValid() && (
                  <TronPayment
                    price={price}
                    serviceTitle={title}
                    customerEmail={formData.email}
                    customerName={formData.name}
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                  />
                )}

                {/* Payment Status Display */}
                {paymentStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 dark:text-green-400 text-xl">✅</span>
                      <div>
                        <p className="text-green-800 dark:text-green-300 font-semibold">
                          Tron Payment Instructions Ready!
                        </p>
                        <p className="text-green-700 dark:text-green-400 text-sm">
                          Please complete the payment using the Tron instructions above.
                          Access will be granted within 30 minutes of payment confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {paymentStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 dark:text-red-400 text-xl">❌</span>
                      <div>
                        <p className="text-red-800 dark:text-red-300 font-semibold">
                          Payment Setup Failed
                        </p>
                        <p className="text-red-700 dark:text-red-400 text-sm">
                          Please refresh the page and try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <p className={`text-sm ${textColor} flex items-center justify-center`}>
                    <span className="mr-2">Ⓣ</span>
                    Pay with Tron (TRX/USDT) - Fast & Low Fees
                  </p>
                  <p className={`text-xs mt-2 ${textColor} opacity-75`}>
                    7-day money-back guarantee • Instant access upon payment confirmation
                  </p>
                  
                  {/* Support Info */}
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Need help with Tron payment? Contact:{' '}
                      <a href="mailto:support@stoicpips.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@stoicpips.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Details */}
            <ServiceDetails
              title={title} 
              description={description} 
              price={price}
              originalPrice={originalPrice}
              features={features}
            />
          </div>
        </div>
      </section>
    </SubPageLayout>
  );
}