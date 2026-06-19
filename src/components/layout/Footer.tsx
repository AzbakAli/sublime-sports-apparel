"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import Reveal from "@/components/ui/Reveal";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-surface-900">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner — full width, above footer content */}
        <Reveal className="pt-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 40%)",
              }}
            />
            <div className="relative">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to elevate your brand?
              </p>
              <p className="mt-2 max-w-lg text-sm text-brand-100 sm:text-base">
                Get a free quote on digitizing, patches, or custom apparel — we
                respond within 24 hours.
              </p>
            </div>
            <Link
              href="#contact"
              className="relative mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:mt-0"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Footer links */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <BrandLogo variant="dark" size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Premium embroidery digitizing, custom patches, and sports apparel.
              Crafted with precision, delivered with pride.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:info@sublimesportsapparel.com"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-brand-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/20">
                    <Mail size={15} className="text-brand-400" />
                  </span>
                  info@sublimesportsapparel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-brand-300"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600/20">
                    <Phone size={15} className="text-brand-400" />
                  </span>
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600/20">
                  <MapPin size={15} className="text-brand-400" />
                </span>
                <span>
                  Lahore, Pakistan
                  <span className="mt-0.5 block text-xs text-white/35">
                    Serving clients worldwide
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px origin-left bg-gradient-to-r from-brand-600/50 via-white/10 to-transparent"
        />

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {year} Sublime Sports Apparel. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Digitizing · Patches · Apparel · Vector Art
          </p>
        </div>
      </div>
    </footer>
  );
}
