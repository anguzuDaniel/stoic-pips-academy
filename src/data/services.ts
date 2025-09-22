import {
  ChartBarIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CogIcon,
  WalletIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ElementType } from "react";

export interface Service {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
}

export const services: Record<string, Service> = {
  "group-mentorship": {
    title: "Group Mentorship",
    description:
      "Structured trading guidance from beginner to pro with group sessions.",
    price: "$100",
    originalPrice: "$299",
    features: [
      "Weekly Zoom Mentorship",
      "Lifetime Access",
      "Price Action Mastery",
      "Supply & Demand Training",
    ],
  },
  "1on1-mentorship": {
    title: "1-on-1 Mentorship",
    description: "Personalized one-on-one training with Daniel Anguzu.",
    price: "$300",
    originalPrice: "$499",
    features: [
      "Private Sessions",
      "Signals",
      "Lifetime Access",
      "Custom Strategy Guidance",
    ],
  },
  "signals": {
    title: "Signals",
    description: "High-probability trading signals for Forex & Indices.",
    price: "$20/month",
    originalPrice: "$50/month",
    features: [
      "Daily Signals",
      "Synthetic Indices",
      "Forex Pairs",
      "Telegram Access",
    ],
  },
  "account-management": {
    title: "Account Management",
    description:
      "We manage your account with professional low-risk strategies.",
    price: "$500",
    originalPrice: "$699",
    features: ["Full Management", "Low-Risk Strategy", "Weekly Reports"],
  },
  "robot-building": {
    title: "Robot Building",
    description: "Custom robots designed & backtested for your strategy.",
    price: "$600",
    originalPrice: "$1499",
    features: [
      "Custom Bot Design",
      "Backtested Strategy",
      "Installation Support",
      "Lifetime Updates",
    ],
  },
};
