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

async function callGemini(prompt) {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }

  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    throw new Error('Gemini request failed');
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
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

// POST /api/generate-itinerary
app.post('/api/generate-itinerary', async (req, res) => {
  const prompt = buildItineraryPrompt(req.body.members || []);

  try {
    const geminiResponse = await callGemini(prompt);
    if (geminiResponse) {
      const parsed = JSON.parse(geminiResponse);
      return res.json(parsed);
    }
  } catch (error) {
    console.error('Gemini fallback triggered:', error.message);
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

// Gemini prompt helpers
export function buildItineraryPrompt(travellers) {
  return `You are TripBuddy AI, an expert group travel planner. Create a fair, realistic itinerary for the following travellers. Respect budgets, arrival times, dietary restrictions, pace preferences, and interests. Group nearby activities together and avoid overloading chill travellers. Return valid JSON with day, time, activity, location, and notes fields. Travellers: ${JSON.stringify(travellers)}`;
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
