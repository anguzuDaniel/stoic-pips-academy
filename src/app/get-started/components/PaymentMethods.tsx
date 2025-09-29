"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { paymentService } from "../services/PaymentService";

interface PaymentMethodsProps {
  price: string;
  serviceTitle: string;
  serviceId?: string;
  customerEmail?: string;
  customerName?: string;
  customerPhone?: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentError: (error: string) => void;
  activeMethod: string | null;
  setActiveMethod: (method: string | null) => void;
}

export default function PaymentMethods({ 
  price, 
  serviceTitle, 
  serviceId,
  customerEmail,
  customerName,
  customerPhone,
  onPaymentSuccess, 
  onPaymentError,
  activeMethod,
  setActiveMethod,
}: PaymentMethodsProps) {
  const { theme } = useTheme();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  const handleRealPayment = async () => {
    if (!activeMethod) {
      onPaymentError("Please select a payment method");
      return;
    }

    setIsProcessing(true);

    try {
      const paymentRequest = {
        method: activeMethod as 'Flutterwave' | 'Tron' | 'Bank Transfer' | 'Mobile Money',
        amount: price,
        serviceTitle: serviceTitle,
        serviceId: serviceId,
        customerEmail: customerEmail,
        customerName: customerName,
        customerPhone: customerPhone,
      };

      const result = await paymentService.processPayment(paymentRequest);

      if (result.success) {
        if (activeMethod === 'Flutterwave' && result.paymentLink) {
          // Redirect to Flutterwave
          window.location.href = result.paymentLink;
        } else {
          // Show payment details for other methods
          setPaymentDetails(result);
          onPaymentSuccess(`${activeMethod}-${Date.now()}`);
        }
      } else {
        onPaymentError(result.message);
      }
    } catch (error: any) {
      onPaymentError(error.message || 'Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const paymentMethods = [
    { id: 'Flutterwave', name: 'Card/Mobile Money', icon: '💳', description: 'Visa, Mastercard, MTN, Airtel' },
    { id: 'Tron', name: 'Crypto (TRX/USDT)', icon: 'Ⓣ', description: 'Tron Network - Fast & Low Fee' },
    { id: 'Mobile Money', name: 'Direct Mobile Money', icon: '📱', description: 'MTN & Airtel Money Uganda' },
    { id: 'Bank Transfer', name: 'Bank Transfer', icon: '🏦', description: 'Local Bank Transfer' },
  ];

  return (
    <div className="mb-8">
      <h4 className={`text-xl font-semibold mb-6 ${headingColor}`}>
        Payment Method
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className={`border rounded-xl overflow-hidden transition-all duration-200 ${
            activeMethod === method.id ? "ring-2 ring-green-500" : ""
          }`}>
            <button
              type="button"
              onClick={() => {
                setActiveMethod(method.id);
                setPaymentDetails(null);
              }}
              disabled={isProcessing}
              className={`w-full flex items-start p-4 transition-all duration-200 text-left ${
                activeMethod === method.id
                  ? "bg-green-600 text-white"
                  : `${textColor} hover:bg-gray-100 dark:hover:bg-gray-700`
              } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{method.icon}</span>
                <div>
                  <div className="font-medium">{method.name}</div>
                  <div className={`text-sm ${activeMethod === method.id ? 'text-green-100' : 'text-gray-500'}`}>
                    {method.description}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Payment Details Display */}
      {paymentDetails && activeMethod && (
        <div className="mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl">
          {activeMethod === 'Tron' && paymentDetails.tronAddress && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                <span className="mr-2">Ⓣ</span>
                Tron Payment Instructions
              </h5>
              
              {paymentDetails.qrCode && (
                <div className="flex justify-center mb-4">
                  <img 
                    src={paymentDetails.qrCode} 
                    alt="Tron QR Code" 
                    className="w-48 h-48 border-2 border-blue-300 rounded-lg"
                  />
                </div>
              )}
              
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">TRX Payment</div>
                    <div className="font-mono text-lg">{paymentDetails.trxAmount} TRX</div>
                    <div className="text-xs text-gray-500">≈ ${paymentDetails.usdAmount}</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="text-green-600 dark:text-green-400 font-semibold">USDT Payment</div>
                    <div className="font-mono text-lg">{paymentDetails.usdtAmount} USDT</div>
                    <div className="text-xs text-gray-500">Tron Network</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <span className="text-blue-700 dark:text-blue-400 block mb-2 font-semibold">Send to Tron Address:</span>
                  <code className="bg-blue-100 dark:bg-blue-900 px-3 py-2 rounded text-sm break-all font-mono block">
                    {paymentDetails.tronAddress}
                  </code>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paymentDetails.tronAddress);
                    alert('Tron address copied to clipboard!');
                  }}
                  className="py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  📋 Copy Address
                </button>
                {paymentDetails.paymentUrl && (
                  <a
                    href={paymentDetails.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors text-center"
                  >
                    🚀 Open in Wallet
                  </a>
                )}
              </div>
            </div>
          )}

          {activeMethod === 'Bank Transfer' && paymentDetails.bankDetails && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 dark:text-green-300 mb-3">🏦 Bank Transfer Details</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Bank:</span>
                  <span className="font-semibold">{paymentDetails.bankDetails.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Account Name:</span>
                  <span className="font-semibold">{paymentDetails.bankDetails.accountName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Account Number:</span>
                  <span className="font-mono">{paymentDetails.bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Reference:</span>
                  <span className="font-mono">{paymentDetails.bankDetails.reference}</span>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                    💡 After transfer, send proof to <strong>payments@stoicpips.com</strong> with reference number.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeMethod === 'Mobile Money' && paymentDetails.mobileMoneyDetails && (
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">📱 Mobile Money Payment</h5>
              <div className="space-y-4">
                {paymentDetails.mobileMoneyDetails.providers.map((provider: any, index: number) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <div className="font-semibold text-purple-600 dark:text-purple-400">{provider.name}</div>
                    <div className="font-mono text-lg">{provider.number}</div>
                    <div className="text-sm text-gray-600">Account: {provider.nameOnAccount}</div>
                    <div className="text-xs text-gray-500">Dial: {provider.code}</div>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                    💡 After payment, WhatsApp screenshot to <strong>+256 XXX XXX XXX</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Payment Button */}
      {!paymentDetails && (
        <button
          onClick={handleRealPayment}
          disabled={!activeMethod || isProcessing}
          className={`w-full mt-6 py-4 px-6 font-semibold rounded-lg transition-colors duration-200 ${
            !activeMethod || isProcessing
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </div>
          ) : !activeMethod ? (
            'Select Payment Method'
          ) : (
            `Pay ${price} with ${activeMethod === 'Flutterwave' ? 'Card/Mobile Money' : activeMethod}`
          )}
        </button>
      )}

      {/* Back Button when payment details are shown */}
      {paymentDetails && (
        <div className="mt-4 space-y-3">
          <button
            onClick={() => setPaymentDetails(null)}
            className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            ← Back to Payment Methods
          </button>
        </div>
      )}

      {/* Security Badges */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🔒</span>
          <span>Secure Payments</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>🇺🇬</span>
          <span>Uganda Supported</span>
        </div>
      </div>
    </div>
  );
}