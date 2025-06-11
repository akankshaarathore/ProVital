import React from 'react';
import './App.css';
import Taskbar from './components/Taskbar/Taskbar';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Taskbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
