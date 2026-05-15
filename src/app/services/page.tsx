import { Services } from "@/sections/services/Services";
import { Clients } from "@/sections/clients/Clients";

export default function ServicesPage() {
  return (
    <main className="relative pt-32 pb-16">
      <Services />
      <Clients />
    </main>
  );
}
