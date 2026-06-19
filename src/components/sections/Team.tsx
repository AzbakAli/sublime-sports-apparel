"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <SectionWrapper id="team" bg="mesh">
      <SectionHeader
        eyebrow="Our Team"
        title="People behind"
        highlight="the craft"
        description="Reach out directly to our team in Pakistan — we're here to help bring your project to life."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.1} scale>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-md shadow-brand-600/5 transition-all hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-bold text-white shadow-lg shadow-brand-600/25">
                {member.name.replace("Mr. ", "").charAt(0)}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
                {member.title}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-surface-900">
                {member.name}
              </h3>
              <a
                href={`mailto:${member.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-surface-500 transition-colors hover:text-brand-600"
              >
                <Mail size={14} />
                {member.email}
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
