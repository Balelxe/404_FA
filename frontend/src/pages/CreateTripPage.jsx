import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

export default function CreateTripPage() {
  const [trip, setTrip] = useState({ name: '', destination: '', startDate: '', endDate: '', travellers: 5 });

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 lg:px-8">
        <Card>
          <div className="mb-6">
            <p className="text-sm text-[var(--green-primary)]">Create a trip</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">Start a new group plan</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Set the trip basics and invite your crew into a polished planning flow.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
              <span className="mb-2 block text-sm text-[var(--text-secondary)]">Trip Name</span>
              <input className="w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-primary)]" value={trip.name} onChange={(e) => setTrip({ ...trip, name: e.target.value })} placeholder="Summer Escape" />
            </label>
            <label className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
              <span className="mb-2 block text-sm text-[var(--text-secondary)]">Destination</span>
              <input className="w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-primary)]" value={trip.destination} onChange={(e) => setTrip({ ...trip, destination: e.target.value })} placeholder="Lisbon" />
            </label>
            <label className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
              <span className="mb-2 block text-sm text-[var(--text-secondary)]">Start Date</span>
              <input type="date" className="w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-primary)]" value={trip.startDate} onChange={(e) => setTrip({ ...trip, startDate: e.target.value })} />
            </label>
            <label className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
              <span className="mb-2 block text-sm text-[var(--text-secondary)]">End Date</span>
              <input type="date" className="w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-primary)]" value={trip.endDate} onChange={(e) => setTrip({ ...trip, endDate: e.target.value })} />
            </label>
            <label className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4 md:col-span-2">
              <span className="mb-2 block text-sm text-[var(--text-secondary)]">Number of Travellers</span>
              <input type="number" min="2" className="w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-primary)]" value={trip.travellers} onChange={(e) => setTrip({ ...trip, travellers: Number(e.target.value) })} />
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
