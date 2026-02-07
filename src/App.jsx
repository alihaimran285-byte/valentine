import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Component/MainPage';
import LovePage from './Component/LovePage';
import PromisePage from './Component/PromisePage';
import ThankYouPage from './Component/ThankYouPage'; // Added import for ThankYouPage

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/love" element={<LovePage />} />
      <Route path="/promise" element={<PromisePage />} />
      <Route path="/thankyou" element={<ThankYouPage />} /> {/* Added route for ThankYouPage */}
    </Routes>
  );
}

export default App;