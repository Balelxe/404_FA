import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mockTrip, mockExpenses } from './mockData.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const trips = [mockTrip];
const expenses = [...mockExpenses];

async function callAI(prompt, { jsonMode = false } = {}) {
  if (!process.env.OPENROUTER_API_KEY) {
    return null;
  }

  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      ...(jsonMode ? { response_format: { type: 'json_object' } } : {})
    })
  });

  if (!response.ok) {
    throw new Error('AI request failed');
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content || '{}';
  return text;
}

// GET /api/trips
app.get('/api/trips', (req, res) => {
  res.json(trips);
});

// GET /api/trips/:id
app.get('/api/trips/:id', (req, res) => {
  const trip = trips.find((item) => item.id === req.params.id);
  if (!trip) {
    return res.status(404).json({ message: 'Trip not found' });
  }

  res.json(trip);
});

// POST /api/trips
app.post('/api/trips', (req, res) => {
  const trip = { id: Date.now().toString(), ...req.body };
  trips.push(trip);
  res.status(201).json(trip);
});

// GET /api/trips/:id/members
app.get('/api/trips/:id/members', (req, res) => {
  const trip = trips.find((t) => t.id === req.params.id);
  res.json(trip?.members || []);
});

// POST /api/chat
app.post('/api/chat', async (req, res) => {
  const { message, tripId } = req.body || {};
  const trip = trips.find((item) => item.id === tripId);
  const prompt = buildChatPrompt(message, trip);

  try {
    const aiResponse = await callAI(prompt);
    if (aiResponse) {
      return res.json({ reply: aiResponse.trim() || 'TripBuddy AI can help with that.' });
    }
  } catch (error) {
    console.error('AI chat request failed:', error.message);
  }

  return res.json({ reply: "TripBuddy AI isn't available right now — try again shortly." });
});

// POST /api/generate-itinerary
app.post('/api/generate-itinerary', async (req, res) => {
  const prompt = buildItineraryPrompt(req.body.members || []);

  try {
    const aiResponse = await callAI(prompt, { jsonMode: true });
    if (aiResponse) {
      const cleanedResponse = aiResponse.trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '');
      const parsed = JSON.parse(cleanedResponse);
      return res.json(parsed);
    }
  } catch (error) {
    console.error('AI itinerary request failed:', error.message);
  }

  const itinerary = {
    trip: req.body.tripName || 'TripBuddy AI Plan',
    days: [
      { day: 1, time: '09:00', activity: 'Breakfast and welcome walk', location: 'Central district', notes: 'Gentle start for everyone' },
      { day: 1, time: '14:00', activity: 'Shared activity', location: 'Local highlight', notes: 'Balanced with budget' }
    ]
  };
  res.json(itinerary);
});

// POST /api/expenses
app.post('/api/expenses', (req, res) => {
  const expense = { id: Date.now(), tripId: req.body.tripId, ...req.body };
  expenses.push(expense);
  res.status(201).json(expense);
});

// GET /api/expenses
app.get('/api/expenses', (req, res) => {
  const { tripId } = req.query;
  const filtered = tripId ? expenses.filter((e) => e.tripId === tripId) : expenses;
  res.json(filtered);
});

// AI prompt helpers
export function buildItineraryPrompt(travellers) {
  return `You are TripBuddy AI, an expert group travel planner. Create a fair, realistic itinerary for the following travellers. Respect budgets, arrival times, dietary restrictions, pace preferences, and interests. Group nearby activities together and avoid overloading chill travellers. Return valid JSON with day, time, activity, location, and notes fields. Travellers: ${JSON.stringify(travellers)}`;
}

export function buildChatPrompt(question, trip) {
  const safeQuestion = (question || '').trim();
  const tripContext = trip
    ? `Trip destination: ${trip.destination || 'your destination'}\nTrip dates: ${trip.startDate || 'TBD'} to ${trip.endDate || 'TBD'}\nGroup members:\n${(trip.members || []).map((member) => `- ${member.name || 'Member'}: budget ${member.budget || 'flexible'}, dietary ${member.dietary || 'flexible'}, pace ${member.pace || 'balanced'}, interests ${member.interests || 'varied'}`).join('\n')}`
    : 'No specific trip context provided.';

  return `You are TripBuddy AI, a helpful group travel assistant for this trip. Use the trip context below to answer the user's question concisely and practically.\n\nTrip context:\n${tripContext}\n\nUser question: ${safeQuestion || 'Help me plan something practical for this trip.'}\n\nAnswer directly with a short practical suggestion. Respect any constraints mentioned such as dietary needs, pace, interests, and budget.`;
}

export function buildExpenseParserPrompt(text) {
  return `Convert this natural language expense into a structured JSON object with paidBy, amount, category, description, and splitBetween. Return valid JSON only. Expense text: ${text}`;
}

app.get('/', (req, res) => {
  res.json({ message: 'TripBuddy AI backend is running' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`TripBuddy AI backend listening on port ${PORT}`);
});
