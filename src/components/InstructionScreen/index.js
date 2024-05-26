import React from "react";

function InstructionScreen({ onNext }) {
  return (
    <div>
      <h1>Instructions</h1>
      <p>Match the cards to win bananas!</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default InstructionScreen;
