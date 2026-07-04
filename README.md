# TripBuddy AI

TripBuddy AI is an AI-powered group travel planner that helps friends build fair itineraries, track shared expenses, and make planning feel calm instead of chaotic.

## Features
- Landing page with premium travel branding
- Create trip wizard
- Traveller onboarding form for budget, arrival time, dietary needs, pace, and interests
- Dashboard with overview cards, itinerary preview, spending chart, and AI chat panel
- Itinerary timeline and expense tracking pages
- Express API routes for trips, members, itinerary generation, and expenses
- Mock data so the app runs immediately without setup

## Folder structure
- frontend/ — React + Vite + Tailwind UI
- backend/ — Express API and mock data

## Local setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## API routes
- POST /api/trips
- POST /api/members
- GET /api/members
- POST /api/generate-itinerary
- POST /api/expenses
- GET /api/expenses

## Notes
- The current version uses mock data first and includes ready-to-connect Gemini prompt helpers in the backend.
- To enable real Gemini responses, add a valid API key to the backend .env file and swap the mock response logic for a real fetch call.
