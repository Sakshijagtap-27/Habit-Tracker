import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const HabitPieChart = ({ habitData }) => {
  const labels = habitData.map(item => item.label);
  const data = habitData.map(item => parseFloat(item.value));

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Habit Completion',
        data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'],
      },
    ],
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px' }}>
      <Pie data={chartData} />
    </div>
  );
};

export default HabitPieChart;
