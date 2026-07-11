import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTrip } from '../context/TripContext';
import { mockTrip } from '../data/mockData';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Globe,
  Heart,
  MapPin,
  Percent,
  Search,
  Sparkles,
  Sun,
  Users,
} from 'lucide-react';

const stats = [
  { label: 'Trips planned', value: '2,400+', icon: Globe },
  { label: 'Destinations', value: '96', icon: MapPin },
  { label: 'User satisfaction', value: '4.9/5', icon: Heart },
  { label: 'Would recommend', value: '98%', icon: Sparkles },
];

const actions = [
  { title: 'Invite friends', icon: Users },
  { title: 'Set budget', icon: Percent },
  { title: 'Add preferences', icon: Heart },
  { title: 'AI Assistant', icon: Sparkles },
];

const activity = [
  { label: 'John joined the trip', detail: 'Tokyo adventure is growing', icon: Users },
  { label: 'Sara added an expense', detail: 'Dinner in Ubud — $129', icon: CheckCircle2 },
  { label: 'AI updated itinerary', detail: 'Added sunrise hike and beach lunch', icon: Sparkles },
];

export default function LandingPage() {
  const { setActiveTrip } = useTrip();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-6 z-40 rounded-[32px] border border-[var(--border)] bg-white/95 p-6 shadow-[0_30px_70px_rgba(16,80,60,0.08)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-primary)] text-white shadow-[0_10px_30px_rgba(79,209,181,0.24)]">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-base font-semibold tracking-[0.06em]">TripBuddy AI</p>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--green-primary)]">AI Travel Planner</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[var(--text-secondary)]">
                <Search size={18} />
              </div>
              <input
                type="search"
                placeholder="Search destinations, trips or members..."
                className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] py-4 pl-12 pr-6 text-sm text-[var(--text-primary)] shadow-[0_10px_30px_rgba(16,80,60,0.05)] outline-none transition focus:border-[var(--green-primary)] focus:ring-2 focus:ring-[var(--green-primary)]/15"
              />
            </div>

            <div className="flex items-center gap-3 justify-end">
              <Link to="/create" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(79,209,181,0.24)] transition hover:-translate-y-0.5">
                Create Trip
                <ArrowRight size={16} />
              </Link>
              <Link to="/dashboard" className="rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:shadow-[0_10px_25px_rgba(16,80,60,0.08)]">
                Open Dashboard
              </Link>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-[var(--text-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.06)]">
                MK
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-primary)] shadow-[0_4px_10px_rgba(79,209,181,0.08)]">
              <Sparkles size={16} />
              AI-Powered Group Travel
            </div>
            <div className="mt-8 max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold leading-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
                Plan trips together,
                <br />
                create <span className="bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] bg-clip-text text-transparent">memories</span> forever.
              </h1>
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                TripBuddy AI automatically balances budgets, preferences, arrival times and itineraries so everyone enjoys the trip — without the planning stress.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/create" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(79,209,181,0.24)] transition hover:-translate-y-0.5">
                Start Planning
              </Link>
              <Link to="/dashboard" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-7 py-4 text-base font-semibold text-[var(--text-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.06)] transition hover:shadow-[0_14px_35px_rgba(16,80,60,0.1)]">
                View My Trips
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
              <div className="flex -space-x-3">
                {['AT', 'LI', 'ME', 'SK'].map((initial) => (
                  <div key={initial} className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-[var(--bg-secondary)] text-sm font-semibold text-[var(--text-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.08)]">
                    {initial}
                  </div>
                ))}
              </div>
              <span className="font-semibold text-[var(--text-primary)]">2,400+ travellers planning together</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--green-primary)]/15 to-transparent" />
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Santorini coastal getaway"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-6 top-6 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_24px_60px_rgba(16,80,60,0.12)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">Trip summary</p>
                  <h2 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">Santorini Reset</h2>
                </div>
                <div className="rounded-2xl bg-[var(--bg-secondary)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)]">5 Members</div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-[var(--bg-secondary)] p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Dates</p>
                  <p className="mt-2 font-semibold text-[var(--text-primary)]">12 — 18 May 2025</p>
                </div>
                <div className="rounded-3xl bg-[var(--bg-secondary)] p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Countdown</p>
                  <p className="mt-2 font-semibold text-[var(--text-primary)]">18d 14h 36m</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 rounded-3xl bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Sun size={18} className="text-[var(--accent-orange)]" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em]">Weather</p>
                    <p className="font-semibold text-[var(--text-primary)]">28°C Sunny</p>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setActiveTrip(mockTrip)}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--green-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Continue Planning
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(16,80,60,0.06)] transition hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--bg-secondary)] text-[var(--green-primary)]">
                  <Icon size={20} />
                </div>
                <p className="text-3xl font-semibold text-[var(--text-primary)]">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--text-secondary)]">{item.label}</p>
              </div>
            );
          })}
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
            <div className="overflow-hidden rounded-[28px] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=1200&q=80"
                alt="Santorini villa retreat"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">Upcoming Trip</p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">Santorini Reset</h2>
              </div>
              <div className="rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)]">AI status: optimizing</div>
            </div>
            <div className="mt-6 rounded-[24px] bg-[var(--bg-secondary)] p-5">
              <div className="mb-3 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                <span>Planning progress</span>
                <span className="font-semibold text-[var(--text-primary)]">72%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)]" />
              </div>
            </div>
            <Link
              to="/dashboard"
              onClick={() => setActiveTrip(mockTrip)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_35px_rgba(79,209,181,0.24)] transition hover:-translate-y-0.5"
            >
              Continue Planning
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-[var(--border)] bg-white p-7 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">Quick actions</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Plan faster</h3>
                </div>
                <Sparkles size={24} className="text-[var(--green-primary)]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {actions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.title} type="button" className="flex items-center gap-3 rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-4 text-left transition hover:-translate-y-0.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-[var(--green-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.08)]">
                        <Icon size={18} />
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--border)] bg-white p-7 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">Recent activity</p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">What’s happening</h3>
                </div>
                <span className="rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)]">Live</span>
              </div>
              <div className="space-y-4">
                {activity.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-[var(--green-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.08)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--text-primary)]">{item.label}</p>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-primary)] shadow-[0_10px_30px_rgba(79,209,181,0.08)]">
                <Sparkles size={16} /> Recommended for your group
              </div>
              <div>
                <h2 className="text-4xl font-semibold leading-tight text-[var(--text-primary)] sm:text-5xl">
                  Discover your next unforgettable escape.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                  Fresh travel inspiration curated for your group, with smart suggestions that match mood, timing, and shared interests.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5">
                  See Recommendations
                  <ArrowRight size={18} />
                </Link>
                <button type="button" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-7 py-4 text-base font-semibold text-[var(--text-primary)] shadow-[0_10px_25px_rgba(16,80,60,0.08)] transition hover:-translate-y-0.5">
                  Explore destinations
                </button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_30px_70px_rgba(16,80,60,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80"
                alt="Oia cliffside village in Santorini"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-b-[32px] bg-gradient-to-t from-black/65 to-transparent p-8 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Featured destination</p>
                <h3 className="mt-3 text-3xl font-semibold">Oia cliffside village</h3>
                <p className="mt-2 max-w-sm text-sm text-white/80">
                  A dreamy Santorini escape with blue domes, caldera views, and charming seaside evenings.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
