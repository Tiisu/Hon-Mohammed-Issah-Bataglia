import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ title, subtitle, children, className = "" }: Props) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 sm:py-16 ${className}`}>
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}