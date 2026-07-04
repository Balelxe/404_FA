import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { mockTrip } from '../data/mockData';

export default function OnboardingPage() {
  const [members, setMembers] = useState(mockTrip.members);

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:px-8">
        <Card>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-cyan-200">Traveller preferences</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Tell TripBuddy AI about your crew</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              5 travellers ready to plan
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {members.map((member) => (
              <div key={member.id} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm text-slate-400">
                    Budget
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-white" defaultValue={member.budget} />
                  </label>
                  <label className="text-sm text-slate-400">
                    Arrival Time
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-white" defaultValue={member.arrival} />
                  </label>
                  <label className="text-sm text-slate-400">
                    Dietary
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-white" defaultValue={member.dietary} />
                  </label>
                  <label className="text-sm text-slate-400">
                    Pace
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-white" defaultValue={member.pace} />
                  </label>
                </div>
                <label className="mt-3 block text-sm text-slate-400">
                  Interests
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-2 text-white" defaultValue={member.interests.join(', ')} />
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/dashboard"><Button>Continue to Dashboard</Button></Link>
            <Link to="/create"><Button variant="secondary">Edit trip</Button></Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
