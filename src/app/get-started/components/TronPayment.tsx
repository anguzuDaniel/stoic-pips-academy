"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface TronPaymentProps {
  price: string;
  serviceTitle: string;
  customerEmail: string;
  customerName: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentError: (error: string) => void;
}

export default function TronPayment({
  price,
  serviceTitle,
  customerEmail,
  customerName,
  onPaymentSuccess,
  onPaymentError,
}: TronPaymentProps) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

  // Your Tron wallet address
  const TRON_ADDRESS = 'TGFqYWNlZkRrRFpob0VBenlMZTg0cTE2SHdvYllLYzhy';

  useEffect(() => {
    // Simulate API call to get payment details
    const generatePaymentDetails = async () => {
      setIsLoading(true);
      
      try {
        // Extract USD amount
        const usdAmount = parseFloat(price.replace(/[^\d.]/g, ''));
        
        // Calculate TRX amount (using approximate rate)
        const trxRate = 0.12; // $0.12 per TRX
        const trxAmount = (usdAmount / trxRate).toFixed(2);
        
        // USDT amount (1:1 with USD)
        const usdtAmount = usdAmount.toFixed(2);
        
        // Generate QR code
        const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`tron:${TRON_ADDRESS}?contractAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&amount=${usdtAmount}000000`)}`;
        
        const details = {
          tronAddress: TRON_ADDRESS,
          trxAmount,
          usdtAmount,
          usdAmount: usdAmount.toFixed(2),
          qrCode,
          paymentUrl: `https://tronlink.org/pay?address=${TRON_ADDRESS}&amount=${usdtAmount}&token=USDT`,
          tronScanUrl: `https://tronscan.org/#/address/${TRON_ADDRESS}`,
          message: `Send ${trxAmount} TRX or ${usdtAmount} USDT to complete your payment. Access granted within 30 minutes of confirmation.`
        };
        
        setPaymentDetails(details);
        onPaymentSuccess(`TRON-${Date.now()}`);
      } catch (error) {
        onPaymentError('Failed to generate payment details');
      } finally {
        setIsLoading(false);
      }
    };

    generatePaymentDetails();
  }, [price, onPaymentSuccess, onPaymentError]);

  if (isLoading) {
    return (
      `<div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">Preparing Tron payment...</span>
      </div>`
    );
  }

  if (!paymentDetails) {
    return null;
  }

  return (
    <div className="mb-8">
      <h4 className={`text-xl font-semibold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        Tron Payment Instructions
      </h4>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <img 
            src={paymentDetails.qrCode} 
            alt="Tron QR Code" 
            className="w-64 h-64 border-4 border-blue-300 dark:border-blue-600 rounded-lg"
          />
        </div>
        
        {/* Payment Amounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">TRX Payment</div>
            <div className="font-mono text-2xl font-bold">{paymentDetails.trxAmount} TRX</div>
            <div className="text-xs text-gray-500 mt-1">≈ ${paymentDetails.usdAmount}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-green-600 dark:text-green-400 font-semibold text-sm mb-1">USDT Payment</div>
            <div className="font-mono text-2xl font-bold">{paymentDetails.usdtAmount} USDT</div>
            <div className="text-xs text-gray-500 mt-1">Tron Network</div>
          </div>
        </div>
        
        {/* Tron Address */}
        <div className="mb-6">
          <label className="block text-blue-700 dark:text-blue-400 font-semibold mb-2">
            Send to Tron Address:
          </label>
          <div className="flex items-center space-x-2">
            <code className="flex-1 bg-blue-100 dark:bg-blue-900 px-4 py-3 rounded-lg text-sm break-all font-mono">
              {paymentDetails.tronAddress}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(paymentDetails.tronAddress);
                alert('Tron address copied to clipboard!');
              }}
              className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              📋 Copy
            </button>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <a
            href={paymentDetails.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 bg-green-600 hover:bg-green-700 text-white text-center rounded-lg transition-colors font-semibold"
          >
            🚀 Open in TronLink
          </a>
          <a
            href={paymentDetails.tronScanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 bg-gray-600 hover:bg-gray-700 text-white text-center rounded-lg transition-colors font-semibold"
          >
            🔍 View on TronScan
          </a>
        </div>
        
        {/* Instructions */}
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <h5 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Payment Instructions:</h5>
          <ol className="text-yellow-700 dark:text-yellow-400 text-sm space-y-1">
            <li>1. Send <strong>{paymentDetails.trxAmount} TRX</strong> or <strong>{paymentDetails.usdtAmount} USDT</strong></li>
            <li>2. Use the Tron address above or scan the QR code</li>
            <li>3. Transactions confirm in ~30 seconds</li>
            <li>4. Access granted within 30 minutes of payment</li>
          </ol>
        </div>
        
        {/* Benefits */}
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <p className="text-green-700 dark:text-green-400 text-sm">
            ⚡ <strong>Why Tron?</strong> Lightning fast (2-second transactions), ultra low fees ($0.001), and eco-friendly!
          </p>
        </div>
      </div>
    </div>
  );
}