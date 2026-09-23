import type React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

// Варианты цветов
export type ButtonVariant = "default" | "primary" | "secondary" | "danger";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: {
    start?: string;
    end?: string;
    button?: string;
  };
}

// Стили вариантов
const variantStyles: Record<ButtonVariant, string> = {
  default: cn(
    "text-mauve-900 bg-mauve-100 border-mauve-200 hover:bg-mauve-200 active:bg-mauve-300",
    "focus-visible:ring-mauve-500"
  ),
  primary: cn(
    "text-blue-900 bg-blue-100 border-blue-200 hover:bg-blue-200 active:bg-blue-300",
    "focus-visible:ring-blue-500"
  ),
  secondary: cn(
    "text-slate-900 bg-slate-100 border-slate-200 hover:bg-slate-200 active:bg-slate-300",
    "focus-visible:ring-slate-500"
  ),
  danger: cn(
    "text-red-900 bg-red-100 border-red-200 hover:bg-red-200 active:bg-red-300",
    "focus-visible:ring-red-500"
  ),
};

export const Button: React.FC<ButtonProps> = ({
  className,
  type = "submit",
  variant = "default",
  children,
  startContent,
  endContent,
  classNames,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        // Базовые неизменяемые стили геометрии и анимации
        "inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium rounded-lg border transition-colors duration-200 cursor-pointer",

        // Стили конкретного цвета
        variantStyles[variant],

        // Общие стили фокуса и disabled
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "disabled:pointer-events-none disabled:opacity-50",

        className,
        classNames?.button
      )}
      {...props}
    >
      {startContent && (
        <span className={cn("flex items-center shrink-0", classNames?.start)}>
          {startContent}
        </span>
      )}

      {children}

      {endContent && (
        <span className={cn("flex items-center shrink-0", classNames?.end)}>
          {endContent}
        </span>
      )}
    </button>
  );
};
