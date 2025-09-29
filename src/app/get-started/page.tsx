"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import Button from "@/app/components/button/Button";
import { Service } from "@/data/Service";
import PaymentMethods from "./components/PaymentMethods";
import PriceSummary from "./components/PriceSummary";
import ServiceDetails from "./components/ServiceDetails";
import SubPageLayout from "../components/layout/SubPageLayout";
import { PaymentRequest, paymentService } from "./services/PaymentService";

export default function GetStartedPage({
  title,
  description,
  price,
  originalPrice,
  features,
}: Service) {
  const { theme } = useTheme();
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [transactionId, setTransactionId] = useState('');

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

  const handlePaymentSuccess = (txId: string) => {
    setPaymentStatus('success');
    setTransactionId(txId);
    // Redirect to success page or show success message
    alert(`Payment successful! Welcome to ${title}. Transaction ID: ${txId}`);
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    alert(`Payment failed: ${error}`);
  };

  const handleFormDataChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEnrollPayment = async () => {
    if (!activeMethod) {
      alert("Please select a payment method before proceeding.");
      return;
    }

    setIsProcessing(true);

    try {
      const paymentRequest: PaymentRequest = {
        method: activeMethod as 'Credit Card' | 'Bitcoin',
        amount: price,
        service: title,
        ...formData
      };

      const result = await paymentService.processPayment(paymentRequest);

      if (result.success) {
        if (activeMethod === 'Bitcoin' && result.btcAddress && result.btcAmount) {
          // Show Bitcoin payment instructions
          alert(`BITCOIN PAYMENT INSTRUCTIONS:\n\nSend: ${result.btcAmount} BTC\nTo: ${result.btcAddress}\n\n${result.message}`);
          handlePaymentSuccess(result.transactionId!);
        } else {
          handlePaymentSuccess(result.transactionId!);
        }
      } else {
        handlePaymentError(result.message);
      }
    } catch (error) {
      handlePaymentError('Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
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

                <PaymentMethods
                  price={price}
                  serviceTitle={title}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                  formData={formData}
                  // Pass these props to PaymentMethods so it can update the active method
                  activeMethod={activeMethod}
                  setActiveMethod={setActiveMethod}
                  onFormDataChange={handleFormDataChange}
                />

                {/* SINGLE Enroll Button - This is the main payment button */}
                <Button 
                  onClick={handleEnrollPayment} 
                  className="w-full py-4 text-lg font-semibold mt-6"
                  disabled={isProcessing || !activeMethod}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing Payment...
                    </div>
                  ) : (
                    `Enroll Now - ${price}`
                  )}
                </Button>

                <div className="mt-6 text-center">
                  <p className={`text-sm ${textColor} flex items-center justify-center`}>
                    <span className="mr-2">🔒</span>
                    Secure & encrypted payment processing
                  </p>
                  <p className={`text-xs mt-2 ${textColor} opacity-75`}>
                    7-day money-back guarantee • Instant access upon payment
                  </p>
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