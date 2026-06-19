"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

const INTERVAL = 8000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            Client Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            Trusted by teams worldwide
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote
                size={40}
                className="mx-auto text-brand-300/40"
                fill="currentColor"
              />
              <blockquote className="mt-8 font-accent text-2xl italic leading-relaxed text-white/95 md:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-10">
                <p className="font-display text-lg font-bold text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-sm text-brand-200">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 shadow-lg"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-white shadow-lg" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <motion.button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20 shadow-lg"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
