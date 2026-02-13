import services from "@/data/services.json";
import { Card, Button } from "@/components/ui";

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-extrabold">Services</h1>
        <p className="mt-2 text-white/70">Pick your service. Pick your barber. Lock your time.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl font-bold">{s.name}</div>
                <div className="mt-1 text-white/70">${s.price} • {s.durationMins} mins</div>
              </div>
              <Button href={`/book?service=${s.id}`} className="shrink-0">Book Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
