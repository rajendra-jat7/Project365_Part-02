import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(parseFloat(e.target.value) || 0);
  };

  const handleExpensesChange = (e) => {
    setExpenses(parseFloat(e.target.value) || 0);
  };

  const balance = income - expenses;

  const data = {
    labels: ['Income', 'Expenses', 'Balance'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: [income, expenses, balance],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
      },
    ],
  };

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Expense Tracker</h1>
      <form className='space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4'>
        <div>
          <label className='block text-sm font-medium'>Total Income:</label>
          <input
            type='number'
            className='w-full border border-gray-300 p-2'
            onChange={handleIncomeChange}
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Total Expenses:</label>
          <input
            type='number'
            className='w-full border border-gray-300 p-2'
            onChange={handleExpensesChange}
          />
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-bold'>Balance: ₹{balance}</h2>
        </div>
      </form>

      {/* Chart */}
      <div className='mt-8'>
        <Bar data={data} />
      </div>
    </div>
  );
};

export default HomePage;