import { useTheme } from "next-themes";

export default function ContactBackground() {
  const { theme } = useTheme();

  const bgImage = theme === "dark" ? "/world_light.svg" : "/world_dark.svg";

  return (
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none transition-all duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
}
