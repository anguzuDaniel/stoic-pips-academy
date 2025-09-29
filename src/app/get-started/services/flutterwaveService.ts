// services/flutterwaveService.ts
export interface FlutterwavePaymentRequest {
  amount: string;
  serviceTitle: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
}

export interface FlutterwavePaymentResponse {
  success: boolean;
  paymentLink?: string;
  message: string;
}

class FlutterwaveService {
  async createPayment(paymentRequest: FlutterwavePaymentRequest): Promise<FlutterwavePaymentResponse> {
    try {
      const amount = parseFloat(paymentRequest.amount.replace(/[^\d.]/g, ''));
      
      if (isNaN(amount)) {
        throw new Error('Invalid price format');
      }

      // In a real implementation, you'd call Flutterwave API here
      // For now, we'll simulate creating a payment
      const paymentData = {
        tx_ref: `stoic-${Date.now()}`,
        amount: amount,
        currency: 'USD',
        payment_options: 'card, mobilemoneyuganda, banktransfer',
        redirect_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/payment/success`,
        customer: {
          email: paymentRequest.customerEmail,
          name: paymentRequest.customerName,
          phone_number: paymentRequest.customerPhone,
        },
        customizations: {
          title: 'Stoic Pips Academy',
          description: paymentRequest.serviceTitle,
          logo: 'https://your-logo-url.com/logo.png',
        },
      };

      return {
        success: true,
        paymentLink: '#', // This would be the actual Flutterwave payment link
        message: 'Redirecting to Flutterwave for secure payment...'
      };
    } catch (error) {
      console.error('Flutterwave payment error:', error);
      return {
        success: false,
        message: 'Payment processing failed. Please try again.'
      };
    }
  }
}

export const flutterwaveService = new FlutterwaveService();