"use client";

import React from "react";
import { motion } from "framer-motion";

export const Vision = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-10 md:p-16 bg-soft-grey border border-navy/5 shadow-sm hover:border-royal/30 transition-colors duration-500"
          >
            <span className="text-royal font-heading font-semibold uppercase tracking-[0.3em] text-xs mb-6 inline-block">Our Vision</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8 leading-tight">
              To be the most trusted name in <span className="text-royal">corporate infrastructure</span> across the globe.
            </h2>
            <div className="w-16 h-1 bg-royal/20 mb-8" />
            <p className="text-navy/60 text-lg font-medium leading-relaxed">
              We envision a future where architecture isn't just about building spaces, but about crafting legacy-driven landmarks that inspire generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center p-10 md:p-16 bg-navy text-white shadow-xl"
          >
            <span className="text-royal font-heading font-semibold uppercase tracking-[0.3em] text-xs mb-6 inline-block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Delivering excellence through <span className="text-royal italic">innovation</span> and integrity.
            </h2>
            <div className="w-16 h-1 bg-royal/20 mb-8" />
            <p className="text-white/70 text-lg font-medium leading-relaxed">
              Our mission is to provide premium construction solutions that combine modern engineering with timeless corporate excellence, ensuring every client's vision is brought to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
