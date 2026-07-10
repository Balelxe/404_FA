import { Link } from 'react-router-dom';
import { Sparkles, Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[var(--green-primary)] shadow-[0_10px_30px_rgba(83,211,177,0.16)] text-white">
            <Plane size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--text-primary)]">TripBuddy AI</p>
            <p className="text-xs text-[var(--text-secondary)]">Group travel, reimagined</p>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <Link to="/create" className="rounded-[16px] border border-[var(--border)] bg-white px-4 py-2 text-[var(--text-primary)] transition hover:shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
            Create Trip
          </Link>
          <Link to="/my-trips" className="rounded-[16px] border border-[var(--border)] bg-white px-4 py-2 text-[var(--text-primary)] transition hover:shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
            My Trips
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 rounded-[16px] btn-primary px-4 py-2 font-medium text-white transition hover:opacity-95">
            <Sparkles size={16} />
            Open Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
