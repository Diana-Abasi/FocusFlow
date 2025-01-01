import React, { useState, useEffect } from 'react';

function Timer({ metrics, setMetrics, savedTasks }) {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [impromptuTime, setImpromptuTime] = useState(25);
  const [impromptuSound, setImpromptuSound] = useState('');

  const handleTaskSelection = (e) => {
    const task = savedTasks.find((task) => task.name === e.target.value);
    if (task) {
      setCurrentTask(task.name);
      setTime(task.time * 60);
    }
  };

  const handleImpromptuTimeChange = (e) => {
    const minutes = parseInt(e.target.value, 10);
    setImpromptuTime(minutes);
    setTime(minutes * 60);
    setCurrentTask('Impromptu Task');
  };

  const handleImpromptuSoundChange = (e) => {
    setImpromptuSound(e.target.value);
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
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, setMetrics, impromptuTime]);

  return (
    <section className="timer bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{currentTask || 'Focus Timer'}</h2>
      <div className="text-5xl font-mono mb-6">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`py-2 px-6 rounded ${isRunning ? 'bg-red-500' : 'bg-green-500'} text-white font-bold`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={() => setTime(impromptuTime * 60)}
          className="py-2 px-6 rounded bg-gray-500 text-white font-bold"
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
        <select
          id="impromptu-time"
          className="w-full p-2 border rounded text-black mb-4"
          value={impromptuTime}
          onChange={handleImpromptuTimeChange}
        >
          {[5, 10, 15, 20, 25, 30, 45, 60].map((minute) => (
            <option key={minute} value={minute}>
              {minute} Minutes
            </option>
          ))}
        </select>
        <label htmlFor="impromptu-sound" className="block text-sm font-bold mb-2">
          Impromptu Task Sound
        </label>
        <select
          id="impromptu-sound"
          className="w-full p-2 border rounded text-black"
          value={impromptuSound}
          onChange={handleImpromptuSoundChange}
        >
          <option value="">No Sound</option>
          <option value="Rain">Rain</option>
          <option value="White Noise">White Noise</option>
          <option value="Lo-fi Beats">Lo-fi Beats</option>
        </select>
      </div>
    </section>
  );
}

export default Timer;
