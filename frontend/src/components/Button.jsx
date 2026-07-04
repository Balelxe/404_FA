export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400';
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:opacity-90',
    secondary: 'border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/50 hover:bg-white/10',
    ghost: 'bg-transparent text-slate-300 hover:bg-white/5 hover:text-white'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
