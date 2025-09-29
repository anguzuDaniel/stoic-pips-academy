export const flutterwaveConfig = {
  public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
  tx_ref: Date.now().toString(),
  currency: 'USD',
  payment_options: 'card, mobilemoney, banktransfer',
  customizations: {
    title: 'Stoic Pips Academy',
    description: 'Trading Course Payment',
    logo: 'https://your-logo-url.com/logo.png',
  },
};