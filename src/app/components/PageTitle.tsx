"use client";

import { useTheme } from "next-themes";

interface PageTitleProps {
    text: String
}

export default function PageTitle({ text }: PageTitleProps) {
    const { theme } = useTheme();

    const headingColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

    return (
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg ${headingColor}`}>
            {text}
        </h2>
    );
}