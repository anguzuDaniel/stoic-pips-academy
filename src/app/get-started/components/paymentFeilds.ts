export const paymentFields: Record<string, { label: string; name: string; type?: string; autocomplete?: string }[]> = {
  "Credit Card": [
    { label: "Card Number", name: "cardNumber", type: "tel", autocomplete: "cc-number" },
    { label: "Expiry Date", name: "expiryDate", type: "month", autocomplete: "cc-exp" },
    { label: "CVV", name: "cvv", type: "tel", autocomplete: "cc-csc" },
    { label: "Cardholder Name", name: "cardName", type: "text", autocomplete: "cc-name" },
  ],
  "Bitcoin": [
    { label: "Your BTC Wallet Address (Optional)", name: "btcWallet", type: "text", autocomplete: "crypto-wallet-address" },
  ],
};