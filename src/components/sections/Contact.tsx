"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle2, MapPin } from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/data";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqItems[0]?.id ?? null);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contact" bg="light">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's start your"
            highlight="next project"
            description="Tell us about your digitizing, patch, or apparel needs. We respond within 24 hours with a detailed quote."
          />

          <Reveal delay={0.1} className="mt-6 flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/80 px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/15">
              <MapPin size={18} className="text-brand-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-800">Based in Pakistan</p>
              <p className="text-xs text-surface-500">Karachi · Serving clients worldwide</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} scale>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {(
                  [
                    ["firstName", "First Name"],
                    ["lastName", "Last Name"],
                    ["phone", "Phone"],
                    ["email", "Email"],
                  ] as const
                ).map(([field, label]) => (
                  <motion.div
                    key={field}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor={field}
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-700/70"
                    >
                      {label}
                    </label>
                    <motion.input
                      id={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      required={field === "email"}
                      value={formState[field]}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          [field]: e.target.value,
                        }))
                      }
                      whileFocus={{ scale: 1.02 }}
                      className="w-full rounded-xl border border-brand-200/80 bg-white/80 px-4 py-3 text-sm text-surface-800 transition-all duration-300 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 shadow-sm hover:border-brand-300"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-700/70"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  whileFocus={{ scale: 1.02 }}
                  className="w-full resize-none rounded-xl border border-brand-200/80 bg-white/80 px-4 py-3 text-sm text-surface-800 transition-all duration-300 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 shadow-sm hover:border-brand-300"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:from-brand-700 hover:to-brand-600 hover:shadow-xl hover:shadow-brand-600/40"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.2} scale direction="right">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-brand-100 bg-white p-8 shadow-xl shadow-brand-600/10 lg:p-10"
          >
            <h3 className="font-display text-2xl font-bold text-surface-900">
              Common Questions
            </h3>
            <p className="mt-2 text-sm text-surface-500">
              Quick answers before you reach out.
            </p>

            <div className="mt-8 space-y-2">
              {faqItems.map((item, i) => {
                const isOpen = openFaq === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={clsx(
                      "overflow-hidden rounded-2xl border transition-all duration-300",
                      isOpen
                        ? "border-brand-300 bg-brand-50/80 shadow-md"
                        : "border-brand-100 bg-white hover:border-brand-200 hover:shadow-md"
                    )}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors"
                    >
                      <span className="pr-4 text-sm font-semibold text-surface-800">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-brand-600"
                        />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-5 pb-4 text-sm leading-relaxed text-surface-600">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
