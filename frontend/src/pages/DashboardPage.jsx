import { useEffect, useState } from 'react';
import { Bot, Clock3, Sparkles, Wallet, Plane, UtensilsCrossed, CircleDollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import DashboardCard from '../components/DashboardCard';
import ExpenseChart from '../components/ExpenseChart';
import MemberCard from '../components/MemberCard';
import Button from '../components/Button';
import ChatInput from '../components/ChatInput';
import { Link } from 'react-router-dom';
import { useTrip } from '../context/TripContext';
import { fetchExpenses, sendChatMessage } from '../api/client';

export default function DashboardPage() {
  const { activeTrip } = useTrip();
  const members = activeTrip?.members || [];
  const [expenses, setExpenses] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatting, setIsChatting] = useState(false);
  const [chatError, setChatError] = useState('');

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await fetchExpenses(activeTrip.id);
        setExpenses(data);
      } catch (error) {
        console.error(error);
        setExpenses([]);
      }
    }

    if (activeTrip?.id) {
      loadExpenses();
    } else {
      setExpenses([]);
    }
  }, [activeTrip?.id]);

  const chartData = Object.entries(
    expenses.reduce((summary, expense) => {
      const category = expense.category || 'Other';
      summary[category] = (summary[category] || 0) + expense.amount;
      return summary;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const currentBalance = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  async function handleSendMessage(text) {
    const cleanedText = text.trim();
    if (!cleanedText) return;

    setChatError('');
    setChatHistory((prev) => [...prev, { id: Date.now(), role: 'user', content: cleanedText }]);
    setIsChatting(true);

    try {
      const data = await sendChatMessage(cleanedText, activeTrip?.id);
      setChatHistory((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'assistant', content: data?.reply || "TripBuddy AI isn't available right now — try again shortly." }
      ]);
    } catch (error) {
      console.error(error);
      setChatError('TripBuddy AI could not respond right now.');
      setChatHistory((prev) => [
        ...prev,
        { id: Date.now() + 2, role: 'assistant', content: "TripBuddy AI isn't available right now — try again shortly." }
      ]);
    } finally {
      setIsChatting(false);
    }
  }

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <section className="grid gap-4 md:grid-cols-3">
              <DashboardCard title="Trip overview" value={activeTrip?.destination || 'Your trip'} hint="A beautiful balance of chill and energy" icon="✈️" />
              <DashboardCard title="Group budget" value={`$${activeTrip?.budget || 0}`} hint="Comfort-first planning" icon="💸" />
              <DashboardCard title="Members" value={`${members.length} travellers`} hint="Preferences synced" icon="👥" />
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <Card className="transition duration-300 hover:-translate-y-1">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-[var(--green-primary)]">AI planning status</p>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Your trip is nearly ready</h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">A calm, coordinated plan for your group.</p>
                  </div>
                  <Link to="/itinerary"><Button variant="secondary">Open timeline</Button></Link>
                </div>

                <div className="mb-6 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: 'Budget Optimized', detail: 'Stays within your shared range', icon: Wallet },
                    { title: 'Flights Synced', detail: 'Arrival windows align smoothly', icon: Plane },
                    { title: 'Dietary Matched', detail: 'Meals fit the whole group', icon: UtensilsCrossed },
                    { title: 'Interests Balanced', detail: 'Chill + culture + nightlife', icon: Sparkles }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                        <div className="mb-3 flex items-center gap-2 text-[var(--green-primary)]">
                          <Icon size={16} />
                          <p className="text-sm font-medium text-[var(--text-primary)]">{item.title}</p>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[var(--text-secondary)]">Itinerary ready</p>
                      <p className="text-lg font-semibold text-[var(--text-primary)]">Thursday to Sunday flow</p>
                    </div>
                    <div className="rounded-full bg-[var(--success)]/15 px-3 py-1 text-sm text-[var(--success)]">Ready</div>
                  </div>
                  <div className="space-y-3">
                    {(activeTrip?.itinerary || []).map((item) => (
                      <div key={`${item.day}-${item.time}`} className="flex items-start gap-3 rounded-[20px] border border-[var(--border)] bg-white p-3">
                        <div className="rounded-2xl bg-[var(--bg-secondary)] p-2 text-[var(--green-primary)]">
                          <Clock3 size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-semibold text-[var(--text-primary)]">{item.activity}</p>
                            <span className="text-sm text-[var(--text-secondary)]">{item.time}</span>
                          </div>
                          <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="transition duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--green-primary)]">Expense summary</p>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Shared costs</h3>
                  </div>
                  <Link to="/expenses"><Button variant="secondary">Add expense</Button></Link>
                </div>
                <div className="rounded-[24px] border border-[var(--border)] bg-white p-4">
                  {chartData.length === 0 ? (
                    <div className="rounded-[24px] border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] p-6 text-center text-sm text-[var(--text-secondary)]">
                      No expenses yet — add one from the Expenses page
                    </div>
                  ) : (
                    <ExpenseChart data={chartData} />
                  )}
                </div>
                <div className="mt-4 rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span>Current balance</span>
                    <span className="font-semibold text-[var(--text-primary)]">${currentBalance}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-[var(--green-primary)]">
                    <CircleDollarSign size={16} />
                    <span>Most expenses are already shared fairly.</span>
                  </div>
                </div>
              </Card>
            </section>

            <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <Card className="transition duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-[var(--green-primary)]">Group members</p>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">People and preferences</h3>
                  </div>
                  <div className="flex -space-x-2">
                    {members.slice(0, 4).map((member, idx) => (
                      <div key={member.id} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--border)] bg-gradient-to-br from-[var(--accent-sky)] to-[var(--accent-coral)] text-sm font-semibold text-white">
                        {member.name.slice(0, 1)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {members.map((member) => <MemberCard key={member.id} member={member} />)}
                </div>
              </Card>

              <Card className="transition duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--green-primary)]">TripBuddy AI</p>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Ask for planning help</h3>
                  </div>
                  <div className="rounded-full bg-[var(--bg-secondary)] p-2 text-[var(--green-primary)]">
                    <Bot size={18} />
                  </div>
                </div>
                <div className="mb-4 rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4 text-sm leading-7 text-[var(--text-secondary)]">
                  “Suggest a dinner spot that fits vegetarian and gluten-free guests while staying under our food budget.”
                </div>
                <div className="mb-4 space-y-3">
                  {chatHistory.length === 0 && !isChatting && (
                    <div className="rounded-[20px] border border-dashed border-[var(--border)] bg-white p-4 text-sm text-[var(--text-secondary)]">
                      Ask anything about meals, local spots, pace, or travel plans for this trip.
                    </div>
                  )}
                  {chatHistory.map((entry) => (
                    <div key={entry.id} className={`flex ${entry.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] rounded-[20px] px-4 py-3 text-sm leading-6 shadow-sm ${entry.role === 'user' ? 'bg-[var(--green-primary)] text-white' : 'border border-[var(--border)] bg-white text-[var(--text-primary)]'}`}>
                        {entry.content}
                      </div>
                    </div>
                  ))}
                  {isChatting && (
                    <div className="flex justify-start">
                      <div className="rounded-[20px] border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--text-secondary)] shadow-sm">
                        TripBuddy AI is typing…
                      </div>
                    </div>
                  )}
                  {chatError && (
                    <div className="rounded-[20px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {chatError}
                    </div>
                  )}
                </div>
                <ChatInput onSend={handleSendMessage} />
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
