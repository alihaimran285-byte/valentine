import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Or './ThankYouPage.css' if you want a separate CSS file

function ThankYouPage() {
  const navigate = useNavigate();

  const handleBackToMain = () => {
    navigate('/'); // Navigate back to MainPage
  };

  return (
    <div className="thankyou-container">
      <div className="floating-hearts"></div>
      <h1>Thank You! 💖</h1>
      <p>Thank you for agreeing to my promises. You mean the world to me!</p>
      <p>I love you endlessly. ❤️</p>
      <button onClick={handleBackToMain}>Back to Main Page</button>
    </div>
  );
}

export default ThankYouPage;