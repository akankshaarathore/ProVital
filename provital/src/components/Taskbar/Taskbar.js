import React from 'react';
import './Taskbar.css';

const Taskbar = () => {
  return (
    <div className="taskbar">
    <div className='logo-container'>
      <img src="/logo.jpg" alt='logo' className='logo-image'></img>
      <span className='logo-text'>ProVital</span>
    </div>
    <div className='nav-links'>
      <a href='#'>List your practice</a>
      <a href='#'>For Employers</a>
      <a href='#'>Courses</a>
      <a href='#'>Books</a>
      <a href='#'>Speakers</a>
      <a href='#'>Doctors</a>
      <a href='#'>Login/Signup ▾ </a>    
    </div>
  </div>
  );  
};

export default Taskbar;