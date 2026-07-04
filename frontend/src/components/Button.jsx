export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'btn-primary text-white shadow-md hover:shadow-lg transform-gpu hover:-translate-y-0.5',
    secondary: 'border border-gray-200 bg-white text-[var(--text-primary)] hover:bg-gray-50',
    ghost: 'bg-transparent text-[var(--text-primary)] hover:bg-gray-50'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
