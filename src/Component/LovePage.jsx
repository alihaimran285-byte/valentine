import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import bubu from '../assets/bubu-loving-dudu.png';
import cute from '../assets/cute.jpg';
import cutes from '../assets/cutes.jpg';
import hurt from '../assets/hurt.jpg';
import sleepy from '../assets/sleep.jpg';
import five from '../assets/five.jfif';
import four from '../assets/four.jfif';
import eight from '../assets/eight.jfif';
import seven from '../assets/seven.jfif';
import six from '../assets/six.jfif';



function LovePage() {
  const [heartClicks, setHeartClicks] = useState(0);
  const [replyMessage, setReplyMessage] = useState('');
  const images = [bubu, cute, cutes, hurt, sleepy, five, four, eight, seven, six];
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setHeartClicks(heartClicks + 1);
    alert(`You clicked a heart! Total clicks: ${heartClicks + 1} 💖`);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    console.log('Reply Message:', replyMessage);
    alert('Thank you for your reply! 💌');
    setReplyMessage('');
  };

  const handleBack = () => {
    navigate('/');
  };

  const handlePromise = () => {
    navigate('/promise'); // Navigate to PromisePage
  };

  return (
    <div className="love-container">
      <div className="confetti"></div>
      <div className="floating-hearts"></div>
      <h1>You Said Yes! 💖</h1>
      
      <div className="small-heart">
        <span></span>
      </div>
      
      <p>My dearest love, thank you for saying yes! You make my heart skip a beat every day. I love you more than words can say. Happy Valentine's Day! <span className="heart" onClick={handleHeartClick}>❤️</span></p>
      <p>Forever yours, [Your Name]</p>
      
      <h2>Our Memories</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Memory ${index + 1}`} 
            onError={(e) => { e.target.style.display = 'none'; console.error(`Image ${index + 1} failed to load`); }}
          />
        ))}
      </div>
      
      <h2>Send Me a Reply</h2>
      <form onSubmit={handleReplySubmit}>
        <textarea placeholder="Your message..." value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} required></textarea>
        <button type="submit">Send Love Back 💌</button>
      </form>
      
      <audio autoPlay loop>
        <source src="https://www.soundjay.com/misc/sounds/romantic-guitar.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button onClick={handleBack}>Back to Main Page</button>
      <button onClick={handlePromise}>Promise Page</button> {/* Added Promise Page button */}
      
    </div>
  );
}

export default LovePage;