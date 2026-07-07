import { useEffect, useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Clock3, Sparkles, Wallet, Users, Plane, UtensilsCrossed, Mountain, Camera, CircleDollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import DashboardCard from '../components/DashboardCard';
import ExpenseChart from '../components/ExpenseChart';
import MemberCard from '../components/MemberCard';
import Button from '../components/Button';
import ChatInput from '../components/ChatInput';
import { mockTrip } from '../data/mockData';
import { Link } from 'react-router-dom';
import { fetchMembers, fetchExpenses } from '../api/client';

const chartData = [
  { name: 'Food', value: 240 },
  { name: 'Transport', value: 160 },
  { name: 'Stay', value: 140 },
  { name: 'Activities', value: 120 }
];

export default function DashboardPage() {
  const [members, setMembers] = useState(mockTrip.members);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [membersData, expensesData] = await Promise.all([fetchMembers(), fetchExpenses()]);
        setMembers(membersData);
        setExpenses(expensesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <section className="grid gap-4 md:grid-cols-3">
              <DashboardCard title="Trip overview" value={mockTrip.destination} hint="A beautiful balance of chill and energy" icon="✈️" />
              <DashboardCard title="Group budget" value={`$${mockTrip.budget}`} hint="Comfort-first planning" icon="💸" />
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
                    {mockTrip.itinerary.map((item) => (
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
                  <ExpenseChart data={chartData} />
                </div>
                <div className="mt-4 rounded-[20px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span>Current balance</span>
                    <span className="font-semibold text-[var(--text-primary)]">$1,240</span>
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
                  {loading ? (
                    <p className="text-sm text-[var(--text-secondary)]">Loading group members…</p>
                  ) : (
                    members.map((member) => <MemberCard key={member.id} member={member} />)
                  )}
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
                <ChatInput onSend={() => {}} />
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
