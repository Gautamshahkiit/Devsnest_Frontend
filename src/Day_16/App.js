import React from "react";
import Chess from "./Components/Chess";
import Meme from "./Components/Meme";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Chess />
      <Meme />
    </div>
  );
};

export default App;
