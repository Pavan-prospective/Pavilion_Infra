"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENTS } from "@/constants/data";

export const Clients = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-navy/5">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Our Network"
          title="Our Clients"
          description="Building lasting partnerships with industry leaders and visionaries."
          align="center"
        />

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-center">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-6 bg-white border border-navy/5 shadow-sm hover:shadow-md transition-all duration-500 h-32"
            >
              <div className="relative w-full h-full flex items-center justify-center transition-all duration-700">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
