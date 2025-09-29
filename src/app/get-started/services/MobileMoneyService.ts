// services/mobileMoneyService.ts
export interface MobileMoneyPaymentRequest {
  provider: 'Airtel Money' | 'MTN Money';
  phoneNumber: string;
  accountName: string;
  amount: string;
  service: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  message: string;
  providerReference?: string;
}

class MobileMoneyService {
  async processPayment(paymentRequest: MobileMoneyPaymentRequest): Promise<PaymentResponse> {
    try {
      // Validate phone number format
      if (!this.isValidPhoneNumber(paymentRequest.phoneNumber)) {
        return {
          success: false,
          message: 'Invalid phone number format. Please check and try again.'
        };
      }

      // Validate account name
      if (!paymentRequest.accountName.trim()) {
        return {
          success: false,
          message: 'Account name is required.'
        };
      }

      // Simulate API call to mobile money provider
      const response = await this.callMobileMoneyAPI(paymentRequest);
      
      return response;
    } catch (error) {
      return {
        success: false,
        message: 'Payment processing failed. Please try again.'
      };
    }
  }

  private async callMobileMoneyAPI(payment: MobileMoneyPaymentRequest): Promise<PaymentResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Simulate successful payment 80% of the time for demo
    const isSuccess = Math.random() > 0.2;

    if (isSuccess) {
      return {
        success: true,
        transactionId: `MM-${payment.provider.substring(0, 3).toUpperCase()}-${Date.now()}`,
        providerReference: `REF-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        message: `Payment initiated successfully! You will receive a ${payment.provider} prompt on your phone to complete the transaction.`
      };
    } else {
      return {
        success: false,
        message: `Payment failed. Please ensure you have sufficient funds in your ${payment.provider} account and try again.`
      };
    }
  }

  private isValidPhoneNumber(phone: string): boolean {
    // Basic phone number validation - adjust based on your country
    const phoneRegex = /^(\+?256|0)?[7]\d{8}$/; // Uganda format example
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // Helper to format phone numbers
  formatPhoneNumber(phone: string): string {
    return phone.replace(/\D/g, ''); // Remove non-digit characters
  }
}

export const mobileMoneyService = new MobileMoneyService();