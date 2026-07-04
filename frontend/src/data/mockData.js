export const mockTrip = {
  id: 'trip-001',
  name: 'Santorini Reset',
  destination: 'Santorini, Greece',
  startDate: '2026-08-14',
  endDate: '2026-08-18',
  travellers: 5,
  budget: 5000,
  members: [
    { id: 1, name: 'Cassandra', budget: 1200, arrival: '2026-08-14 14:00', dietary: 'Vegetarian', pace: 'Balanced', interests: ['cafe', 'culture', 'food'] },
    { id: 2, name: 'Mina', budget: 900, arrival: '2026-08-14 16:30', dietary: 'None', pace: 'Chill', interests: ['hiking', 'shopping', 'sunset'] },
    { id: 3, name: 'Theo', budget: 1100, arrival: '2026-08-14 12:00', dietary: 'Gluten-free', pace: 'Packed', interests: ['nightlife', 'food', 'culture'] },
    { id: 4, name: 'Jules', budget: 1000, arrival: '2026-08-14 15:00', dietary: 'Vegan', pace: 'Balanced', interests: ['cafe', 'shopping', 'culture'] },
    { id: 5, name: 'Noah', budget: 800, arrival: '2026-08-14 13:45', dietary: 'None', pace: 'Chill', interests: ['hiking', 'food', 'beach'] }
  ],
  itinerary: [
    { day: 1, time: '09:00', activity: 'Breakfast at Oia', location: 'Oia', notes: 'Easy start after arrivals', duration: '2h', estimate: 48 },
    { day: 1, time: '13:00', activity: 'Caldera boat cruise', location: 'Aegean Sea', notes: 'Budget-friendly shared activity', duration: '3h', estimate: 60 },
    { day: 2, time: '10:00', activity: 'Village walk and cafés', location: 'Fira', notes: 'Balanced pace for everyone', duration: '4h', estimate: 35 },
    { day: 2, time: '18:30', activity: 'Sunset dinner', location: 'Imerovigli', notes: 'Vegetarian and gluten-free options', duration: '2h', estimate: 55 }
  ]
};

export const mockExpenses = [
  { id: 1, paidBy: 'Cassandra', amount: 60, category: 'Food', description: 'Dinner split with everyone', splitBetween: ['Cassandra', 'Mina', 'Theo', 'Jules', 'Noah'], status: 'settled' },
  { id: 2, paidBy: 'Theo', amount: 140, category: 'Transport', description: 'Taxi to the port', splitBetween: ['Theo', 'Jules', 'Noah'], status: 'pending' }
];
