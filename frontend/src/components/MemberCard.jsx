export default function MemberCard({ member }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-white">{member.name}</h4>
        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200">{member.pace}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">Budget: ${member.budget}</p>
      <p className="text-sm text-slate-400">Arrival: {member.arrival}</p>
      <p className="text-sm text-slate-400">Dietary: {member.dietary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {member.interests.map((interest) => (
          <span key={interest} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
