import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",  // optional if still using pages/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
