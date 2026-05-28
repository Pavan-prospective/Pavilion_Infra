"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionHeading
              subtitle="Get In Touch"
              title="Connect with Pavilion Infra"
              description="Whether you have a query about our projects or want to discuss a new venture, our team is ready to assist you."
            />
            
            <div className="space-y-12 mt-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-none bg-soft-grey flex items-center justify-center text-navy shrink-0 border border-navy/5 group-hover:bg-navy group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold text-lg mb-2">Our Office</h4>
                  <p className="text-navy/50 font-light leading-relaxed">
                    4th Floor, Plot 19, Ravi Shankar Arcade, <br />
                    Jayabheri Pine Valley, Gachibowli, <br />
                    Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-none bg-soft-grey flex items-center justify-center text-navy shrink-0 border border-navy/5 group-hover:bg-navy group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold text-lg mb-2">Phone</h4>
                  <a href="tel:+917702335599" className="text-navy/50 hover:text-royal transition-colors font-light block">+91 77023 35599</a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 rounded-none bg-soft-grey flex items-center justify-center text-navy shrink-0 border border-navy/5 group-hover:bg-navy group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-navy font-heading font-semibold text-lg mb-2">Email</h4>
                  <a href="mailto:kartheekchukkapalli@pavilioninfra.com" className="text-navy/50 hover:text-royal transition-colors font-light block break-all">kartheekchukkapalli@pavilioninfra.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* 
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-soft-grey/50 p-8 md:p-12 border border-navy/5 backdrop-blur-md shadow-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-navy mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-navy/40 font-bold">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-navy/10 p-4 text-navy focus:outline-none focus:border-royal transition-colors rounded-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-navy/40 font-bold">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border border-navy/10 p-4 text-navy focus:outline-none focus:border-royal transition-colors rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-navy/40 font-bold">Project Type</label>
                <select className="w-full bg-white border border-navy/10 p-4 text-navy focus:outline-none focus:border-royal transition-colors rounded-none appearance-none">
                  <option>Commercial Infrastructure</option>
                  <option>Corporate Fit-outs</option>
                  <option>High-rise Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-navy/40 font-bold">Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white border border-navy/10 p-4 text-navy focus:outline-none focus:border-royal transition-colors resize-none rounded-none"></textarea>
              </div>
              <Button size="lg" variant="primary" className="w-full rounded-none">Submit Inquiry</Button>
            </form>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
};
