export default function ItineraryTimeline({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item.day}-${item.time}`} className="flex gap-4 rounded-[20px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green-primary)] text-white font-semibold">
              {index + 1}
            </div>
            <div className="mt-2 h-full w-px bg-[var(--border)]" />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-sm text-[var(--green-dark)]">Day {item.day}</span>
              <span className="text-sm muted">{item.time}</span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--text-primary)]">{item.activity}</h4>
            <p className="text-sm muted">{item.location}</p>
            <p className="mt-2 text-sm muted">{item.notes}</p>
          </div>
          <div className="w-20 text-right">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Est ${item.estimate || '—'}</p>
            <p className="text-xs muted">{item.duration || '—'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
