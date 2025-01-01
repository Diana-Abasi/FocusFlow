import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';
import Soundscapes from './components/Soundscapes';
import Metrics from './components/Metrics';
import SaveTask from './components/SaveTask';

function App() {
  const [metrics, setMetrics] = useState({
    completedTasks: 0,
    totalFocusTime: 0,
    totalBreaks: 0,
  });

  const [savedTasks, setSavedTasks] = useState([]);

  return (
    <div className="app-container bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 min-h-screen text-white flex flex-col">
      <Header />
      <main className="p-6 flex-1 flex flex-row items-start justify-between gap-6">
        <div className="flex flex-col w-1/4">
          <SaveTask savedTasks={savedTasks} setSavedTasks={setSavedTasks} />
        </div>
        <div className="flex flex-col w-1/2">
          <Timer metrics={metrics} setMetrics={setMetrics} savedTasks={savedTasks} />
        </div>
        <div className="flex flex-col w-1/4">
          <Metrics metrics={metrics} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
