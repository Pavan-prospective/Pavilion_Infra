"use client";

import React from "react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/constants/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// Premium selector for signature Completed Projects
const COMPLETED_PREVIEW = [
  {
    id: "completed-1",
    title: "Sanctuary by Palm Exotica Phase 1",
    category: "Luxury Farm Community",
    location: "Shankarpally",
    acres: "120 Acres",
    area: "5,80,000 Sq Yard",
  },
  {
    id: "completed-2",
    title: "Parcville",
    category: "Villa Community",
    location: "Vijayawada",
    acres: "12 Acres",
    area: "6,50,000 Sq Ft",
  },
  {
    id: "completed-3",
    title: "VPR Shantiniketan",
    category: "Luxury Villas",
    location: "Nellore",
    acres: "10 Acres",
    area: "3,50,000 Sq Ft",
  },
  {
    id: "completed-4",
    title: "AP CM YS Jagan Residency",
    category: "VIP Residence",
    location: "Tadepalli",
    acres: "1.5 Acres",
    area: "60,000 Sq Ft",
  },
];

export const PortfolioShowcase = () => {
  // Slices 4 items from flagship, ongoing, and upcoming arrays
  const flagshipShow = PROJECTS.flagship.slice(0, 4);
  const ongoingShow = PROJECTS.ongoing.slice(0, 4);
  const upcomingShow = PROJECTS.upcoming.slice(0, 4);

  return (
    <section id="portfolio-preview" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Our Infrastructure"
          title="Project Portfolio"
          description="Explore our architectural and structural landmarks across all stages of development."
          align="center"
        />

        {/* Categories Showcase Workspace */}
        <div className="mt-20 space-y-24">
          
          {/* Category 1: Flagship Projects */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b border-royal/10 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold text-navy">Flagship Projects</h3>
                <p className="text-sm text-navy/60">Our most ambitious structural achievements</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flagshipShow.map((project, index) => (
                <div
                  key={project.id}
                  className={index >= 2 ? "hidden sm:block" : "block"}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/projects/flagship">
                <Button variant="outline" className="rounded-full px-8 py-2.5 font-bold uppercase tracking-wider text-xs">
                  View More Flagship Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Category 2: Ongoing Projects */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b border-royal/10 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold text-navy">Ongoing Projects</h3>
                <p className="text-sm text-navy/60">Developments currently under construction</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ongoingShow.map((project, index) => (
                <div
                  key={project.id || project.title}
                  className={index >= 2 ? "hidden sm:block" : "block"}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    location={project.location}
                    acres={project.siteArea || ""}
                    area={project.builtArea || ""}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/projects/ongoing">
                <Button variant="outline" className="rounded-full px-8 py-2.5 font-bold uppercase tracking-wider text-xs">
                  View More Ongoing Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Category 3: Upcoming Projects */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b border-royal/10 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold text-navy">Upcoming Projects</h3>
                <p className="text-sm text-navy/60">Visionary landmark developments coming soon</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingShow.map((project, index) => (
                <div
                  key={project.id || project.title}
                  className={index >= 2 ? "hidden sm:block" : "block"}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    location={project.location}
                    acres={project.siteArea || ""}
                    area={project.builtArea || ""}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/projects/upcoming">
                <Button variant="outline" className="rounded-full px-8 py-2.5 font-bold uppercase tracking-wider text-xs">
                  View More Upcoming Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Category 4: Completed Projects */}
          <div className="space-y-8">
            <div className="flex items-end justify-between border-b border-royal/10 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-heading font-bold text-navy">Completed Projects</h3>
                <p className="text-sm text-navy/60">A legacy of delivering quality environments</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMPLETED_PREVIEW.map((project, index) => (
                <div
                  key={project.id}
                  className={index >= 2 ? "hidden sm:block" : "block"}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/projects/completed">
                <Button variant="outline" className="rounded-full px-8 py-2.5 font-bold uppercase tracking-wider text-xs">
                  View More Completed Projects
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
