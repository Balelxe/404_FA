export default function Card({ children, className = '', padded = true }) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-white ${padded ? 'p-6 sm:p-7' : ''} ${className} soft-shadow`}>
      <div className="pointer-events-none absolute inset-0 glass opacity-90" />
      <div className="relative">{children}</div>
    </div>
  );
}
