import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateExperience(): string {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const experience = currentYear - startYear;
  
  if (experience <= 2) {
    return `${experience}+`;
  } else if (experience > 2 && experience <= 2.5) {
    return `${experience.toFixed(1)}+`;
  } else {
    return `${experience.toFixed(1)}+`;
  }
}
