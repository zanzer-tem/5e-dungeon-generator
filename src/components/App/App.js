import React from 'react';
import './App.css';
import Dungeon from '../Dungeon/Dungeon';
function App() {
  return (
    <div className="container">
      <header >
        <div>Zanzer's Dungeon</div>
        <div>
            <span role="img" aria-label="skull">&#x1F480;</span>
            <p>Refresh for a new dungeon</p>
        </div>
      </header>
      <Dungeon />
    </div>
  );
}

export default App;
