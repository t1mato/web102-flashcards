import React, { useState } from 'react';
import './App.css';
import content from './content.jsx';

const App = () => {

  /* State variable for cardIndex number */
  const [cardIndex, setCardIndex] = useState(0);

  /* State variable for whether card is flipped or not */
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }
  
  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * content.length);
    setCardIndex(randomIndex);
    setIsFlipped(false);
  }

  return(
    <>
      <div className="App">
        <div className="header">
          <h1>Welcome to the 50 States Flashcards!</h1>
          <h4>Do you know your US States and Capitals? Test your knowledge with these interactive flashcards and find out!</h4>
          <h5>Total Number of Cards: {content.length}</h5>
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className={isFlipped ? 'back' : 'front'}>
              <p>{isFlipped ? content[cardIndex].capital : `What is the capital of ${content[cardIndex].st}?`}</p>
            </div>
          </div>
        </div>
        <div className="button-container">
            <button onClick={handleNextCard}>Next Card</button>
        </div>
      </div>
    </>
  )
}

export default App
