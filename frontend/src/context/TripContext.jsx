import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchTrips } from '../api/client';
import { mockTrip } from '../data/mockData';

const TripContext = createContext(null);

export function TripProvider({ children }) {
  const [trips, setTrips] = useState([mockTrip]);
  const [activeTrip, setActiveTrip] = useState(mockTrip);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTrips() {
      try {
        const data = await fetchTrips();
        if (Array.isArray(data) && data.length > 0) {
          setTrips(data);
          setActiveTrip(data[data.length - 1]);
        } else {
          setTrips([mockTrip]);
          setActiveTrip(mockTrip);
        }
      } catch (err) {
        console.error(err);
        setError('Unable to load trips right now.');
        setTrips([mockTrip]);
        setActiveTrip(mockTrip);
      } finally {
        setLoading(false);
      }
    }

    loadTrips();
  }, []);

  useEffect(() => {
    if (!activeTrip?.id) {
      return;
    }

    setTrips((currentTrips) => {
      const existingTripIndex = currentTrips.findIndex((trip) => trip.id === activeTrip.id);

      if (existingTripIndex === -1) {
        return [activeTrip, ...currentTrips];
      }

      const existingTrip = currentTrips[existingTripIndex];
      const hasChanged = JSON.stringify(existingTrip) !== JSON.stringify(activeTrip);

      if (!hasChanged) {
        return currentTrips;
      }

      return currentTrips.map((trip, index) => (index === existingTripIndex ? activeTrip : trip));
    });
  }, [activeTrip]);

  const value = useMemo(() => ({
    trips,
    activeTrip,
    setActiveTrip,
    loading,
    error,
    setTrips
  }), [activeTrip, error, loading, trips]);

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

export function useTrip() {
  const context = useContext(TripContext);

  if (!context) {
    throw new Error('useTrip must be used within a TripProvider');
  }

  return context;
}
