import React from 'react';

function PositiveReinforcement({ onClose }) {
  const messages = [
    'Great job! You’re building a powerful habit.',
    'Keep up the great work! Small steps lead to big success.',
    'You’re doing amazing! Stay focused and keep going.',
  ];

  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="positive-reinforcement bg-green-100 p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold mb-2">Positive Reinforcement</h3>
      <p>{randomMessage}</p>
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

export default PositiveReinforcement;
