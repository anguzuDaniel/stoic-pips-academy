// services/realPaymentService.ts
export interface PaymentRequest {
  method: 'Flutterwave' | 'Tron' | 'Bank Transfer' | 'Mobile Money';
  amount: string;
  serviceTitle: string;
  serviceId?: string;
  customerEmail?: string;
  customerName?: string;
  customerPhone?: string;
}

export interface PaymentResponse {
  success: boolean;
  paymentLink?: string;
  tronAddress?: string;
  trxAmount?: string;
  usdtAmount?: string;
  usdAmount?: string;
  qrCode?: string;
  paymentUrl?: string;
  tronScanUrl?: string;
  bankDetails?: any;
  mobileMoneyDetails?: any;
  message: string;
}

class PaymentService {
  async processPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      switch (paymentRequest.method) {
        case 'Flutterwave':
          return await this.processFlutterwavePayment(paymentRequest);
        case 'Tron':
          return await this.processTronPayment(paymentRequest);
        case 'Bank Transfer':
          return await this.processBankTransfer(paymentRequest);
        case 'Mobile Money':
          return await this.processMobileMoney(paymentRequest);
        default:
          throw new Error('Unsupported payment method');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      return {
        success: false,
        message: 'Payment processing failed. Please try again.'
      };
    }
  }

  private async processFlutterwavePayment(payment: PaymentRequest): Promise<PaymentResponse> {
    try {
      // For now, simulate Flutterwave payment
      // In production, integrate with actual Flutterwave API
      return {
        success: true,
        paymentLink: '#', // Actual Flutterwave payment URL
        message: 'Redirecting to Flutterwave for secure payment (Card, Mobile Money, Bank Transfer)...'
      };
    } catch (error: any) {
      return {
        success: false,
        message: 'Flutterwave payment unavailable. Please try another method.'
      };
    }
  }

  private async processTronPayment(payment: PaymentRequest): Promise<PaymentResponse> {
    try {
      const response = await fetch('/api/tron/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: payment.amount,
          serviceTitle: payment.serviceTitle,
          customerEmail: payment.customerEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to create Tron payment');
      }

      return {
        success: true,
        tronAddress: data.tronAddress,
        trxAmount: data.trxAmount,
        usdtAmount: data.usdtAmount,
        usdAmount: data.usdAmount,
        qrCode: data.qrCode,
        paymentUrl: data.paymentUrl,
        tronScanUrl: data.tronScanUrl,
        message: data.message
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.message || 'Tron payment unavailable. Please try another method.'
      };
    }
  }

  private async processBankTransfer(payment: PaymentRequest): Promise<PaymentResponse> {
    // Bank transfer details for Uganda
    return {
      success: true,
      bankDetails: {
        bankName: 'Stanbic Bank Uganda',
        accountName: 'STOIC PIPS ACADEMY',
        accountNumber: '9030001234567',
        branch: 'Kampala Main Branch',
        swiftCode: 'SBICUGKX',
        currency: 'USD',
        reference: `STOIC-${Date.now()}`
      },
      message: 'Make transfer using the bank details below. Send proof to payments@stoicpips.com'
    };
  }

  private async processMobileMoney(payment: PaymentRequest): Promise<PaymentResponse> {
    // Mobile Money details for Uganda
    return {
      success: true,
      mobileMoneyDetails: {
        providers: [
          {
            name: 'MTN Mobile Money',
            number: '+256 772 123 456',
            nameOnAccount: 'STOIC PIPS ACADEMY',
            code: '*165*3#'
          },
          {
            name: 'Airtel Money',
            number: '+256 752 123 456',
            nameOnAccount: 'STOIC PIPS ACADEMY',
            code: '*185*9#'
          }
        ]
      },
      message: 'Send payment to any of the numbers below and WhatsApp proof to +256 XXX XXX XXX'
    };
  }
}

export const paymentService = new PaymentService();