"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEADERSHIP } from "@/constants/data";
import { BadgeCheck, Users, Award } from "lucide-react";

export const Leadership = () => {
  return (
    <section id="leadership" className="py-24 md:py-40 bg-soft-grey relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/[0.02] -skew-x-12" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              subtitle="The Visionary"
              title={LEADERSHIP.name}
              description={LEADERSHIP.role}
            />
            
            <div className="space-y-8">
              <div className="bg-white p-6 border-l-4 border-royal shadow-sm">
                <p className="text-navy/70 text-lg font-light leading-relaxed italic">
                  "{LEADERSHIP.bio}"
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-navy text-white">
                <Award className="text-royal shrink-0" size={32} />
                <p className="text-sm font-bold tracking-wide uppercase">
                  {LEADERSHIP.experience}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {LEADERSHIP.credentials.map((cred, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-white/50 p-3 border border-navy/5 shadow-sm"
                  >
                    <BadgeCheck className="text-royal shrink-0" size={16} />
                    <span className="text-[11px] font-bold text-navy/80 uppercase tracking-tighter">{cred}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-navy font-heading font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                  <Users size={16} className="text-royal" />
                  Associations
                </h4>
                <div className="flex flex-wrap gap-3">
                  {LEADERSHIP.associations?.map((assoc) => (
                    <span key={assoc} className="px-4 py-1 bg-white border border-navy/10 text-navy/60 text-xs font-bold tracking-widest">
                      {assoc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden rounded-none shadow-2xl">
              <img
                src={LEADERSHIP.image}
                alt={LEADERSHIP.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-60" />
            </div>
            {/* Royal Accent */}
            <div className="w-full h-2 bg-royal mt-6 max-w-lg mx-auto shadow-lg shadow-royal/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
