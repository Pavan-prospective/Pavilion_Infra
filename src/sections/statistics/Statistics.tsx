"use client";

import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/constants/data";

export const Statistics = () => {
  return (
    <section className="py-20 bg-white border-y border-navy/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-2">
                {stat.value}
              </h3>
              <p className="text-royal uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
