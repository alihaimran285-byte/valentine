import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Component/MainPage';
import LovePage from './Component/LovePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/love" element={<LovePage />} />
    </Routes>
  );
}

export default App;