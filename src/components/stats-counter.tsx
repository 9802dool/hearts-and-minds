import type { Stat } from "@content/stats";

function shown(stat: Stat) {
  if (typeof stat.value === "string") return stat.value;
  return stat.value > 0 ? String(stat.value) : "—";
}

export function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex min-w-0 flex-col px-2 py-6 text-center sm:px-4">
          <dd className="order-1 font-display text-3xl font-extrabold text-hm-red sm:text-4xl md:text-5xl">{shown(stat)}</dd>
          <dt className="order-2 mt-2 text-sm font-semibold text-balance text-hm-ink">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
