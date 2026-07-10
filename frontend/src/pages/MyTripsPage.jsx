import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTrip } from '../context/TripContext';

export default function MyTripsPage() {
  const { trips, setActiveTrip } = useTrip();

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
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
                  <div className="flex gap-3">
                    <Button variant="secondary" onClick={() => setActiveTrip(trip)}>
                      Select
                    </Button>
                    <Link to="/dashboard"><Button onClick={() => setActiveTrip(trip)}>Open</Button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
