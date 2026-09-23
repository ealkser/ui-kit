import { twMerge } from "tailwind-merge";
import type { ClassValue } from "./clsx.ts";
import { clsx } from "./clsx.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
