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
    <form onSubmit={handleSubmit} className="flex gap-3 rounded-[20px] border border-[var(--border)] bg-white p-3 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask TripBuddy AI..."
        className="flex-1 rounded-[16px] border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none"
      />
      <button className="rounded-[16px] bg-gradient-to-r from-[var(--green-primary)] to-[var(--accent-sky)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(83,211,177,0.16)]">
        Send
      </button>
    </form>
  );
}
