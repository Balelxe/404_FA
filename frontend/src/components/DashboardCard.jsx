export default function DashboardCard({ title, value, hint, icon }) {
  return (
    <div className="rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-[var(--text-secondary)]">{title}</p>
        <div className="rounded-2xl bg-[var(--bg-secondary)] p-2 text-lg text-[var(--green-primary)]">{icon}</div>
      </div>
      <div className="text-2xl font-semibold text-[var(--text-primary)]">{value}</div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{hint}</p>
    </div>
  );
}
