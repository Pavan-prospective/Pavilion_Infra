"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const projectTabs = [
  { name: "Flagship Projects", href: "/projects/flagship" },
  { name: "Ongoing Projects", href: "/projects/ongoing" },
  { name: "Upcoming Projects", href: "/projects/upcoming" },
  { name: "Completed Projects", href: "/projects/completed" },
];

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Helper to determine if a tab is active
  const isActive = (href: string) => {
    // If route is /projects, we consider flagship active by default
    if (pathname === "/projects" && href === "/projects/flagship") {
      return true;
    }
    return pathname === href;
  };

  return (
    <div className="relative pt-32 pb-16 min-h-screen bg-white">
      {/* Dynamic sticky/sleek submenu navigation */}
      <div className="sticky top-[80px] md:top-[104px] z-30 w-full bg-white/90 backdrop-blur-md border-b border-navy/5 shadow-sm">
        <div className="container mx-auto">
          <div className="flex w-full overflow-x-auto scrollbar-none py-4 px-4 sm:px-6 md:justify-center">
            <nav className="flex flex-nowrap shrink-0 space-x-2 p-1 bg-[#F5FAFE]/80 border border-[#E2F0FD] rounded-full">
              {projectTabs.map((tab) => {
                const active = isActive(tab.href);
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className={cn(
                      "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-300 flex-shrink-0",
                      active
                        ? "bg-royal text-white shadow-md shadow-royal/20"
                        : "text-navy/70 hover:text-royal hover:bg-[#EBF5FB]/50"
                    )}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Renders subpages underneath the sticky subnavigation */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
