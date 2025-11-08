"use client";

export function Footer() {
  return (
    <footer className="relative w-full py-16 sm:py-20 overflow-hidden bg-black text-white border-t border-white/5">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-sm text-gray-400 font-light">
            Created by <span className="text-white">MagistrTheOne</span> x <span className="text-white">NULLXES</span> 2025
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
            <span>Krasnodar</span>
            <span className="text-lg">🇷🇺</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
