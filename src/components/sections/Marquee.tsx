"use client";

import { motion } from "framer-motion";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-brand-200/50 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 py-4 shadow-lg shadow-brand-600/20">
      {/* Animated gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-400/10 via-transparent to-brand-600/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <motion.span
            key={`${item}-${i}`}
            whileHover={{ scale: 1.05, color: "rgba(255,255,255,1)" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 cursor-default"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
