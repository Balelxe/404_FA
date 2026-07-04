export default function DashboardCard({ title, value, hint, icon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/10">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        <div className="rounded-2xl bg-white/10 p-2 text-lg">{icon}</div>
      </div>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </div>
  );
}
