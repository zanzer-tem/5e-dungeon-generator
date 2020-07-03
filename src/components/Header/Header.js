import React from 'react';
import './Header.css';

function Header() {
  return (
    <header >
        <div>Zanzer's Dungeon</div>
        <div>
            <span role="img" aria-label="skull">&#x1F480;</span>
            <p>Refresh for a new dungeon</p>
        </div>
    </header>
  );
}

export default Header;