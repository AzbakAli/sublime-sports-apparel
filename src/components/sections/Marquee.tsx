"use client";

import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-brand-200/50 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 py-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.2em] text-white/90"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
