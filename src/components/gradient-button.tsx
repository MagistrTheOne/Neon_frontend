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
  disabled = false,
}: GradientButtonProps) {
  const variantClasses: Record<string, string> = {
    primary:
      "relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-cyan-500/25 active:scale-[0.98]",
    secondary:
      "relative glass-morphism border border-cyan-400/40 text-white hover:border-cyan-400 hover:bg-white/5 transition-all",
    outline:
      "relative border-2 border-transparent bg-clip-border text-white before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-600 before:opacity-60 hover:before:opacity-100 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-600/10",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg transition-all duration-300 overflow-hidden",
        "focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]",
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {/* gradient overlay hover for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Button>
  );
}
