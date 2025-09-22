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
  hover = false 
}: NeonTextProps) {
  const variantClasses = {
    cyan: "text-cyan-400",
    blue: "text-blue-400", 
    purple: "text-purple-400",
    green: "text-green-400",
    yellow: "text-yellow-400"
  };

  const hoverClasses = {
    cyan: "hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    blue: "hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    purple: "hover:text-purple-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]",
    green: "hover:text-green-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    yellow: "hover:text-yellow-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
  };

  return (
    <span 
      className={cn(
        "transition-all duration-300",
        variantClasses[variant],
        hover && hoverClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
