export default function Card({ children, className = '', padded = true }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl ${padded ? 'p-6 sm:p-7' : ''} ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}
