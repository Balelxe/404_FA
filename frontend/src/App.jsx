import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateTripPage from './pages/CreateTripPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import ItineraryPage from './pages/ItineraryPage';
import ExpensesPage from './pages/ExpensesPage';
import MyTripsPage from './pages/MyTripsPage';
import { TripProvider } from './context/TripContext';

function App() {
  return (
    <TripProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateTripPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/my-trips" element={<MyTripsPage />} />
      </Routes>
    </TripProvider>
  );
}

export default App;
