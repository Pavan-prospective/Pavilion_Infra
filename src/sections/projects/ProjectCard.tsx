"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  area: string;
  image: string;
}

export const ProjectCard = ({
  title,
  category,
  location,
  area,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/5] overflow-hidden cursor-pointer shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-cobalt font-heading font-medium text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          {title}
        </h3>
        
        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="space-y-1">
            <p className="text-white/60 text-xs uppercase tracking-wider">{location}</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">{area}</p>
          </div>
          <div className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-white group-hover:bg-royal group-hover:border-royal group-hover:text-white transition-all duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>
      
      {/* Subtle border overlay */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </motion.div>
  );
};
