import React, { useState } from 'react';

function SaveTask({ savedTasks, setSavedTasks }) {
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState(25);
  const [taskSound, setTaskSound] = useState('');

  const addTask = () => {
    if (taskName.trim() && taskTime > 0) {
      const newTask = {
        name: taskName.trim(),
        time: taskTime,
        sound: taskSound,
      };
      setSavedTasks([...savedTasks, newTask]);
      setTaskName('');
      setTaskTime(25);
      setTaskSound('');
    }
  };

  return (
    <section className="save-task bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-lg text-black w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Save a Task</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          min="1"
          max="60"
          value={taskTime}
          onChange={(e) => setTaskTime(Number(e.target.value))}
          className="p-2 border rounded"
        />
        <select
          value={taskSound}
          onChange={(e) => setTaskSound(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">No Sound</option>
          <option value="Rain">Rain</option>
          <option value="White Noise">White Noise</option>
          <option value="Lo-fi Beats">Lo-fi Beats</option>
        </select>
        <button
          onClick={addTask}
          className="py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded shadow-lg hover:shadow-xl"
        >
          Save Task
        </button>
      </div>
      <ul className="mt-4 list-disc pl-6">
        {savedTasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.time} min - {task.sound || 'No Sound'}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SaveTask;
