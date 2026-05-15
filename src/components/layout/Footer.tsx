import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-navy/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/Pavilion_Final_Logo_page-0001-removebg-preview.png"
                alt="Pavilion Infra"
                width={300}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-navy/60 text-sm leading-relaxed max-w-xs">
              Engineering landmark spaces with uncompromising quality and corporate excellence. Redefining modern infrastructure since 2018.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-none border border-navy/10 flex items-center justify-center text-navy/40 hover:text-royal hover:border-royal transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-none border border-navy/10 flex items-center justify-center text-navy/40 hover:text-royal hover:border-royal transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-none border border-navy/10 flex items-center justify-center text-navy/40 hover:text-royal hover:border-royal transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-navy font-heading font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["About Company", "Flagship Projects", "Ongoing Projects", "Our Services", "Leadership"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-navy/50 hover:text-navy transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-heading font-bold uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {["Commercial Infrastructure", "Corporate Fit-outs", "High-rise Development", "Project Management"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-navy/50 hover:text-navy transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy font-heading font-bold uppercase tracking-widest text-sm mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-royal shrink-0" size={20} />
                <span className="text-navy/50 text-sm leading-relaxed">
                  123 Luxury Boulevard, <br />Executive Heights, City - 500001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-royal shrink-0" size={20} />
                <span className="text-navy/50 text-sm">+91 99999 88888</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-royal shrink-0" size={20} />
                <span className="text-navy/50 text-sm">contact@pavilioninfra.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy/30 text-xs">
            © {new Date().getFullYear()} Pavilion Infra. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-navy/30 hover:text-navy transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-navy/30 hover:text-navy transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
