"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <SectionWrapper id="process" bg="brand">
      <SectionHeader
        eyebrow="How It Works"
        title="From concept to"
        highlight="delivery"
        description="A streamlined process designed for clarity, speed, and results you can trust."
        align="center"
      />

      <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delay={index * 0.12} scale>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-md shadow-brand-600/5 transition-shadow hover:shadow-xl hover:shadow-brand-600/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="font-display text-5xl font-bold text-brand-600/20 transition-colors group-hover:text-brand-600/30">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-surface-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-surface-600">
                {step.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
