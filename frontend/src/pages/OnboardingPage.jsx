import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTrip } from '../context/TripContext';

export default function OnboardingPage() {
  const { activeTrip, setActiveTrip } = useTrip();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (activeTrip?.members?.length) {
      setMembers(activeTrip.members.map((member) => ({
        ...member,
        interests: Array.isArray(member.interests) ? member.interests : []
      })));
      return;
    }

    const fallbackMembers = Array.from({ length: Number(activeTrip?.travellers) || 1 }, (_, index) => ({
      id: `${activeTrip?.id || 'trip'}-${index + 1}`,
      name: `Traveller ${index + 1}`,
      budget: '',
      arrival: '',
      dietary: '',
      pace: '',
      interests: []
    }));

    setMembers(fallbackMembers);
    setActiveTrip((current) => (current ? { ...current, members: fallbackMembers } : current));
  }, [activeTrip, setActiveTrip]);

  function updateMember(index, field, value) {
    const nextMembers = members.map((member, memberIndex) =>
      memberIndex === index ? { ...member, [field]: value } : member
    );

    setMembers(nextMembers);
    setActiveTrip((current) => (current ? { ...current, members: nextMembers } : current));
  }

  function updateInterests(index, value) {
    const nextMembers = members.map((member, memberIndex) =>
      memberIndex === index ? { ...member, interests: value.split(',').map((item) => item.trim()).filter(Boolean) } : member
    );

    setMembers(nextMembers);
    setActiveTrip((current) => (current ? { ...current, members: nextMembers } : current));
  }

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
              {members.length} travellers ready to plan
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {members.map((member, index) => (
              <div key={member.id} className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
                <label className="block text-sm text-[var(--text-secondary)]">
                  Traveller name
                  <input
                    className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                    value={member.name}
                    onChange={(event) => updateMember(index, 'name', event.target.value)}
                    placeholder={`Traveller ${index + 1}`}
                  />
                </label>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="text-sm text-[var(--text-secondary)]">
                    Budget
                    <input
                      className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                      value={member.budget}
                      onChange={(event) => updateMember(index, 'budget', event.target.value)}
                      placeholder="1200"
                    />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Arrival Time
                    <input
                      className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                      value={member.arrival}
                      onChange={(event) => updateMember(index, 'arrival', event.target.value)}
                      placeholder="2026-08-14 14:00"
                    />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Dietary
                    <input
                      className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                      value={member.dietary}
                      onChange={(event) => updateMember(index, 'dietary', event.target.value)}
                      placeholder="Vegetarian"
                    />
                  </label>
                  <label className="text-sm text-[var(--text-secondary)]">
                    Pace
                    <input
                      className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                      value={member.pace}
                      onChange={(event) => updateMember(index, 'pace', event.target.value)}
                      placeholder="Balanced"
                    />
                  </label>
                </div>
                <label className="mt-3 block text-sm text-[var(--text-secondary)]">
                  Interests
                  <input
                    className="mt-2 w-full rounded-[16px] border border-[var(--border)] bg-white px-3 py-2 text-[var(--text-primary)]"
                    value={member.interests.join(', ')}
                    onChange={(event) => updateInterests(index, event.target.value)}
                    placeholder="cafe, food, culture"
                  />
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
