"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/constants/data";
import Image from "next/image";

export const OngoingProjects = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Coming Soon"
          title="Ongoing Projects"
          description="A glimpse into our current developments across commercial infrastructure and corporate hubs."
          align="center"
        />

        <div className="mt-24 space-y-32">
          {PROJECTS.ongoing.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Images Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[4/3] w-full max-w-xl mx-auto">
                  {/* Primary Image */}
                  <div className="absolute inset-0 z-10 border-l-8 border-royal shadow-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Decorative Background Image (Placeholder for the second overlapping image) */}
                  <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 z-20 border-l-8 border-royal shadow-2xl overflow-hidden hidden md:block">
                    <img
                      src={project.image} // Using same image but zoomed/shifted for placeholder effect
                      alt={`${project.title} detail`}
                      className="w-full h-full object-cover opacity-90 brightness-75 scale-125"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stats Card Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                    {project.category}
                  </h3>
                  <div className="w-20 h-1 bg-royal" />
                </div>

                <div className="bg-[#EBF5FB] rounded-[40px] p-10 md:p-14 shadow-sm border border-royal/5">
                  <div className="grid grid-cols-1 gap-10">
                    <div className="space-y-1">
                      <span className="text-royal/60 text-xs font-bold uppercase tracking-widest">Project Name</span>
                      <p className="text-2xl md:text-3xl font-heading font-bold text-navy">{project.title}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-royal/60 text-xs font-bold uppercase tracking-widest">Location</span>
                      <p className="text-2xl md:text-3xl font-heading font-bold text-navy">{project.location}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4 border-t border-royal/10">
                      <div className="space-y-1">
                        <span className="text-royal/60 text-xs font-bold uppercase tracking-widest">Site Area</span>
                        <p className="text-xl md:text-2xl font-heading font-bold text-navy">{project.siteArea}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-royal/60 text-xs font-bold uppercase tracking-widest">Built-up Area</span>
                        <p className="text-xl md:text-2xl font-heading font-bold text-navy">{project.builtArea}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
