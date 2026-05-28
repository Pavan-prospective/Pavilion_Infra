"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden border border-navy/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                alt="Architecture Excellence"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-royal/20 z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-royal/20 z-0" />
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden lg:block">
              <span className="text-[10rem] font-heading font-black text-navy/[0.02] select-none">
                ESTD 2018
              </span>
            </div>
          </motion.div>

          <div className="relative z-10">
            <SectionHeading
              subtitle="Corporate Vision"
              title="Building Legacies, One Landmark at a Time"
            />
            <div className="space-y-8 text-navy/70 font-light leading-relaxed text-lg">
              <p>
                Founded in 2018, Pavilion Infra has rapidly emerged as a leader in high-end infrastructure and commercial construction. Our journey began with a simple yet powerful vision: to create spaces that transcend the ordinary.
              </p>
              <p>
                We believe that every structure is an opportunity to engineering excellence. Whether it's a massive commercial hub, a state-of-the-art sports academy, or ultra-luxury development, we bring the same level of precision, quality, and architectural integrity to every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-8">
                <div>
                  <h4 className="text-navy font-heading font-semibold mb-2">Excellence</h4>
                  <p className="text-sm">Uncompromising standards in every detail.</p>
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold mb-2">Innovation</h4>
                  <p className="text-sm">Modern techniques for future-proof structures.</p>
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold mb-2">Integrity</h4>
                  <p className="text-sm">Transparent execution and unwavering trust.</p>
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold mb-2">Sustainability</h4>
                  <p className="text-sm">Eco-conscious building for a better tomorrow.</p>
                </div>
              </div>

              {/* Certifications Block with Images */}
              <div className="pt-12">
                <h4 className="text-navy font-heading font-semibold mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-royal"></span>
                  Our Certifications
                </h4>
                <div className="flex flex-wrap gap-6">
                  {[
                    { name: "ISO 14001:2015", src: "/1.png" },
                    { name: "ISO 9001:2015", src: "/2.png" },
                    { name: "ISO 45001:2018", src: "/3.png" }
                  ].map((cert, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative p-2 bg-white rounded-xl shadow-lg border border-navy/5"
                    >
                      <div className="w-24 h-32 sm:w-28 sm:h-40 bg-navy/5 rounded-lg overflow-hidden relative flex items-center justify-center">
                        <span className="absolute text-navy/30 text-[10px] font-bold text-center px-1 z-0">{cert.name}</span>
                        <img 
                          src={cert.src} 
                          alt={cert.name}
                          className="w-full h-full object-cover relative z-10"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
