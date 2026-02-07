import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import romantic from '../assets/romantic.png'

function MainPage() {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [noBtnMoved, setNoBtnMoved] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [lovePercent, setLovePercent] = useState(null);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const navigate = useNavigate();

  // Countdown to Valentine's Day (Feb 14, 2024 - update year as needed)
  useEffect(() => {
    const targetDate = new Date('2024-02-14T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown('Happy Valentine\'s Day!');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleYes = () => {
    navigate('/love');
  };

  const handleNoClick = (event) => {
    event.preventDefault();
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoBtnPosition({ x: newX, y: newY });
    setNoBtnMoved(true);
  };

  const calculateLove = () => {
    if (name1 && name2) {
      const percent = Math.floor(Math.random() * 100) + 1; // Random percentage
      setLovePercent(`${name1} and ${name2} have ${percent}% love compatibility! 💕`);
    }
  };

  return (
    <div className="container">
      <h1>Happy Valentine's Day! <span className="heart">💖</span></h1>
      <p>A special message for my love: Roses are red, violets are blue, this website is made just for you! <span className="heart">❤️</span></p>
      <img src={romantic} alt="Romantic Image" />
      
      <h2>Countdown to Valentine's Day: {countdown}</h2>
      
      <h2>Love Calculator</h2>
      <input type="text" placeholder="Your Name" value={name1} onChange={(e) => setName1(e.target.value)} />
      <input type="text" placeholder="Their Name" value={name2} onChange={(e) => setName2(e.target.value)} />
      <button onClick={calculateLove}>Calculate Love</button>
      {lovePercent && <p className="love-result">{lovePercent}</p>}
      
      <h2>Will You Be My Valentine?</h2>
      <div className="button-container">
        <button onClick={handleYes}>Yes 💕</button>
        <button 
          className="no-btn" 
          onClick={handleNoClick}
          style={{
            position: noBtnMoved ? 'absolute' : 'static',
            left: noBtnMoved ? `${noBtnPosition.x}px` : 'auto',
            top: noBtnMoved ? `${noBtnPosition.y}px` : 'auto',
            transition: 'all 0.3s ease'
          }}
        >
          No 😢
        </button>
      </div>
      
      
    </div>
  );
}

export default MainPage;