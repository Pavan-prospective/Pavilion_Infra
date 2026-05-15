"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Award, ShieldCheck, Users } from "lucide-react";

export const Team = () => {
  const values = [
    { icon: Users, title: "Skilled Workforce", desc: "Our team consists of certified architects and veteran engineers." },
    { icon: Award, title: "Engineering Excellence", desc: "Award-winning structural designs and modern aesthetics." },
    { icon: ShieldCheck, title: "Quality Standards", desc: "Rigorous quality control at every phase of construction." },
    { icon: CheckCircle2, title: "Execution Capability", desc: "Proven track record of delivering complex projects on time." },
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <SectionHeading
              subtitle="Our Capability"
              title="Team & Excellence"
              description="Behind every landmark space is a dedicated team of professionals committed to the highest standards of safety and corporate excellence."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4 p-6 border border-navy/5 hover:border-royal/20 transition-colors"
                >
                  <item.icon className="text-royal" size={32} />
                  <h4 className="text-xl font-heading font-semibold text-navy">{item.title}</h4>
                  <p className="text-navy/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1504307651254-35682fd9367d?auto=format&fit=crop&q=80&w=800" alt="Excellence" className="w-full aspect-square object-cover" />
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Excellence" className="w-full aspect-[3/4] object-cover" />
              </div>
              <div className="space-y-4 translate-y-8">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Excellence" className="w-full aspect-[3/4] object-cover" />
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Excellence" className="w-full aspect-square object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
