import React from "react";
//import "./Card.css";

function Card({ content, flipped, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {flipped ? (
        <div className="card-content">{content}</div>
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
}

export default Card;
