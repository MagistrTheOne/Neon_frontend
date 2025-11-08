"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  variant?: "default" | "gradient" | "minimal" | "bold";
}

export function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  variant = "default",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // skip SSR hydration mismatch

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.15 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;

    let start: number | null = null;
    let frame: number;

    const easeOutExpo = (x: number) =>
      x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    const animate = (time: number) => {
      if (start === null) start = time;
      const elapsed = time - start - delay;
      const progress = Math.min(Math.max(elapsed / duration, 0), 1);
      const eased = easeOutExpo(progress);
      const value = Math.floor(eased * end);

      setCount(value);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [triggered, end, duration, delay]);

  const format = (n: number): string => {
    if (n >= 1e12) return (n / 1e12).toFixed(1) + "T";
    if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return n.toString();
  };

  const variants = {
    default: "text-white font-mono tracking-wide",
    gradient:
      "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold",
    minimal: "text-slate-400 font-light",
    bold: "text-white font-bold text-4xl sm:text-5xl",
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block transition-transform duration-500 will-change-transform",
        variants[variant],
        className
      )}
    >
      {prefix}
      {format(count)}
      {suffix}
    </span>
  );
}
