import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { PortfolioShowcase } from "@/sections/projects/PortfolioShowcase";
import { Services } from "@/sections/services/Services";
import { Contact } from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <PortfolioShowcase />
      <Services />
      <Contact />
    </main>
  );
}
