import { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask TripBuddy AI..."
        className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none"
      />
      <button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white">
        Send
      </button>
    </form>
  );
}
