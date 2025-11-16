import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, onClick, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-5 h-11 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap box-border";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-600 focus-visible:ring-brand",
    secondary: "bg-white text-brand border border-brand-200 hover:bg-brand-50 focus-visible:ring-brand",
    ghost: "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-white",
  } as const;

  const cn = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cn} onClick={onClick}>
      {children}
    </button>
  );
}