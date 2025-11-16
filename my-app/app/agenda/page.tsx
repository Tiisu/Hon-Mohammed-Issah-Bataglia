import Section from "../components/Section";

export const metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  const items = [
    { title: "Education", points: ["School infrastructure", "Teacher training", "Scholarships"] },
    { title: "Healthcare", points: ["Clinic upgrades", "Maternal care", "Health outreach"] },
    { title: "Agriculture", points: ["Irrigation", "Inputs & extension", "Market access"] },
  ];
  return (
    <Section title="Policy Agenda" subtitle="A practical plan for progress">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{it.title}</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600">
              {it.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}