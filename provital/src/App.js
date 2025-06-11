import React from 'react';
import './App.css';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <div className="App">
      <Taskbar/>
      <div style={{padding: '80px'}}>
        <span>main content</span>
      </div>
    </div>
  );
}

export default App;
