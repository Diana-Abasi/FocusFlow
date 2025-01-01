import React from 'react';

function Header({ userName, onThemeChange }) {
  return (
    <header className="header bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 text-center shadow-lg rounded-lg flex justify-between items-center">
      <h1 className="text-3xl font-bold">FocusFlow</h1>
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">Hello, {userName}!</span>
        <select
          onChange={(e) => onThemeChange(e.target.value)}
          className="p-2 rounded bg-white text-black shadow"
        >
          <option value="default">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
