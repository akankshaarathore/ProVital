import React from 'react';
import './HeroSection.css';

const HeroSection = () => {

  const imagesCol1 = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg'
  ];

  const imagesCol2 = [
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg'
  ];

  return (
    <>
    <div className='hero'>
      <div className='image-columns'>
        <div className='image-column scroll-down'>
          {[...imagesCol1, ...imagesCol1].map((src, i) => (<img key={`col1-${i}`} src = {src} alt = {`col1-${i}`}/>))}
        </div>
        <div className='image-column scroll-up'>
          {[...imagesCol2, ...imagesCol2].map((src,i) => (<img key = {`col2-${i}`} src = {src} alt = {`col2-${i}`}/>))}
        </div>
      </div>
      <div className='hero-text'>
        <h1>Book an appointment with <span className='highlight-gradient'>lifestyle medicine</span> experts</h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
    </div>

    <div className='outer-container'>
        <div className='inner-container'>
            <div className="input-box large-input">
            <img src="/images/search-btn.jpg" alt="Search" className="icon" />
            <span className="input-text">Condition, procedure, speciality...</span>
            </div>

        <div className="input-box medium-input">
          <img src="/images/loc-btn.jpg" alt="Location" className="icon" />
          <span className="input-text">City, state, or zipcode</span>
        </div>

        <div className="input-box small-input">
          <img src="/images/health-btn.jpg" alt="Date" className="icon" />
          <span className="input-text">Insurance carrier</span>
        </div>

        <div className="search-button-wrapper">
          <button className="search-button">
          <img src="/images/search-btn.jpg" alt="Search Icon" className="button-icon" />
          Find now</button>
        </div>
        </div>
    </div>
    <div className='gradient-line'></div>
    </>
    
  );
};

export default HeroSection;