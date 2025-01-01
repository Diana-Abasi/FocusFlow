import React, { useState, useEffect } from 'react';

function Timer({ metrics, setMetrics, savedTasks, showPositiveReinforcement }) {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [impromptuTime, setImpromptuTime] = useState(25);

  const handleTaskSelection = (e) => {
    const task = savedTasks.find((task) => task.name === e.target.value);
    if (task) {
      setCurrentTask(task.name);
      setTime(task.time * 60);
    }
  };

  const handleImpromptuTimeChange = (e) => {
    let minutes = parseInt(e.target.value, 10);
    if (minutes > 60) minutes = 60;
    setImpromptuTime(minutes);
    setTime(minutes * 60);
    setCurrentTask('Impromptu Task');
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setMetrics((prevMetrics) => ({
              ...prevMetrics,
              completedTasks: prevMetrics.completedTasks + 1,
              totalFocusTime: prevMetrics.totalFocusTime + impromptuTime * 60,
            }));
            showPositiveReinforcement();
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, setMetrics, impromptuTime, showPositiveReinforcement]);

  return (
    <section className="timer bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-lg border border-gray-300 text-black w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{currentTask || 'Focus Timer'}</h2>
      <div className={`text-5xl font-mono mb-6 text-center ${isRunning ? 'animate-pulse text-green-500' : ''}`}>
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`py-2 px-6 rounded transform transition-all duration-200 ${
            isRunning
              ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg active:shadow-inner'
              : 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg active:shadow-inner'
          } font-bold`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => setTime(impromptuTime * 60)}
          className="py-2 px-6 rounded bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold shadow-lg active:shadow-inner"
        >
          Reset
        </button>
      </div>
      <div className="mt-4">
        <select
          onChange={handleTaskSelection}
          className="w-full p-2 border rounded text-black mb-4"
        >
          <option value="">Select a Saved Task</option>
          {savedTasks.map((task, index) => (
            <option key={index} value={task.name}>
              {task.name} - {task.time} min
            </option>
          ))}
        </select>
        <label htmlFor="impromptu-time" className="block text-sm font-bold mb-2">
          Impromptu Task Timer (Minutes)
        </label>
        <input
          id="impromptu-time"
          type="number"
          className="w-full p-2 border rounded text-black mb-4"
          value={impromptuTime}
          onChange={handleImpromptuTimeChange}
          min="1"
          max="60"
        />
      </div>
    </section>
  );
}

export default Timer;
