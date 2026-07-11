const API_BASE_URL = 'http://localhost:4000';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}

export function fetchTrips() {
  return request('/api/trips');
}

export function fetchTrip(id) {
  return request(`/api/trips/${id}`);
}

export function createTrip(payload) {
  return request('/api/trips', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function fetchExpenses(tripId) {
  const query = tripId ? `?tripId=${encodeURIComponent(tripId)}` : '';
  return request(`/api/expenses${query}`);
}

export function createExpense(payload) {
  return request('/api/expenses', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function generateItinerary(payload) {
  return request('/api/generate-itinerary', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export function sendChatMessage(message, tripId) {
  return request('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message, tripId })
  });
}
