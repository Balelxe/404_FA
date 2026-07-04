import { Link, useLocation } from 'react-router-dom';
import { Compass, ReceiptText, Sparkles } from 'lucide-react';

const links = [
  { to: '/dashboard', label: 'Overview', icon: Compass },
  { to: '/itinerary', label: 'Itinerary', icon: Sparkles },
  { to: '/expenses', label: 'Expenses', icon: ReceiptText }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-full rounded-[28px] border border-gray-100 bg-white p-4 shadow-md lg:w-64">
      <div className="mb-6 rounded-[24px] bg-gradient-to-br from-[var(--green-primary)]/10 to-[var(--accent-sky)]/10 p-4">
        <p className="text-sm muted">Trip plan</p>
        <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">Santorini Reset</h3>
        <p className="mt-2 text-sm muted">A calm, premium trip flow for 5 travellers.</p>
      </div>
      <nav className="space-y-2">
        {links.map((link) => {
          const active = location.pathname === link.to;
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-[var(--bg-secondary)] text-[var(--green-dark)] shadow-sm' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              <Icon size={16} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
