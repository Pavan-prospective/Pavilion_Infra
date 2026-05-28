"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-navy py-32 md:py-0">
      {/* Background with Parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-navy/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-royal font-heading font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
            Pioneering Infrastructure Excellence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white mb-8 tracking-tighter leading-[0.9]">
            ENGINEERING <br />
            <span className="blue-text-gradient italic">LANDMARK</span> SPACES
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Delivering premium infrastructure and commercial construction projects that redefine modern corporate architectural excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/projects">
              <Button size="lg" variant="royal" className="min-w-[200px] rounded-none shadow-xl shadow-royal/20">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white/40 text-white hover:bg-white hover:text-navy rounded-none">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Hero Certifications Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-white/50 text-[10px] md:text-xs tracking-[0.15em] uppercase font-semibold">
            <span className="text-white/30 border-r border-white/10 pr-4 hidden sm:inline-block">Certified ISO Standards</span>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 bg-white/5 backdrop-blur-md px-5 py-3 border border-white/10 rounded-3xl sm:rounded-full">
              <span className="text-white hover:text-royal transition-colors font-bold">ISO 9001:2015</span>
              <span className="w-1 h-1 rounded-full bg-royal hidden sm:block" />
              <span className="text-white hover:text-royal transition-colors font-bold">ISO 14001:2015</span>
              <span className="w-1 h-1 rounded-full bg-royal hidden sm:block" />
              <span className="text-white hover:text-royal transition-colors font-bold">ISO 45001:2018</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] rotate-90 origin-left translate-x-2">
          Scroll
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-royal to-transparent" />
      </motion.div>
    </section>
  );
};
