import { motion } from 'framer-motion';
import ItineraryTimeline from './ItineraryTimeline';
import ExpenseChart from './ExpenseChart';
import { mockTrip } from '../data/mockData';

export default function PhoneMockup() {
  const screens = [
    {
      id: 'home',
      title: mockTrip.name,
      content: (
        <div className="space-y-3">
          {mockTrip.itinerary.slice(0,3).map((it) => (
            <div key={it.activity} className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{it.activity}</p>
                <p className="text-xs muted">{it.location}</p>
              </div>
              <div className="text-sm muted">{it.time}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'itinerary',
      title: 'Itinerary',
      content: <ItineraryTimeline items={mockTrip.itinerary} />
    },
    {
      id: 'expenses',
      title: 'Expenses',
      content: <div className="p-3"><ExpenseChart data={[{name:'Food',value:240},{name:'Transport',value:160},{name:'Stay',value:140}]} /></div>
    }
  ];

  return (
    <div className="flex justify-center">
      <div className="relative w-[320px]">
        {screens.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ y: 40 * i, scale: 1 - i * 0.03, opacity: 0 }}
            animate={{ y: 0, scale: 1 - i * 0.03, opacity: 1 }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
            className={`absolute left-0 right-0 top-0 rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_40px_rgba(27,43,52,0.06)]`}>
            <div className="h-[640px] overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[var(--bg-secondary)]">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="h-8 w-8 rounded-full bg-[var(--bg-secondary)]" />
                <div className="h-2 w-24 rounded-full bg-[var(--bg-secondary)]" />
                <div className="h-8 w-8 rounded-full bg-[var(--bg-secondary)]" />
              </div>
              <div className="px-4 pb-6"> 
                <h4 className="text-lg font-semibold">{s.title}</h4>
                <div className="mt-4">{s.content}</div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="absolute -bottom-6 left-1/2 w-72 -translate-x-1/2 text-center text-xs muted">Interactive preview</div>
      </div>
    </div>
  );
}
