"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  PenTool,
  Scissors,
  Shirt,
  Gift,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap = {
  needle: Scissors,
  patch: Sparkles,
  pen: PenTool,
  shirt: Shirt,
  gift: Gift,
} as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 20);
    y.set((e.clientY - rect.top - rect.height / 2) / 20);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal delay={index * 0.08} scale>
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: springY, rotateY: springX }}
        className="group relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-md shadow-brand-600/5 transition-shadow duration-500 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/10 transition-transform duration-500 group-hover:scale-150" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative flex items-start justify-between">
          <div className="rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-3.5 text-white shadow-lg shadow-brand-600/30 transition-transform duration-300 group-hover:scale-110">
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            {service.stat}
          </span>
        </div>

        <h3 className="relative mt-6 font-display text-xl font-bold text-surface-900">
          {service.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-surface-600">
          {service.description}
        </p>

        <div className="relative mt-6 flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more
          <ArrowUpRight size={14} />
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="services" bg="light">
      <SectionHeader
        eyebrow="What We Do"
        title="Services built for"
        highlight="serious brands"
        description="Comprehensive digitizing, patches, and apparel solutions — delivered with the precision your brand demands."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-4xl">
        {services.slice(3).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index + 3} />
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:shadow-xl hover:shadow-brand-600/40"
        >
          Request a Custom Quote
          <ArrowUpRight size={16} />
        </Link>
      </Reveal>
    </SectionWrapper>
  );
}
