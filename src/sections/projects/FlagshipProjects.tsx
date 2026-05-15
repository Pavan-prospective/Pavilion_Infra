"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/constants/data";

export const FlagshipProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Corporate Portfolio"
          title="Flagship Projects"
          description="A showcase of our most ambitious corporate and commercial architectural achievements."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.flagship.map((project, index) => (
            <div
              key={project.id}
              className={index % 3 === 1 ? "md:translate-y-12" : ""}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
