import { useState } from 'react';
import './header.css';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <nav className={`nav ${isActive ? 'active' : ''}`}>
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <button className="burger" onClick={handleBurgerClick}>
        {isActive ? '✕' : '☰'}
      </button>
    </header>
  );
}
