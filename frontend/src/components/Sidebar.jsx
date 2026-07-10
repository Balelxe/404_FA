import { Link, useLocation } from 'react-router-dom';
import { Compass, ReceiptText, Sparkles } from 'lucide-react';
import { useTrip } from '../context/TripContext';

const links = [
  { to: '/dashboard', label: 'Overview', icon: Compass },
  { to: '/itinerary', label: 'Itinerary', icon: Sparkles },
  { to: '/expenses', label: 'Expenses', icon: ReceiptText }
];

export default function Sidebar() {
  const location = useLocation();
  const { activeTrip } = useTrip();
  const travellerCount = activeTrip?.members?.length || 0;

  return (
    <aside className="w-full rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-[0_10px_30px_rgba(16,80,60,0.08)] lg:w-64">
      <div className="mb-6 rounded-[24px] bg-[var(--bg-secondary)] p-4">
        <p className="text-sm text-[var(--text-secondary)]">Trip plan</p>
        <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">{activeTrip?.name || 'Your trip'}</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">A calm, premium trip flow for {travellerCount} travellers.</p>
      </div>
      <nav className="space-y-2">
        {links.map((link) => {
          const active = location.pathname === link.to;
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 rounded-[16px] px-4 py-3 text-sm font-medium transition ${active ? 'bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] text-white shadow-[0_10px_30px_rgba(83,211,177,0.16)]' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'}`}
            >
              <Icon size={16} className={active ? 'text-white' : 'text-[#8FA59A]'} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
