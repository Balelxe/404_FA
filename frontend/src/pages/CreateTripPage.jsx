import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

export default function CreateTripPage() {
  const [trip, setTrip] = useState({ name: '', destination: '', startDate: '', endDate: '', travellers: 5 });

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 lg:px-8">
        <Card>
          <div className="mb-6">
            <p className="text-sm text-cyan-200">Create a trip</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Start a new group plan</h2>
            <p className="mt-2 text-sm text-slate-400">Set the trip basics and invite your crew into a polished planning flow.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="mb-2 block text-sm text-slate-400">Trip Name</span>
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-white" value={trip.name} onChange={(e) => setTrip({ ...trip, name: e.target.value })} placeholder="Summer Escape" />
            </label>
            <label className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="mb-2 block text-sm text-slate-400">Destination</span>
              <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-white" value={trip.destination} onChange={(e) => setTrip({ ...trip, destination: e.target.value })} placeholder="Lisbon" />
            </label>
            <label className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="mb-2 block text-sm text-slate-400">Start Date</span>
              <input type="date" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-white" value={trip.startDate} onChange={(e) => setTrip({ ...trip, startDate: e.target.value })} />
            </label>
            <label className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="mb-2 block text-sm text-slate-400">End Date</span>
              <input type="date" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-white" value={trip.endDate} onChange={(e) => setTrip({ ...trip, endDate: e.target.value })} />
            </label>
            <label className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 md:col-span-2">
              <span className="mb-2 block text-sm text-slate-400">Number of Travellers</span>
              <input type="number" min="2" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-3 py-3 text-white" value={trip.travellers} onChange={(e) => setTrip({ ...trip, travellers: Number(e.target.value) })} />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/onboarding"><Button>Create Trip</Button></Link>
            <Link to="/"><Button variant="secondary">Back home</Button></Link>
          </div>
        </Card>
      </main>
    </div>
  );
}
