import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function PromisePage() {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/thankyou'); // Navigate to ThankYouPage on Yes
  };

  const handleNo = () => {
    setResponse('No, I do not agree.');
  };

  const handleBack = () => {
    navigate('/love'); // Navigate back to LovePage
  };

  return (
    <div className="promise-container">
      <h1>My Promises</h1>
      <p>1. I promise that I will not talk to any other girl.</p>
      <p>2. I promise to always be loyal and true to you.</p>
      <p>3. I promise to always make you smile and cherish every moment with you.</p>
      <p>4. I promise to support you in all your dreams and be your biggest fan.</p>
      <p>5. I promise to always be there for you in good and bad times.</p>
      <p>6. I promise to love you unconditionally forever.</p>
      <p>This is from my heart, and I will stick to it.</p>
      <div className="signature">
        <p>Your name or signature here</p>
      </div>
      <div className="options">
        <p>Do you agree to all these promises?</p>
        <button onClick={handleYes} className="yes-btn">Yes</button>
        <button onClick={handleNo} className="no-btn">No</button>
      </div>
      {response && <p className="response">{response}</p>}
      <button onClick={handleBack} className="back-btn">Back to Love Page</button>
      
    </div>
  );
}

export default PromisePage;