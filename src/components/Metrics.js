import React from 'react';

function Metrics({ metrics, streak }) {
  const { completedTasks, totalFocusTime, totalBreaks } = metrics;

  // Badge thresholds
  const badgeLevels = {
    Bronze: 5,
    Silver: 15,
    Gold: 30,
    Platinum: 50,
  };

  // Determine current badge
  let currentBadge = null;
  let nextBadge = null;
  let progressPercentage = 0;

  if (completedTasks >= badgeLevels.Platinum) {
    currentBadge = 'Platinum';
    progressPercentage = 100;
  } else if (completedTasks >= badgeLevels.Gold) {
    currentBadge = 'Gold';
    nextBadge = 'Platinum';
    progressPercentage =
      ((completedTasks - badgeLevels.Gold) /
        (badgeLevels.Platinum - badgeLevels.Gold)) *
      100;
  } else if (completedTasks >= badgeLevels.Silver) {
    currentBadge = 'Silver';
    nextBadge = 'Gold';
    progressPercentage =
      ((completedTasks - badgeLevels.Silver) /
        (badgeLevels.Gold - badgeLevels.Silver)) *
      100;
  } else if (completedTasks >= badgeLevels.Bronze) {
    currentBadge = 'Bronze';
    nextBadge = 'Silver';
    progressPercentage =
      ((completedTasks - badgeLevels.Bronze) /
        (badgeLevels.Silver - badgeLevels.Bronze)) *
      100;
  } else {
    nextBadge = 'Bronze';
    progressPercentage = (completedTasks / badgeLevels.Bronze) * 100;
  }

  return (
    <section className="metrics bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-lg text-black w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">Metrics</h2>
      <div className="text-center mb-4">
        <p className="text-lg font-medium">
          <strong>Completed Tasks:</strong> {completedTasks}
        </p>
        <p className="text-lg font-medium">
          <strong>Total Focus Time:</strong> {Math.floor(totalFocusTime / 60)}{' '}
          min
        </p>
        <p className="text-lg font-medium">
          <strong>Total Breaks:</strong> {totalBreaks}
        </p>
        <p className="text-lg font-medium">
          <strong>Current Streak:</strong> {streak} days
        </p>
      </div>

      {currentBadge && (
        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow text-center">
          <p className="font-bold text-lg">You earned a {currentBadge} Badge!</p>
        </div>
      )}

      {nextBadge && (
        <div className="mt-4">
          <p className="text-lg text-center">
            <strong>Next Badge:</strong> {nextBadge}
          </p>
          <p className="text-sm text-gray-600 text-center">
            Complete{' '}
            <strong>
              {badgeLevels[nextBadge] - completedTasks} more tasks
            </strong>{' '}
            to earn this badge!
          </p>
          <div className="w-full bg-gray-300 rounded-full mt-2">
            <div
              className="bg-green-500 text-xs font-medium text-center p-0.5 leading-none rounded-full"
              style={{ width: `${progressPercentage}%` }}
            >
              {Math.floor(progressPercentage)}%
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-bold text-center mb-2">Badge History</h3>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Bronze: {metrics.badgeHistory?.Bronze || 0}</li>
          <li className="text-gray-700">Silver: {metrics.badgeHistory?.Silver || 0}</li>
          <li className="text-gray-700">Gold: {metrics.badgeHistory?.Gold || 0}</li>
          <li className="text-gray-700">Platinum: {metrics.badgeHistory?.Platinum || 0}</li>
        </ul>
      </div>
    </section>
  );
}

export default Metrics;
