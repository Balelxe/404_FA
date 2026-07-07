export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'rounded-[16px] px-5 py-3 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'btn-primary text-white shadow-[0_10px_30px_rgba(83,211,177,0.16)] hover:shadow-[0_12px_32px_rgba(83,211,177,0.22)]',
    secondary: 'btn-secondary text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]',
    ghost: 'btn-ghost text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
