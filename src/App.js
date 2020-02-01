import React from 'react';
import './App.css';
import { GameActions } from "./components/GameActions";

function App() {
  return (
    <>
      <GameActions isPlaying={true}></GameActions>
    </>
  );
}

export default App;
