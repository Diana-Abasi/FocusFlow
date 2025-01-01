import React, { useState } from 'react';

function Profile({ defaultFocusSettings, setDefaultFocusSettings }) {
  const [taskInput, setTaskInput] = useState('');

  const addFocusSetting = () => {
    if (taskInput.trim()) {
      setDefaultFocusSettings([...defaultFocusSettings, taskInput.trim()]);
      setTaskInput('');
    }
  };

  return (
    <section className="profile bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md mb-6">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <div>
        <input
          type="text"
          placeholder="Add default focus task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={addFocusSetting}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
      <ul className="list-disc mt-4 pl-6">
        {defaultFocusSettings.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Profile;
