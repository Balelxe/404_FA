import { Link } from 'react-router-dom';
import { Sparkles, Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 shadow-lg shadow-cyan-500/20">
            <Plane size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-300">TRIPBUDDY AI</p>
            <p className="text-xs text-slate-400">Group travel, reimagined</p>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <Link to="/create" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/60 hover:bg-white/10 hover:text-white">
            Create Trip
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-90">
            <Sparkles size={16} />
            Open Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
