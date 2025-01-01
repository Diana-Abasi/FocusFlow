import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Metrics from './components/Metrics';
import SaveTask from './components/SaveTask';
import PositiveReinforcement from './components/PositiveReinforcement';

function App() {
  const [metrics, setMetrics] = useState({
    completedTasks: 0,
    totalFocusTime: 0,
    totalBreaks: 0,
  });
  const [savedTasks, setSavedTasks] = useState([]);
  const [theme, setTheme] = useState('default');
  const [streak, setStreak] = useState(0);
  const [reinforcementMessage, setReinforcementMessage] = useState('');
  const [showReinforcement, setShowReinforcement] = useState(false);

  useEffect(() => {
    document.body.className =
      theme === 'dark'
        ? 'bg-gray-900'
        : theme === 'light'
        ? 'bg-gray-100'
        : 'bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600';
  }, [theme]);

  const showPositiveReinforcement = () => {
    const messages = [
      "Great job! You're building a powerful habit.",
      "Keep it up! Progress is being made every minute.",
      "You're doing amazing! Stay focused.",
      "Small steps lead to big success—well done!",
      "Fantastic effort! Celebrate your progress.",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setReinforcementMessage(randomMessage);
    setShowReinforcement(true);

    setTimeout(() => {
      setShowReinforcement(false);
    }, 5000);
  };

  return (
    <div className="app-container min-h-screen text-white flex flex-col">
      <Header userName="Diana" onThemeChange={setTheme} />
      <main className="p-6 flex-1 flex items-center justify-center gap-6">
        <div className="flex flex-col w-1/4">
          <SaveTask savedTasks={savedTasks} setSavedTasks={setSavedTasks} />
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <Timer
            metrics={metrics}
            setMetrics={setMetrics}
            savedTasks={savedTasks}
            showPositiveReinforcement={showPositiveReinforcement}
          />
        </div>
        <div className="flex flex-col w-1/4">
          <Metrics metrics={metrics} streak={streak} />
        </div>
      </main>
      {showReinforcement && (
        <PositiveReinforcement
          isVisible={showReinforcement}
          message={reinforcementMessage}
        />
      )}
    </div>
  );
}

export default App;
