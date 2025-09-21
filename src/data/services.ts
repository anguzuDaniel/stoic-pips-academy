// src/data/services.ts
import { ChartBarIcon, CurrencyDollarIcon, AcademicCapIcon, CogIcon } from "@heroicons/react/24/solid";

export const services = [
  {
    title: "Mentorship",
    description: "Structured trading mentorship to help you grow from beginner to pro.",
    link: "#mentorship",
    icon: AcademicCapIcon,
    image: "/mentorship.jpg",
  },
  {
    title: "Signals",
    description: "Receive high-probability trade signals and market insights.",
    link: "#signals",
    icon: ChartBarIcon,
    image: "/signals.jpg",
  },
  {
    title: "Account Management",
    description: "Grow your trading account with professional guidance.",
    link: "#account",
    icon: CurrencyDollarIcon,
    image: "/managment.webp",
  },
  {
    title: "Robot Building",
    description: "Custom trading robots to automate strategies and maximize efficiency.",
    link: "#robot",
    icon: CogIcon,
    image: "/robot.jpg",
  },
];
