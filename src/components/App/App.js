import React from 'react';
import './App.css';
import Dungeon from '../Dungeon/Dungeon';
import Header from '../Header/Header';
function App() {
  return (
    <div className="container">
      <Header />
      <Dungeon />
    </div>
  );
}

export default App;
