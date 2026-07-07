export default function MemberCard({ member }) {
  return (
    <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[var(--text-primary)]">{member.name}</h4>
        <span className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-xs font-semibold text-[var(--green-primary)]">{member.pace}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">Budget: ${member.budget}</p>
      <p className="text-sm text-[var(--text-secondary)]">Arrival: {member.arrival}</p>
      <p className="text-sm text-[var(--text-secondary)]">Dietary: {member.dietary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {member.interests.map((interest) => (
          <span key={interest} className="rounded-full bg-[var(--bg-secondary)] px-2.5 py-1 text-xs text-[var(--text-primary)]">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
