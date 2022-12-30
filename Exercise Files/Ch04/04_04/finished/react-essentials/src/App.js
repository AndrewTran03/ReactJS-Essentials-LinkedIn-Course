import React, { useState } from "react";
import "./App.css";

function App() {
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here.`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotions are {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
      <button onClick={() => setSecondary("crabby")}>
        Make Crabby
      </button>
    </>
  );
}

export default App;
