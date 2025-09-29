interface PaymentMethodsProps {
  price: string;
  serviceTitle: string;
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentError: (error: string) => void;
  activeMethod: string | null;
  setActiveMethod: (method: string | null) => void;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
    onFormDataChange: (field: string, value: string) => void;
}