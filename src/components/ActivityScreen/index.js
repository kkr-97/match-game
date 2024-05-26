import React, { useState, useEffect } from "react";
import Card from "../Card";
//import "./ActivityScreen.css";

function ActivityScreen({ onFinish }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [bananas, setBananas] = useState(0);

  useEffect(() => {
    fetch("/cards.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].content === cards[second].content) {
        setMatches(matches + 1);
        setBananas(bananas + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards, matches, bananas]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const isFlipped = (index) => flippedCards.includes(index);

  return (
    <div className="activity-screen">
      <div className="grid">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            content={card.content}
            flipped={isFlipped(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {matches === cards.length / 2 && (
        <button onClick={() => onFinish(bananas)}>Finish</button>
      )}
    </div>
  );
}

export default ActivityScreen;
