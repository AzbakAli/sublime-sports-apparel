"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import clsx from "clsx";
import { heroSlides } from "@/lib/data";

const SLIDE_INTERVAL = 7000;
const IMAGE_QUALITY = 95;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; width: number; height: number; left: number; top: number; duration: number; delay: number }>>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    if (paused) return;
    const start = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(elapsed / SLIDE_INTERVAL, 1));
      if (elapsed < SLIDE_INTERVAL) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [current, paused]);

  const slide = heroSlides[current];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-surface-900">
      {/* Background slides with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: SLIDE_INTERVAL / 1000 + 1,
              ease: "linear",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={current === 0}
              quality={IMAGE_QUALITY}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900/85 via-surface-900/55 to-brand-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-transparent to-brand-400/10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              width: particle.width,
              height: particle.height,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-24 pb-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8 lg:gap-8">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md shadow-lg shadow-white/10"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400 shadow-lg shadow-brand-400/50" />
                  {slide.tag}
                </motion.span>

                <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl text-shadow-lg">
                  {slide.headline}
                  <span className="mt-1 block bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent text-shadow">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg text-shadow">
                  {slide.description}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaHref}
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:from-brand-500 hover:to-brand-400 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 transition-transform group-hover:translate-x-1"
                    />
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-500 to-brand-400 transition-transform duration-500 group-hover:translate-x-0" />
                  </Link>
                  <Link
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white/50 hover:bg-white/15 hover:-translate-y-0.5"
                  >
                    How It Works
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide preview strip */}
          <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:gap-3">
            {heroSlides.map((s, index) => (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => goTo(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={clsx(
                  "group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-500",
                  index === current
                    ? "border-brand-400/60 bg-white/10 shadow-xl shadow-brand-600/20 backdrop-blur-md"
                    : "border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 hover:shadow-lg"
                )}
              >
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/10">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    quality={85}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={clsx(
                      "truncate font-display text-sm font-bold uppercase tracking-wide",
                      index === current ? "text-white" : "text-white/60"
                    )}
                  >
                    {s.tag}
                  </p>
                  <p className="truncate text-xs text-white/40">{s.highlight}</p>
                </div>
                {index === current && (
                  <motion.div
                    layoutId="slideActive"
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-400 to-brand-300"
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md shadow-lg transition-colors hover:bg-white/20"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </motion.button>
          <span className="font-display text-sm font-semibold tabular-nums text-white/70">
            {String(current + 1).padStart(2, "0")}
            <span className="text-white/30"> / </span>
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md shadow-lg transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            type="button"
            onClick={next}
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md shadow-lg transition-colors hover:bg-white/20"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>

        <div className="hidden gap-2 sm:flex">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="group relative h-1 w-10 overflow-hidden rounded-full bg-white/20"
            >
              <motion.span
                className={clsx(
                  "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 transition-all duration-300",
                  index === current ? "w-full" : "w-0 group-hover:w-1/2"
                )}
                style={
                  index === current && !paused
                    ? { width: `${progress * 100}%` }
                    : undefined
                }
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
