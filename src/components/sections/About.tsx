"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  "Optimized stitch files for every machine",
  "Unlimited revisions on all design work",
  "Fast 24–48 hour digitizing turnaround",
  "Full-color sublimation & embroidery",
];

export default function About() {
  return (
    <SectionWrapper id="about" bg="mesh">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left" scale className="relative order-2 lg:order-1">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-brand-600/15 ring-1 ring-brand-200/50"
            >
              <Image
                src="/images/slide-jerseys.jpg"
                alt="Sublime Sports Apparel custom jerseys"
                fill
                quality={95}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-brand-600/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 shadow-xl shadow-brand-600/30 sm:-right-8"
            >
              <p className="font-display text-4xl font-bold text-white">
                <AnimatedCounter value={10} suffix="+" />
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                Years of Excellence
              </p>
            </motion.div>

            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-3xl bg-brand-500/20" />
          </div>
        </Reveal>

        <Reveal direction="right" scale className="order-1 lg:order-2">
          <span className="inline-block rounded-full bg-brand-600/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            About Sublime
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-surface-900 md:text-5xl">
            Where precision meets{" "}
            <span className="text-gradient-brand">passion</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-surface-600">
            Sublime Sports Apparel is a full-service embroidery, digitizing,
            and apparel company based in Pakistan, serving clients worldwide.
            We combine advanced production with meticulous craftsmanship.
          </p>
          <p className="mt-4 leading-relaxed text-surface-600">
            From a single patch to a full team uniform run, every project
            receives the same level of care and attention to detail.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-start gap-3 rounded-xl bg-white/70 p-3 backdrop-blur-sm border border-brand-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 shadow-md shadow-brand-600/20">
                  <Check size={11} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-surface-700">{item}</span>
              </motion.li>
            ))}
          </ul>

          <Link
            href="#services"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:from-brand-700 hover:to-brand-600 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5"
          >
            Explore our services
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
