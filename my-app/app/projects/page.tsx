import Section from "../components/Section";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const items = [
    { title: "Community Health Initiative", desc: "Mobile health outreach to rural communities." },
    { title: "School Renovation", desc: "Renovating classrooms and providing supplies." },
  ];
  return (
    <Section title="Projects" subtitle="Work done and ongoing initiatives">
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}