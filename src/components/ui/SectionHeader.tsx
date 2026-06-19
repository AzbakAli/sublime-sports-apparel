"use client";

import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <Reveal
      scale
      className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span
        className={clsx(
          "inline-block text-sm font-semibold uppercase tracking-[0.2em]",
          light ? "text-brand-300" : "text-brand-600"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={clsx(
          "mt-3 font-display text-4xl font-bold leading-tight md:text-5xl",
          light ? "text-white" : "text-surface-900"
        )}
      >
        {title}{" "}
        {highlight && (
          <span className={light ? "text-brand-300" : "text-gradient-brand"}>
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg",
            light ? "text-white/70" : "text-surface-600"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
