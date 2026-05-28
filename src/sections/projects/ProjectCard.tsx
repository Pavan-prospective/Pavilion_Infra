"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  area: string;
  acres: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  category,
  location,
  area,
  acres,
}: ProjectCardProps) => {
  // Helper to parse strings like "50 Acres" into { value: "50", unit: "Acres" }
  const parseValueAndUnit = (str: string) => {
    if (!str) return { value: "", unit: "" };
    const parts = str.trim().split(/\s+/);
    const value = parts[0] || "";
    const unit = parts.slice(1).join(" ") || "";
    return { value, unit };
  };

  const parsedAcres = parseValueAndUnit(acres);
  const parsedArea = parseValueAndUnit(area);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-gradient-to-b from-[#EBF5FB]/80 via-[#F5FAFE]/50 to-white border border-[#E2F0FD] hover:border-royal/30 p-6 sm:p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 rounded-[28px] h-full flex flex-col justify-between text-center"
    >
      <div className="flex flex-col h-full justify-between space-y-5">
        {/* Header Details */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy leading-snug tracking-tight">
            {title}
          </h3>
          <span className="text-xs font-bold text-royal/80 tracking-widest uppercase block">
            {location}
          </span>
          <p className="text-navy/70 font-medium text-sm">
            {category}
          </p>
        </div>

        {/* Divider and Values */}
        <div className="flex flex-col items-center">
          {/* Centered Thin Divider */}
          <div className="w-16 h-[1px] bg-royal/20 mb-5" />

          {/* Acres Detail */}
          {parsedAcres.value && (
            <div className="flex items-baseline justify-center mb-3">
              <span className="text-2xl sm:text-3xl font-heading font-semibold text-navy leading-none">
                {parsedAcres.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-navy/60 ml-1.5">
                {parsedAcres.unit}
              </span>
            </div>
          )}

          {/* Total Area Detail */}
          {parsedArea.value && (
            <div className="flex items-baseline justify-center mt-1">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-navy leading-none tracking-tight">
                {parsedArea.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-navy/60 ml-1.5">
                {parsedArea.unit}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
