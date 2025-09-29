// services/paymentService.ts
export interface PaymentRequest {
  method: 'Credit Card' | 'Bitcoin';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardName?: string;
  btcWallet?: string;
  amount: string;
  service: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  message: string;
  btcAddress?: string; // For Bitcoin payments
  btcAmount?: string;  // For Bitcoin payments
}

class PaymentService {
  async processPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      switch (paymentRequest.method) {
        case 'Credit Card':
          return await this.processCreditCard(paymentRequest);
        case 'Bitcoin':
          return await this.processBitcoin(paymentRequest);
        default:
          throw new Error('Unsupported payment method');
      }
    } catch (error) {
      return {
        success: false,
        message: 'Payment processing failed. Please try again.'
      };
    }
  }

  private async processCreditCard(payment: PaymentRequest): Promise<PaymentResponse> {
    // Validate credit card details
    if (!payment.cardNumber || !payment.expiryDate || !payment.cvv || !payment.cardName) {
      return {
        success: false,
        message: 'Please fill in all credit card details'
      };
    }

    if (!this.isValidCard(payment.cardNumber)) {
      return {
        success: false,
        message: 'Please enter a valid card number'
      };
    }

    // Simulate Stripe API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const isSuccess = Math.random() > 0.1; // 90% success rate

    if (isSuccess) {
      return {
        success: true,
        transactionId: `ch_${Math.random().toString(36).substr(2, 24)}`,
        message: 'Payment successful! Welcome to Stoic Pips Academy. You now have access to all course materials.'
      };
    } else {
      return {
        success: false,
        message: 'Payment declined. Please check your card details and try again.'
      };
    }
  }

  private async processBitcoin(payment: PaymentRequest): Promise<PaymentResponse> {
    // Generate unique BTC address for this payment
    const btcAddress = await this.generateBitcoinAddress();
    const btcAmount = await this.calculateBtcAmount(payment.amount);

    // For Bitcoin, we consider it "successful" immediately since we're just providing address
    return {
      success: true,
      transactionId: `btc_${Date.now()}`,
      message: `Please send exactly ${btcAmount} BTC to the address below. Access will be granted after 1 confirmation (≈30 minutes).`,
      btcAddress: btcAddress,
      btcAmount: btcAmount
    };
  }

  private isValidCard(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\s/g, '');
    return cleaned.length >= 13 && cleaned.length <= 19 && /^\d+$/.test(cleaned);
  }

  private async generateBitcoinAddress(): Promise<string> {
    // In production, use a service like BitPay, Coinbase Commerce, or generate unique addresses
    // For demo, return a static address
    await new Promise(resolve => setTimeout(resolve, 500));
    return 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
  }

  private async calculateBtcAmount(usdAmount: string): Promise<string> {
    // In production, fetch real-time BTC price
    // For demo, use fixed rate
    const usd = parseFloat(usdAmount.replace('$', '').replace(',', ''));
    const btcRate = 45000; // $45,000 per BTC
    const btcAmount = (usd / btcRate).toFixed(8);
    return btcAmount;
  }
}

export const paymentService = new PaymentService();