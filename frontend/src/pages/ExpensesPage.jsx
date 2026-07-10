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
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExpenses() {
      try {
        const data = await fetchExpenses();
        setExpenses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadExpenses();
  }, []);

  async function addExpense() {
    if (!input.trim()) return;
    const newExpense = {
      paidBy: 'You',
      amount: 90,
      category: 'Food',
      description: input,
      splitBetween: ['Cassandra', 'Mina', 'Theo', 'Jules', 'Noah'],
      status: 'pending'
    };

    try {
      const created = await createExpense(newExpense);
      setExpenses([created, ...expenses]);
      setInput('');
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
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-24 w-full rounded-[24px] border border-[var(--border)] bg-white p-4 text-sm text-[var(--text-primary)] outline-none ring-0"
                placeholder='Example: Cassandra paid $60 for dinner split with everyone'
              />
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
