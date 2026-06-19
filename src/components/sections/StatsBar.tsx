"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-surface-900 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,127,255,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1} className="text-center">
              <p className="font-display text-4xl font-bold text-white md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
