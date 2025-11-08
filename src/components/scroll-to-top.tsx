"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <Button
      onClick={handleClick}
      size="icon"
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full p-3 transition-all duration-300 border border-cyan-400/40 text-white backdrop-blur-lg",
        "bg-black/40 hover:bg-cyan-500/10 hover:border-cyan-400/60",
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:-translate-y-1" />
    </Button>
  );
}
