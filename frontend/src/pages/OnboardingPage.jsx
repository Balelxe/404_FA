import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { mockTrip } from '../data/mockData';

export default function OnboardingPage() {
  const [members, setMembers] = useState(mockTrip.members);

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:px-8">
        <Card>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--green-primary)]">Traveller preferences</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">Tell TripBuddy AI about your crew</h2>
            </div>
            <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              5 travellers ready to plan
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {members.map((member) => (
              <div key={member.id} className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{member.name}</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm text-[var(--text-secondary)]">
                    Budget
                    <input className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]" defaultValue={member.budget} />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Arrival Time
                    <input className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]" defaultValue={member.arrival} />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Dietary
                    <input className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]" defaultValue={member.dietary} />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Pace
                    <input className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]" defaultValue={member.pace} />
                  </label>
                </div>
                <label className="mt-3 block text-sm text-[var(--text-secondary)]">
                  Interests
                  <input className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]" defaultValue={member.interests.join(', ')} />
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
