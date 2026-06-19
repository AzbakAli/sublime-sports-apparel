"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import BrandLogo from "@/components/ui/BrandLogo";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setOverHero(y < window.innerHeight * 0.85);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const onHero = overHero && !isScrolled;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-surface-200/80 bg-white/90 py-2 shadow-lg shadow-surface-900/5 backdrop-blur-xl"
          : "bg-gradient-to-b from-surface-900/80 via-surface-900/40 to-transparent py-4 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="#home" className="relative z-10">
            <BrandLogo
              variant={onHero && !mobileOpen ? "light" : "default"}
              size="md"
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                className={clsx(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                  onHero
                    ? "text-white/85 hover:text-white"
                    : "text-surface-600 hover:text-brand-600"
                )}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="#contact"
              className={clsx(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 shadow-lg",
                onHero
                  ? "bg-white text-surface-900 shadow-white/20 hover:bg-brand-50 hover:shadow-xl"
                  : "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand-600/25 hover:from-brand-700 hover:to-brand-600 hover:shadow-xl hover:shadow-brand-600/40"
              )}
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        <motion.button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={clsx(
            "relative z-10 rounded-xl p-2.5 transition-colors lg:hidden",
            onHero && !mobileOpen
              ? "text-white hover:bg-white/10"
              : "text-surface-800 hover:bg-surface-100"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-surface-200/80 bg-white/95 backdrop-blur-xl shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-surface-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={closeMobile}
                  className="mt-2 block rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-600/25"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
