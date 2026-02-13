import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-glow ${className}`}>
      {children}
    </div>
  );
}

export function Button({
  children,
  className = "",
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold tracking-wide " +
    "border border-gold-500/40 bg-gradient-to-b from-gold-400/20 to-gold-700/20 " +
    "hover:from-gold-400/30 hover:to-gold-700/30 active:scale-[0.99] transition " +
    "shadow-glow";
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}
