"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

export const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {navLinks.map((link) => (
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
          ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest text-navy"
                >
                  {link.name}
                </Link>
              ))}
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
