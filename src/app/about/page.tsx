import { About } from "@/sections/about/About";
import { Vision } from "@/sections/vision/Vision";
import { Team } from "@/sections/team/Team";
import { Statistics } from "@/sections/statistics/Statistics";

export default function AboutPage() {
  return (
    <main className="relative pt-32 pb-16">
      <About />
      <Statistics />
      <Vision />
      <Team />
    </main>
  );
}
