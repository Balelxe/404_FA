import { useState } from 'react';
import { Send, X } from 'lucide-react';

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  const openTelegram = () => {
    window.open('https://t.me/your_telegram_username', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50"> 
      <div className="flex items-end"> 
        {open && (
          <div className="mr-3 w-[320px] rounded-[24px] border border-[var(--border)] bg-white p-4 shadow-[0_10px_30px_rgba(16,80,60,0.08)]">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Contact Us on Telegram</p>
                <p className="text-xs muted">Chat with us on Telegram</p>
              </div>
              <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-[var(--bg-secondary)]">
                <X size={16} />
              </button>
            </div>
            <div className="min-h-[80px] rounded-lg bg-[var(--bg-secondary)] p-3 text-sm muted">Click the button below to open our Telegram channel and get in touch!</div>
            <div className="mt-3 flex gap-2">
              <button onClick={openTelegram} className="flex-1 rounded-full btn-primary py-2 text-white">Open Telegram</button>
              <button onClick={() => setOpen(false)} className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-[var(--text-primary)]">Close</button>
            </div>
          </div>
        )}

        <button
          onClick={openTelegram}
          className="flex h-12 w-12 items-center justify-center rounded-full btn-primary text-white shadow-[0_10px_30px_rgba(83,211,177,0.16)]"
          aria-label="Open Telegram"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
