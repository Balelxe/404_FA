import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50"> 
      <div className="flex items-end"> 
        {open && (
          <div className="mr-3 w-[320px] rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">TripBuddy AI</p>
                <p className="text-xs muted">Ask about itinerary, expenses, or packing</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-gray-100">
                <X size={16} />
              </button>
            </div>
            <div className="min-h-[80px] rounded-lg bg-[var(--bg-secondary)] p-3 text-sm muted">Ask TripBuddy something like “Suggest a vegan dinner near Fira.”</div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 rounded-full btn-primary py-2 text-white">Ask AI</button>
              <button className="rounded-full border border-gray-200 bg-white px-4 py-2">Close</button>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((s) => !s)}
          className="flex h-12 w-12 items-center justify-center rounded-full btn-primary text-white shadow-lg"
          aria-label="Open assistant"
        >
          <MessageCircle size={18} />
        </button>
      </div>
    </div>
  );
}
