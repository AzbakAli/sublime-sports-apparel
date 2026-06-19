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
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-700/70"
                    >
                      {label}
                    </label>
                    <input
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
                      className="w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-surface-800 transition-all focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-700/70"
                >
                  Message
                </label>
                <textarea
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
                  className="w-full resize-none rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-surface-800 transition-all focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:shadow-xl hover:shadow-brand-600/35"
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
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.2} scale direction="right">
          <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-lg shadow-brand-600/5 lg:p-10">
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
                    className="overflow-hidden rounded-2xl border border-brand-50 bg-brand-50/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-brand-50"
                    >
                      <span className="pr-4 text-sm font-semibold text-surface-800">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={clsx(
                          "shrink-0 text-brand-600 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
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
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
