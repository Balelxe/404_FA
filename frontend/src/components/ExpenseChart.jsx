import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#7CCCF8', '#FF8A65', '#FDBB5F', '#43C59E', '#237A57'];

export default function ExpenseChart({ data }) {
  const total = data.reduce((s, d) => s + (d.value || 0), 0);

  return (
    <div className="h-72 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={2}>
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center">
        <div className="mx-auto w-28 rounded-full bg-white p-3 shadow-sm">
          <div className="text-sm muted">Total</div>
          <div className="text-lg font-semibold">${total}</div>
        </div>
      </div>
    </div>
  );
}
