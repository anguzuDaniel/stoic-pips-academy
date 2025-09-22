import { useTheme } from "next-themes";

export default function BackgroundOverlay() {
    const { theme } = useTheme();

    return (
        <div>
            {/* Background Image Overlay */}
            <div
                className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500
                ${theme === "dark" ? "bg-[url('/hero_background_1.svg')] opacity-20" : "bg-[url('/image.png')] opacity-10"}`}
            ></div>

            <div
                className={`absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500
                ${theme === "dark" ? "bg-[url('/hero_background_2.svg')] opacity-20" : "bg-[url('/image.png')] opacity-10"}`}
            ></div>
        </div>
    );
}