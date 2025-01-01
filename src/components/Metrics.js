import React from 'react';

function Metrics({ metrics, streak }) {
  const { completedTasks, totalFocusTime, totalBreaks } = metrics;

  const badge = completedTasks >= 10 ? 'Gold' : completedTasks >= 5 ? 'Silver' : 'Bronze';

  return (
    <section className="metrics bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-lg text-black w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <p><strong>Completed Tasks:</strong> {completedTasks}</p>
      <p><strong>Total Focus Time:</strong> {Math.floor(totalFocusTime / 60)} min</p>
      <p><strong>Total Breaks:</strong> {totalBreaks}</p>
      <p><strong>Current Streak:</strong> {streak} days</p>
      <div className="mt-4 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow">
        <p className="font-bold">You earned a {badge} Badge!</p>
      </div>
    </section>
  );
}

export default Metrics;
