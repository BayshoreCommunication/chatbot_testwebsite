import { ScaleItem, StaggerWrap } from "./motions";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Active Clients" },
  { value: "3×", label: "Avg. ROI Reported" },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <StaggerWrap
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        delay={0.12}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <ScaleItem key={s.label}>
              <p className="text-4xl sm:text-5xl font-bold mb-2">{s.value}</p>
              <p className="text-blue-200 text-sm font-medium">{s.label}</p>
            </ScaleItem>
          ))}
        </div>
      </StaggerWrap>
    </section>
  );
}
