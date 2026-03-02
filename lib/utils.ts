import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateExperience(): string {
  const startDate = new Date(2022, 11, 1); // March 2023
  const currentDate = new Date();
  
  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();
  
  let totalMonths = years * 12 + months;
  
  // Handle case where day of month hasn't been reached yet
  if (currentDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }
  
  const experienceInYears = totalMonths / 12;
  
  return `${experienceInYears.toFixed(1)}+`;
}
