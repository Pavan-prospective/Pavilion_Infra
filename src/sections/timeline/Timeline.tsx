"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPLETED_PROJECTS } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Timeline = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-navy/5">
      <div className="container mx-auto px-6">

        <SectionHeading
          subtitle="Our Legacy"
          title="Completed Projects"
          align="center"
        />

        {/* Grid of Years */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {COMPLETED_PROJECTS.map((yearData, index) => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-soft-grey border border-navy/5 p-6 sm:p-8 shadow-sm flex flex-col hover:border-royal/30 transition-colors duration-500"
            >
              <h3 className="text-[3.5rem] leading-none font-heading font-bold text-navy mb-8 tracking-tight">
                {yearData.year}
              </h3>

              <div className="space-y-6 flex-grow">
                {yearData.projects.map((project, pIndex) => (
                  <div key={pIndex} className="relative">
                    {/* Project Name & Location */}
                    <h4 className="text-navy font-bold text-[15px] mb-1 leading-snug pr-2">
                      {project.name}{project.location ? `, ${project.location}` : ""}
                    </h4>

                    {/* Project Details */}
                    <p className="text-navy/80 text-xs font-semibold leading-relaxed pr-2">
                      {project.type && project.type !== "" ? `– ${project.type} | ` : ""}
                      {project.area}
                    </p>

                    {/* Horizontal Divider (except last item) */}
                    {pIndex !== yearData.projects.length - 1 && (
                      <div className="w-full h-[1px] bg-navy/10 mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
