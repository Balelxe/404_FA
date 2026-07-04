import { Link } from 'react-router-dom';
import { Sparkles, Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--green-primary)] to-[var(--accent-sky)] shadow-md text-white">
            <Plane size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--text-primary)]">TripBuddy AI</p>
            <p className="text-xs text-[var(--text-secondary)]">Group travel, reimagined</p>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/create" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[var(--text-primary)] transition hover:shadow-sm">
            Create Trip
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 rounded-full btn-primary px-4 py-2 font-medium text-white shadow-md transition hover:opacity-95">
            <Sparkles size={16} />
            Open Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
