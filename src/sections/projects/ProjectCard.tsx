"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  area: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  category,
  location,
  area,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#F8FAFC] border border-royal/10 hover:border-royal/30 p-8 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl h-full flex flex-col"
    >
      <div className="flex flex-col h-full justify-between space-y-6">
        <div>
          <span className="text-royal font-heading font-semibold text-xs uppercase tracking-widest mb-3 block">
            {category}
          </span>
          <h3 className="text-2xl font-heading font-bold text-navy mb-3">
            {title}
          </h3>
          <p className="text-navy/60 text-sm leading-relaxed">
            Experience unparalleled luxury and architectural excellence with {title}. 
            A premier development designed to set new benchmarks in modern living and corporate infrastructure.
          </p>
        </div>
        
        <div className="pt-6 border-t border-royal/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="space-y-1">
            <span className="text-royal/60 text-[10px] font-bold uppercase tracking-widest">Location</span>
            <p className="text-navy font-medium text-sm">{location}</p>
          </div>
          <div className="space-y-1 text-right">
            <span className="text-royal/60 text-[10px] font-bold uppercase tracking-widest">Area</span>
            <p className="text-navy font-medium text-sm">{area}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
