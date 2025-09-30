import { ElementType } from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ElementType | null;
  link?: string;
  image?: string;
  index: number
}