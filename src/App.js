import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";

function App() {
  const [turn, setTurn] = useState("X");
  function changeTurn() {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  }

  return (
    <div className="flex-Container">
      <h1>
        It's <span>{turn}</span>'s turn{" "}
      </h1>
      <Grid turn={turn} changeTurn={changeTurn} />
    </div>
  );
}

export default App;
