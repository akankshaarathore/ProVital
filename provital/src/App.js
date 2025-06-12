import React, {useState} from 'react';
import './App.css';
import Taskbar from './components/Taskbar/Taskbar';
import HeroSection from './components/HeroSection/HeroSection';
import BottomSection from './components/BottomSection/BottomSection';
import { allCards } from './data/cardsData';
import ImageCapsules from './components/ImageCapsules/ImageCapsules';

function App() {

  const [cards, setCards] = useState(allCards);

  const reorderCards = (selectedTitle) => {
    const reordered = [
      allCards.find(card => card.title === selectedTitle),
      ...allCards.filter(card => card.title !== selectedTitle)
    ];
    setCards(reordered);
  };

  return (
    <div className="App">
      <Taskbar/>
      <HeroSection/>
      <BottomSection/>
      <div className="app-container">
      <ImageCapsules onSelect={reorderCards} />

      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
