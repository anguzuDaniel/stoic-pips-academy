// services/tronPaymentService.ts
export interface TronPaymentRequest {
  amount: string;
  serviceTitle: string;
  customerEmail?: string;
}

export interface TronPaymentResponse {
  success: boolean;
  tronAddress: string;
  trxAmount: string;
  usdtAmount: string;
  usdAmount: string;
  message: string;
  qrCode?: string;
  paymentUrl?: string;
}

class TronPaymentService {
  // Your Tron wallet address
  private readonly TRON_ADDRESS = 'TGFqYWNlZkRrRFpob0VBenlMZTg0cTE2SHdvYllLYzhy';
  
  // For real-time TRX/USDT price
  private readonly PRICE_API = 'https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd';

  async createPayment(paymentRequest: TronPaymentRequest): Promise<TronPaymentResponse> {
    try {
      // Extract USD amount from price string
      const usdAmount = parseFloat(paymentRequest.amount.replace(/[^\d.]/g, ''));
      
      if (isNaN(usdAmount)) {
        throw new Error('Invalid price format');
      }

      // Get current TRX price
      const trxPrice = await this.getTRXPrice();
      const trxAmount = (usdAmount / trxPrice).toFixed(2); // TRX to 2 decimals
      const usdtAmount = usdAmount.toFixed(2); // USDT amount (1:1 with USD)

      return {
        success: true,
        tronAddress: this.TRON_ADDRESS,
        trxAmount: trxAmount,
        usdtAmount: usdtAmount,
        usdAmount: usdAmount.toFixed(2),
        message: `Send ${trxAmount} TRX or ${usdtAmount} USDT to your Tron address. Access granted instantly upon confirmation.`,
        qrCode: this.generateQRCode(this.TRON_ADDRESS, usdtAmount),
        paymentUrl: this.generatePaymentUrl(this.TRON_ADDRESS, usdtAmount)
      };
    } catch (error) {
      console.error('Tron payment error:', error);
      return {
        success: false,
        tronAddress: '',
        trxAmount: '',
        usdtAmount: '',
        usdAmount: '',
        message: 'Failed to create Tron payment. Please try again.'
      };
    }
  }

  private async getTRXPrice(): Promise<number> {
    try {
      const response = await fetch(this.PRICE_API);
      const data = await response.json();
      return data.tron.usd;
    } catch (error) {
      // Fallback price if API fails
      console.warn('Failed to fetch TRX price, using fallback');
      return 0.12; // $0.12 as fallback TRX price
    }
  }

  private generateQRCode(address: string, usdtAmount: string): string {
    // Generate QR code for Tron payment (USDT)
    const tronPaymentURI = `tron:${address}?contractAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&amount=${usdtAmount}000000`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tronPaymentURI)}`;
  }

  private generatePaymentUrl(address: string, usdtAmount: string): string {
    // Generate payment link for Tron wallets
    return `https://tronlink.org/pay?address=${address}&amount=${usdtAmount}&token=USDT`;
  }

  // Generate TronScan link for verification
  generateTronScanLink(address: string): string {
    return `https://tronscan.org/#/address/${address}`;
  }
}

export const tronPaymentService = new TronPaymentService();