import "./App.css";
import React from "react";
import GameDescription from "./GameDescription";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Game";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route 
          exact path="/game"
          element={
            <Game />
          }/>
          <Route
          exact path="/"
          element={
            <GameDescription />
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
