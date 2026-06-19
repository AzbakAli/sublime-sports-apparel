"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-surface-900 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,127,255,0.15),transparent_70%)]" />
      {/* Animated gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-600/5 via-transparent to-brand-400/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:border-brand-400/30 hover:bg-white/10 transition-all duration-300"
              >
                <p className="font-display text-4xl font-bold text-white md:text-5xl text-shadow-lg">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
