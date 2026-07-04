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
    <aside className="w-full rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl lg:w-64">
      <div className="mb-6 rounded-[24px] bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-4">
        <p className="text-sm text-slate-300">Trip plan</p>
        <h3 className="mt-1 text-xl font-semibold text-white">Santorini Reset</h3>
        <p className="mt-2 text-sm text-slate-300">A calm, premium trip flow for 5 travellers.</p>
      </div>
      <nav className="space-y-2">
        {links.map((link) => {
          const active = location.pathname === link.to;
          const Icon = link.icon;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${active ? 'bg-cyan-500/20 text-cyan-100 shadow-inner' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
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
