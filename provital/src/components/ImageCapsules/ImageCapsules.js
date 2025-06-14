import React, { useState } from 'react';
import './ImageCapsules.css';

const capsuleData = [
  'Nutrition',
  'Physical activity',
  'Restorative sleep',
  'Stress management',
  'Social connection',
  'Substance abuse'
];

const ImageCapsules = ({ onSelect }) => {
  const [active, setActive] = useState('Nutrition');

  const handleClick = (label) => {
    setActive(label);
    onSelect(label); 
  };

  return (
    <div className="capsules-scroll-container">
      <div className="capsules-row">
        {capsuleData.map((label) => (
          <button
            key={label}
            className={`capsule ${active === label ? 'active' : ''}`}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCapsules;