import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import InstructionScreen from "./components/InstructionScreen";
import ActivityScreen from "./components/ActivityScreen";
import FinalScreen from "./components/FinalScreen";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("intro");
  const [bananas, setBananas] = useState(0);

  const handleNextScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === "intro" && (
        <IntroScreen onNext={() => handleNextScreen("instructions")} />
      )}
      {currentScreen === "instructions" && (
        <InstructionScreen onNext={() => handleNextScreen("game")} />
      )}
      {currentScreen === "game" && (
        <ActivityScreen
          onFinish={(bananas) => {
            setBananas(bananas);
            handleNextScreen("final");
          }}
        />
      )}
      {currentScreen === "final" && <FinalScreen bananas={bananas} />}
    </div>
  );
}

export default App;
