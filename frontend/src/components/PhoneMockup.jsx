import { motion } from 'framer-motion';
import { MapPin, Plane, Clock, Sparkles, Wallet, Users } from 'lucide-react';
import ItineraryTimeline from './ItineraryTimeline';
import ExpenseChart from './ExpenseChart';
import { mockTrip } from '../data/mockData';

const screens = [
  {
    id: 'overview',
    title: 'Trip Dashboard',
    content: (
      <div className="space-y-4">
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--green-dark)]">Live route</p>
              <p className="mt-2 text-base font-semibold text-[var(--text-primary)]">{mockTrip.destination}</p>
            </div>
            <div className="rounded-2xl bg-[var(--bg-secondary)] px-3 py-2 text-sm font-semibold text-[var(--green-dark)]">Ready</div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--bg-secondary)] p-3">
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-[var(--text-secondary)]">Travelers</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{mockTrip.travellers}</p>
            </div>
            <div className="rounded-2xl bg-[var(--bg-secondary)] p-3">
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-[var(--text-secondary)]">Budget</p>
              <p className="mt-2 text-xl font-semibold text-[var(--text-primary)]">${mockTrip.budget}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <Clock size={16} />
              <p className="text-sm">Boarding in 4h</p>
            </div>
            <p className="mt-3 text-xl font-semibold text-[var(--text-primary)]">Santorini sunset plan</p>
          </div>
          <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <MapPin size={16} />
              <p className="text-sm">Top pick</p>
            </div>
            <p className="mt-3 text-xl font-semibold text-[var(--text-primary)]">Oia village walk</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'itinerary',
    title: 'Itinerary',
    content: <ItineraryTimeline items={mockTrip.itinerary} />
  },
  {
    id: 'expenses',
    title: 'Expenses',
    content: (
      <div className="space-y-4">
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_15px_40px_rgba(16,80,60,0.08)]">
          <div className="flex items-center justify-between text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-3 py-2 text-sm font-semibold text-[var(--green-dark)]">
              <Wallet size={14} /> Split ready
            </span>
            <span className="text-sm font-semibold text-[var(--text-primary)]">3 bills</span>
          </div>
        </div>
        <div className="rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_15px_40px_rgba(16,80,60,0.08)]">
          <ExpenseChart data={[{ name: 'Food', value: 240 }, { name: 'Transport', value: 160 }, { name: 'Stay', value: 140 }]} />
        </div>
      </div>
    )
  }
];

export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute -left-12 top-12 h-28 w-28 rounded-full bg-[var(--accent-sky)]/20 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-24 w-24 rounded-full bg-[var(--accent-orange)]/20 blur-3xl" />
      <div className="relative w-[360px]">
        {screens.map((screen, index) => (
          <motion.div
            key={screen.id}
            initial={{ y: 40 * index, scale: 1 - index * 0.02, opacity: 0 }}
            animate={{ y: 0, scale: 1 - index * 0.02, opacity: 1 }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 120 }}
            className="absolute left-0 right-0 top-0 rounded-[40px] border border-[var(--border)] bg-white shadow-[0_10px_30px_rgba(16,80,60,0.08)]"
          >
            <div className="h-[680px] overflow-hidden rounded-[32px] bg-gradient-to-b from-white via-[var(--bg-secondary)] to-[var(--accent-sky)] p-4">
              <div className="flex items-center justify-between rounded-[28px] bg-[rgba(255,255,255,0.9)] px-4 py-3 shadow-[0_15px_40px_rgba(16,80,60,0.08)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">TripBuddy AI</p>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">{screen.title}</h4>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-[var(--bg-secondary)] px-3 py-2 text-[var(--green-dark)]">
                  <Sparkles size={16} /> Live
                </div>
              </div>

              <div className="mt-4 h-full overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-primary)] p-4 shadow-inner shadow-[0_10px_30px_rgba(16,80,60,0.05)]">
                {screen.content}
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute -bottom-6 left-1/2 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,255,255,0.8)] px-4 py-2 text-center text-xs text-[var(--text-secondary)] shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
          Touch-ready preview
        </div>
      </div>
    </div>
  );
}
