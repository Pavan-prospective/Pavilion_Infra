import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { Leadership } from "@/sections/leadership/Leadership";
import { Statistics } from "@/sections/statistics/Statistics";
import { FlagshipProjects } from "@/sections/projects/FlagshipProjects";
import { Timeline } from "@/sections/timeline/Timeline";
import { OngoingProjects } from "@/sections/projects/OngoingProjects";
import { Clients } from "@/sections/clients/Clients";
import { Services } from "@/sections/services/Services";
import { Team } from "@/sections/team/Team";
import { Vision } from "@/sections/vision/Vision";
import { Contact } from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Leadership />
      <FlagshipProjects />
      <Timeline />
      <OngoingProjects />
      <Clients />
      <Services />
      <Team />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
