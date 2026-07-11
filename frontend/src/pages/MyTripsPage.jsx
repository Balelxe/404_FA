import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTrip } from '../context/TripContext';
import { mockTrip } from '../data/mockData';

export default function MyTripsPage() {
  const { trips, activeTrip, setActiveTrip, setTrips } = useTrip();
  const [tripToDelete, setTripToDelete] = useState(null);

  const handleDeleteTrip = () => {
    if (!tripToDelete) return;

    const remainingTrips = trips.filter((trip) => trip.id !== tripToDelete.id);

    if (remainingTrips.length === 0) {
      setTrips([mockTrip]);
      setActiveTrip(mockTrip);
    } else {
      setTrips(remainingTrips);
      if (activeTrip?.id === tripToDelete.id) {
        setActiveTrip(remainingTrips[0]);
      }
    }

    setTripToDelete(null);
  };

  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)]">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 lg:px-8">
        <Card>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--green-primary)]">My Trips</p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">Choose a trip to continue planning</h2>
            </div>
            <Link to="/create"><Button variant="secondary">Create another trip</Button></Link>
          </div>

          <div className="grid gap-4">
            {trips.map((trip) => (
              <div key={trip.id} className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">{trip.name}</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{trip.destination} • {trip.startDate} to {trip.endDate}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/dashboard"><Button onClick={() => setActiveTrip(trip)}>Open</Button></Link>
                    <Button
                      variant="secondary"
                      className="border border-red-300 text-red-600 hover:bg-red-50"
                      onClick={() => setTripToDelete(trip)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>

      {tripToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-[24px] border border-[var(--border)] bg-[var(--bg-primary)] p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-primary)]">Delete trip</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">Delete “{tripToDelete.name}”?</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              This action cannot be undone. The trip and its saved planning details will be removed from your list.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setTripToDelete(null)}>
                Cancel
              </Button>
              <Button
                className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-400"
                onClick={handleDeleteTrip}
              >
                Delete trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
