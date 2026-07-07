import { Sparkles, CalendarDays, Clock3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import ItineraryTimeline from '../components/ItineraryTimeline';
import Button from '../components/Button';
import { mockTrip } from '../data/mockData';

export default function ItineraryPage() {
  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <Card className="transition duration-300 hover:-translate-y-1">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-sm text-[var(--green-primary)]">
                    <Sparkles size={14} />
                    AI itinerary
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">Day-by-day travel flow</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">A polished timeline tuned for pace, budget, and shared interests.</p>
                </div>
                <Button>Generate itinerary</Button>
              </div>
              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[var(--green-primary)]">
                    <CalendarDays size={16} />
                    <p className="text-sm font-medium">Trip window</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{mockTrip.startDate} to {mockTrip.endDate}</p>
                </div>
                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[var(--green-primary)]">
                    <Clock3 size={16} />
                    <p className="text-sm font-medium">Pacing</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">Balanced mornings, slower evenings, one signature activity per day.</p>
                </div>
              </div>
              <ItineraryTimeline items={mockTrip.itinerary} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
