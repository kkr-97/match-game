import React, { useState } from "react";
import "./index.css";

function IntroScreen({ onNext }) {
  const [curIntroSection, setCurrentScreen] = useState(0);
  const [message, setMessage] = useState("Welcome Kiddo !");
  let btnText = "Start";

  const onClickStartAndNextBtn = () => {
    if (curIntroSection === 0) {
      btnText = "Next";
      setMessage("Hi , I am Mizo ! and I love bananas");
      setCurrentScreen(1);
    } else if (curIntroSection === 1) {
      btnText = "Next";
      setMessage("Can you help me get some ?");
      setCurrentScreen(2);
    } else {
      btnText = "Next";
    }
  };

  return (
    <div className="intro-bg-container">
      {}
      <div className="intro-content">
        <div className="message-container">
          <p>{message}</p>
        </div>
        <img
          src="https://i.postimg.cc/1zSnNM1P/monkey.png"
          alt="Monkey"
          className="monkey-image"
        />
      </div>
      <button onClick={onClickStartAndNextBtn} className="custom-button">
        {btnText}
      </button>
    </div>
  );
}

export default IntroScreen;
