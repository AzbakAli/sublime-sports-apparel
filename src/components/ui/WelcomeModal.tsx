"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Trophy, Shirt } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the welcome modal
    const seen = localStorage.getItem("welcome-modal-seen");
    if (!seen) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("welcome-modal-seen", "true");
    setHasSeen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-900/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-lg w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-brand-100/50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-600/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 rounded-full p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-600"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-4 shadow-lg shadow-brand-500/30"
              >
                <Shirt size={32} className="text-white" />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl font-bold text-surface-900 md:text-4xl"
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                  Sublime
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg text-surface-600"
              >
                Your premium destination for custom sports apparel, embroidery digitizing, and professional patches.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100">
                    <Sparkles size={16} className="text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-surface-700">
                    Premium Quality Craftsmanship
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100">
                    <Trophy size={16} className="text-brand-600" />
                  </div>
                  <span className="text-sm font-medium text-surface-700">
                    Trusted by Teams & Brands
                  </span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleClose}
                className="mt-8 w-full rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-600/25 transition-all hover:from-brand-700 hover:to-brand-600 hover:shadow-brand-600/40"
              >
                Explore Our Services
              </motion.button>

              {/* Skip link */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-center text-xs text-surface-400"
              >
                Press anywhere or click to continue
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
