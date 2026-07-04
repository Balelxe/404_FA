import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Map, Sparkles, TrendingUp, Plane, CloudSun, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import PhoneMockup from '../components/PhoneMockup';
import { mockTrip } from '../data/mockData';

const features = [
  { title: 'AI itinerary', description: 'Fair plans built around everyone’s pace and arrival times.', icon: Sparkles },
  { title: 'Budget matching', description: 'Suggested activities stay within the group’s travel budget.', icon: TrendingUp },
  { title: 'Expense splitting', description: 'Turn shared purchases into clean, fair balances.', icon: Compass },
  { title: 'Group preferences', description: 'Blend food, culture, nightlife, and calm time seamlessly.', icon: Users }
];

const counters = [
  { value: '2.4k+', label: 'Trips Planned' },
  { value: '96', label: 'Destinations' },
  { value: '4.9/5', label: 'User Satisfaction' }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:py-14 lg:px-8">
        <section className="fade-in-up grid items-center gap-8 overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-8 shadow-[0_20px_90px_rgba(2,6,23,0.35)] backdrop-blur-2xl lg:grid-cols-[1.08fr_0.92fr] lg:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--bg-secondary)] bg-[var(--bg-secondary)]/60 px-3 py-1 text-sm text-[var(--green-dark)]">
              <Sparkles size={14} />
              AI-powered group travel
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Plan Group Trips
              <br />
              Without The Arguments
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              TripBuddy AI automatically balances everyone's budget, arrival times, food preferences, travel pace, and interests to create the perfect itinerary in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/create"><Button className="btn-primary">Create Trip</Button></Link>
              <Link to="/dashboard"><Button variant="secondary">Join Existing Trip</Button></Link>
              <Button variant="ghost" className="border border-gray-200">Watch Demo</Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {counters.map((counter) => (
                <div key={counter.label} className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-xl font-semibold text-[var(--text-primary)]">{counter.value}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{counter.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-4">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">AI Itinerary</h4>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Smart day-by-day planning based on everyone's preferences.</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-4">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">Budget Matching</h4>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Automatically balances activities to stay within everyone's budgets.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="pointer-events-none absolute -left-10 top-10 h-36 w-36 rounded-full bg-[var(--accent-sky)]/15 blur-3xl" />
            <div className="pointer-events-none absolute right-6 bottom-6 h-28 w-28 rounded-full bg-[var(--accent-orange)]/15 blur-3xl" />
            <PhoneMockup />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="transition duration-200 hover:-translate-y-1">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{feature.description}</p>
              </Card>
            );
          })}
        </section>
      </main>
    </div>
  );
}
