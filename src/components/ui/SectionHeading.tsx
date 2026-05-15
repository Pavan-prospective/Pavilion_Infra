"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-16 md:mb-24",
      align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block text-royal font-heading font-semibold uppercase tracking-[0.3em] text-xs mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-heading font-bold text-navy mb-6 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-navy/60 text-lg font-light leading-relaxed"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        className={cn(
          "h-[2px] bg-royal mt-8",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
