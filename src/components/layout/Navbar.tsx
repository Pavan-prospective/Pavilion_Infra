"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact", href: "/contact" },
];

const projectTabs = [
  { name: "Flagship Projects", href: "/projects/flagship" },
  { name: "Ongoing Projects", href: "/projects/ongoing" },
  { name: "Upcoming Projects", href: "/projects/upcoming" },
  { name: "Completed Projects", href: "/projects/completed" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const shouldShowSolid = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        shouldShowSolid ? "bg-white/95 backdrop-blur-md py-4 border-b border-navy/5 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/Pavilion_Final_Logo_page-0001-removebg-preview.png"
            alt="Pavilion Infra"
            width={300}
            height={100}
            className="h-20 md:h-24 w-auto transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isProjects = link.name === "Projects";
            return isProjects ? (
              <div key={link.name} className="group relative py-2">
                <Link
                  href="/projects"
                  className={cn(
                    "flex items-center text-sm uppercase tracking-widest transition-colors font-bold",
                    shouldShowSolid ? "text-navy hover:text-royal" : "text-white hover:text-royal"
                  )}
                >
                  Projects
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                {/* Premium hover dropdown menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-[#E2F0FD] shadow-xl rounded-2xl py-3 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  {projectTabs.map((tab) => (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      className="px-5 py-2 text-xs uppercase tracking-wider font-heading font-semibold text-navy/80 hover:text-royal hover:bg-[#EBF5FB]/50 transition-colors"
                    >
                      {tab.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors font-bold",
                  shouldShowSolid ? "text-navy hover:text-royal" : "text-white hover:text-royal"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button variant={shouldShowSolid ? "primary" : "outline"} size="sm" className={cn(
              "rounded-none font-bold",
              !shouldShowSolid && "border-white/60 text-white hover:bg-white hover:text-navy"
            )}>
              Inquire Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            shouldShowSolid ? "text-navy" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-navy/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => {
                const isProjects = link.name === "Projects";
                return isProjects ? (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      className="flex items-center justify-between text-lg uppercase tracking-widest text-navy w-full font-bold"
                    >
                      Projects
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileProjectsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileProjectsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-4 mt-4 border-l border-royal/20"
                        >
                          {projectTabs.map((tab) => (
                            <Link
                              key={tab.name}
                              href={tab.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileProjectsOpen(false);
                              }}
                              className="text-sm uppercase tracking-wider text-navy/70 font-semibold hover:text-royal transition-colors"
                            >
                              {tab.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg uppercase tracking-widest text-navy font-bold"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="/contact" className="w-full">
                <Button variant="royal" className="w-full rounded-none">
                  Inquire Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
