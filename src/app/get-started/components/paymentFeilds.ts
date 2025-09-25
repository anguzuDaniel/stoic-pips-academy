export const paymentFields: Record<string, { label: string; name: string; type?: string }[]> = {
"Credit Card": [
    { label: "Card Number", name: "cardNumber", type: "tel" },
    { label: "Expiry Date", name: "expiryDate", type: "month" },
    { label: "CVV", name: "cvv", type: "tel" },
    { label: "Cardholder Name", name: "cardName", type: "text" },
],
"Bank Transfer": [
    { label: "Account Name", name: "accountName", type: "text" },
    { label: "Account Number", name: "accountNumber", type: "tel" },
    { label: "Bank Name", name: "bankName", type: "text" },
    { label: "Routing Number", name: "routingNumber", type: "tel" },
],
Bitcoin: [
    { label: "BTC Wallet Address", name: "btcWallet", type: "text" },
    { label: "Amount (BTC)", name: "btcAmount", type: "text" },
],
"Airtel Money": [
    { label: "Airtel Money Number", name: "airtelNumber", type: "tel" },
    { label: "Account Name", name: "airtelName", type: "text" },
],
"MTN Money": [
    { label: "MTN Money Number", name: "mtnNumber", type: "tel" },
    { label: "Account Name", name: "mtnName", type: "text" },
],
};