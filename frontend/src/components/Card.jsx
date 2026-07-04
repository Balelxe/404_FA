export default function Card({ children, className = '', padded = true }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-transparent bg-white ${padded ? 'p-6 sm:p-7' : ''} ${className} soft-shadow`}>
      <div className="pointer-events-none absolute inset-0 glass opacity-95" />
      <div className="relative">{children}</div>
    </div>
  );
}
