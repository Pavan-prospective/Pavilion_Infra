"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/data";
import * as Icons from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Core Expertise"
          title="Our Services"
          description="Comprehensive corporate infrastructure solutions tailored for excellence and efficiency."
          align="center"
        />

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-[#F8FAFC] border border-royal/10 hover:border-royal/30 rounded-2xl group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full shadow-sm"
              >
                <div className="mb-10 text-royal group-hover:scale-110 transition-transform duration-500">
                  {Icon && <Icon size={48} strokeWidth={1} />}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-royal leading-tight">
                    {service.title}
                    {service.subtitle && (
                      <span className="block text-[11px] font-bold text-royal/60 uppercase tracking-widest mt-2">
                        {service.subtitle}
                      </span>
                    )}
                  </h3>

                  <div className="space-y-6 pt-6">
                    <p className="text-navy font-bold text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-navy/60 text-xs md:text-sm font-medium leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
