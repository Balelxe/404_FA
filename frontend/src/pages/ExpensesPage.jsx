import { useEffect, useState } from 'react';
import { ReceiptText, Sparkles, Wallet } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchExpenses, createExpense } from '../api/client';
import { useTrip } from '../context/TripContext';

export default function ExpensesPage() {
  const { activeTrip } = useTrip();
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [category, setCategory] = useState('Food');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await fetchExpenses(activeTrip?.id);
        setExpenses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (activeTrip?.id) {
      loadExpenses();
    } else {
      setExpenses([]);
      setLoading(false);
    }
  }, [activeTrip?.id]);

  useEffect(() => {
    setPaidBy(activeTrip?.members?.[0]?.name || '');
  }, [activeTrip?.id]);

  async function addExpense() {
    if (!description.trim() || !amount || !paidBy) return;

    const numericAmount = Number(amount);
    if (Number.isNaN(numericAmount) || numericAmount <= 0) return;

    const newExpense = {
      tripId: activeTrip?.id,
      paidBy,
      amount: numericAmount,
      category,
      description: description.trim(),
      splitBetween: (activeTrip?.members || []).map((member) => member.name),
      status: 'pending'
    };

    try {
      const created = await createExpense(newExpense);
      setExpenses((current) => [created, ...current]);
      setDescription('');
      setAmount('');
      setCategory('Food');
      setPaidBy(activeTrip?.members?.[0]?.name || '');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen text-[var(--text-primary)] bg-transparent">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <Sidebar />
          <div className="flex-1 space-y-6">
            <Card className="transition duration-300 hover:-translate-y-1">
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-sm text-[var(--green-primary)]">
                    <ReceiptText size={14} />
                    Expense tracker
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">Track shared costs clearly</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">Turn group purchases into simple, visible balances.</p>
                </div>
                <Button onClick={addExpense}>Add expense</Button>
              </div>
              <div className="grid gap-3 md:grid-cols-[1.2fr_0.25fr_0.25fr_0.25fr]">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-24 w-full rounded-[24px] border border-[var(--border)] bg-white p-4 text-sm text-[var(--text-primary)] outline-none ring-0"
                  placeholder='Example: Dinner at the harbor'
                />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-[24px] border border-[var(--border)] bg-white p-4 text-sm text-[var(--text-primary)] outline-none ring-0"
                  placeholder="Amount"
                />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-[24px] border border-[var(--border)] bg-white p-4 text-sm text-[var(--text-primary)] outline-none ring-0"
                >
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Stay">Stay</option>
                  <option value="Activities">Activities</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  value={paidBy}
                  onChange={(e) => setPaidBy(e.target.value)}
                  className="w-full rounded-[24px] border border-[var(--border)] bg-white p-4 text-sm text-[var(--text-primary)] outline-none ring-0"
                >
                  {(activeTrip?.members || []).map((member) => (
                    <option key={member.id} value={member.name}>
                      {member.name}
                    </option>
                  ))}
                </select>
              </div>
            </Card>

            <Card className="transition duration-300 hover:-translate-y-1">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-sm text-[var(--green-primary)]">Recent expenses</p>
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Who paid what</h3>
                </div>
                <div className="rounded-full bg-[var(--bg-secondary)] px-3 py-1 text-sm text-[var(--text-secondary)]">Live</div>
              </div>
              <div className="space-y-3">
                {loading ? (
                  <p className="text-sm text-[var(--text-secondary)]">Loading expenses…</p>
                ) : expenses.length === 0 ? (
                  <div className="rounded-[24px] border border-dashed border-[var(--border)] bg-[var(--bg-secondary)] p-6 text-center text-sm text-[var(--text-secondary)]">
                    No expenses yet. Add the first shared cost to get started.
                  </div>
                ) : expenses.map((expense) => (
                  <div key={expense.id} className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-secondary)] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold text-[var(--text-primary)]">{expense.description}</p>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">Paid by {expense.paidBy} • {expense.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-[var(--text-primary)]">${expense.amount}</p>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">Split among {expense.splitBetween.length}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
