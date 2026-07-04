export default function ItineraryTimeline({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item.day}-${item.time}`} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 font-semibold text-white">
              {index + 1}
            </div>
            <div className="mt-2 h-full w-px bg-white/10" />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-200">Day {item.day}</span>
              <span className="text-sm text-slate-400">{item.time}</span>
            </div>
            <h4 className="text-lg font-semibold text-white">{item.activity}</h4>
            <p className="text-sm text-slate-400">{item.location}</p>
            <p className="mt-2 text-sm text-slate-300">{item.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
