import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Map, Sparkles, TrendingUp, Plane, CloudSun, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
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
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
              <Sparkles size={14} />
              AI-powered group travel
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Plan group trips without the arguments.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              TripBuddy AI blends every traveller’s budget, arrival time, food needs, pace, and interests into one clean, premium plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/create"><Button>Create Trip</Button></Link>
              <Link to="/dashboard"><Button variant="secondary">Join Trip</Button></Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {counters.map((counter) => (
                <div key={counter.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xl font-semibold text-white">{counter.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{counter.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="float-slow rounded-[32px] border border-white/15 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-500/10">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/20 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Live travel board</p>
                  <h3 className="text-xl font-semibold text-white">{mockTrip.name}</h3>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-200">Ready</span>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.2),_transparent_35%)]" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
                    <div>
                      <p className="text-sm text-slate-400">Route</p>
                      <p className="font-semibold text-white">{mockTrip.destination}</p>
                    </div>
                    <div className="rounded-2xl bg-cyan-500/15 p-2 text-cyan-200">
                      <Map size={18} />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                      <p className="text-sm text-slate-400">Budget</p>
                      <p className="mt-1 text-lg font-semibold text-white">${mockTrip.budget}</p>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                      <p className="text-sm text-slate-400">Weather</p>
                      <div className="mt-1 flex items-center gap-2 text-white">
                        <CloudSun size={18} />
                        <span className="font-semibold">28° Sunny</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">Next move</p>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Plane size={16} />
                        Flight synced
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">Breakfast in Oia • sunset dinner • easy coastal walk</p>
                  </div>
                </div>
              </div>
            </div>
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
