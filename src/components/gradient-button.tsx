"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "default" | "lg";
  disabled?: boolean;
}

export function GradientButton({ 
  children, 
  onClick, 
  className = "",
  variant = "primary",
  size = "default",
  disabled = false
}: GradientButtonProps) {
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg hover:shadow-cyan-500/25",
    secondary: "glass-morphism hover:glass-card text-white border-cyan-400/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20",
    outline: "border-2 border-gradient-to-r from-cyan-500 to-blue-600 bg-transparent text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-600/10"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "transition-all duration-300 font-semibold group relative overflow-hidden",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Gradient overlay for hover effect */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </Button>
  );
}
