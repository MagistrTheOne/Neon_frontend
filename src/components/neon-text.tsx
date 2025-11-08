"use client";

import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "blue" | "purple" | "green" | "yellow";
  hover?: boolean;
}

export function NeonText({
  children,
  className = "",
  variant = "cyan",
  hover = false,
}: NeonTextProps) {
  return (
    <span
      className={cn(
        "text-white transition-all duration-300 ease-out select-none",
        hover && "hover:text-gray-300",
        className
      )}
    >
      {children}
    </span>
  );
}
