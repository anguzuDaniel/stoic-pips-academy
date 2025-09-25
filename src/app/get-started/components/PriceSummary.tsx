"use client";

import { Service } from "@/data/Service";
import { useTheme } from "next-themes";

export default function PriceSummary({
  price,
  originalPrice,
}: Service) {
    const { theme } = useTheme();
    
    const headingColor = theme === "dark" ? "text-white" : "text-gray-900";
    const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";
    const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
    const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

    const getNumericPrice = (priceString: string): number => {
        return parseInt(priceString.replace(/\D/g, '')) || 0;
    };

    const getDiscountAmount = (): string => {
        if (!originalPrice) return '0';
        
        const original = getNumericPrice(originalPrice);
        const current = getNumericPrice(price);
        const discount = original - current;
        
        return discount > 0 ? discount.toString() : '0';
    };

    const formatCurrency = (value: string): string => {
        const numericValue = getNumericPrice(value);
        if (numericValue === 0) return '$0';
        
        return `$${numericValue.toLocaleString()}`;
    };

    return(
        <div className={`mb-8 p-6 rounded-lg border ${borderColor} ${cardBg}`}>
            <div className="flex justify-between items-center mb-3">
                <span className={`text-lg ${textColor}`}>Course Fee</span>
                <span className={`text-lg ${textColor}`}>{price}</span>
            </div>
            {originalPrice && (
                <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-400">Discount</span>
                    <span className="text-green-500 font-semibold">
                        -{formatCurrency(getDiscountAmount())}
                    </span>
                </div>
            )}
            <div className="border-t border-gray-300 dark:border-gray-600 my-4"></div>
            <div className="flex justify-between items-center">
                <span className={`text-xl font-bold ${headingColor}`}>Total Amount</span>
                <span className="text-2xl font-bold text-green-500">{price}</span>
            </div>
        </div>
    );
}