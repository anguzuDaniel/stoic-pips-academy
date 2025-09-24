"use client";

import { useTheme } from "next-themes";
import TextProps from "./TextProps";

export default function PageText({ text }: TextProps) {
    const { theme } = useTheme();

    const textColor = theme === "dark" ? "text-gray-300" : "text-gray-700";

    return (
        <p className={`mb-4 drop-shadow-md ${textColor}`}>
            {text}
        </p>
    );
}