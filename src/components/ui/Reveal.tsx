"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  scale?: boolean;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  scale = false,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const offsets = {
    up: { y: 48, x: 0 },
    down: { y: -48, x: 0 },
    left: { x: 48, y: 0 },
    right: { x: -48, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...offset,
        ...(scale ? { scale: 0.96 } : {}),
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : {
              opacity: 0,
              ...offset,
              ...(scale ? { scale: 0.96 } : {}),
            }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
