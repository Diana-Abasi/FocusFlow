import React from 'react';

function Metrics({ metrics }) {
  const { completedTasks, totalFocusTime, totalBreaks } = metrics;

  return (
    <section className="metrics bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md mt-6">
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <p><strong>Completed Tasks:</strong> {completedTasks}</p>
      <p><strong>Total Focus Time:</strong> {Math.floor(totalFocusTime / 60)} min</p>
      <p><strong>Total Breaks:</strong> {totalBreaks}</p>
    </section>
  );
}

export default Metrics;
