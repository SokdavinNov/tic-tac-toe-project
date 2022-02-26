import "./App.css";
import React, { useRef, useState } from "react";
import Grid from "./components/Grid";

function App() {
  const [turn, setTurn] = useState("X");
  const overlayRef = useRef();
  function changeTurn() {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  }

  function reset() {
    window.location.reload();
  }

  return (
    <div className="flex-Container">
      <h1>
        It's <span>{turn}</span>'s turn{" "}
      </h1>
      <Grid turn={turn} changeTurn={changeTurn} overlayRef={overlayRef} />

      <div ref={overlayRef} className="overlay hide">
        <div>
          <h1>
            <span>{turn}</span> Won!!!
          </h1>
          <button onClick={reset}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default App;
