import { FlagshipProjects } from "@/sections/projects/FlagshipProjects";
import { Timeline } from "@/sections/timeline/Timeline";
import { OngoingProjects } from "@/sections/projects/OngoingProjects";
import { UpcomingProjects } from "@/sections/projects/UpcomingProjects";

export default function ProjectsPage() {
  return (
    <main className="relative pt-32 pb-16">
      <FlagshipProjects />
      <Timeline />
      <OngoingProjects />
      <UpcomingProjects />
    </main>
  );
}
