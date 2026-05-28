import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-navy/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Pavilion_Final_Logo_page-0001-removebg-preview.png"
                alt="Pavilion Infra"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-navy/50 text-xs tracking-wider max-w-xs">
              Engineering landmark spaces with corporate excellence since 2017.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <h4 className="text-navy font-heading font-bold uppercase tracking-widest text-[10px]">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-navy/60 text-xs">
                  <Phone size={12} className="text-royal" />
                  +91 77023 35599
                </li>
                <li className="flex items-center gap-3 text-navy/60 text-xs">
                  <Mail size={12} className="text-royal" />
                  karthikchukkapalli@pavilioninfra.com
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-navy font-heading font-bold uppercase tracking-widest text-[10px]">Social</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-navy/40 hover:text-royal transition-colors">
                  <Linkedin size={16} />
                </Link>
                <Link href="#" className="text-navy/40 hover:text-royal transition-colors">
                  <Instagram size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Pavilion Infra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-navy/30 hover:text-navy transition-colors text-[10px] uppercase tracking-widest">About</Link>
            <Link href="/projects" className="text-navy/30 hover:text-navy transition-colors text-[10px] uppercase tracking-widest">Projects</Link>
            <Link href="/services" className="text-navy/30 hover:text-navy transition-colors text-[10px] uppercase tracking-widest">Services</Link>
            <Link href="/contact" className="text-navy/30 hover:text-navy transition-colors text-[10px] uppercase tracking-widest">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
