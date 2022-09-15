import React from "react";
import StartGameButton from "./StartGameButton";

const GameDescription = () => {
  return (
    <div className="GameDescriptionContainer">
      <h1>
        <i>Which Movie is that?</i>
      </h1>
      <h2>How to Play</h2>
      <p style={{ textAlign: "left", marginLeft: "2rem" }}>
        <b>1.</b> Each round you are presented with the plot of a movie.
        <br></br>
        <br></br>
        <b>2.</b> You need to guess the correct title.
        <br></br>
        <br></br>
        <b>3.</b> After five Rounds your score is evaluated, share with friends!
      </p>
      <p>Good luck!</p>

      <div className="GameDescriptionButtonContainer">
        <StartGameButton />
      </div>

      <div>
        <h3>About</h3>
        <p>
          👇 Visit me on Github 👇 <br></br>
          <a href="https://github.com/jrohatsch">github.com/jrohatsch</a>
        </p>

        <p>
          Movie data created with{" "}
          <a href="https://www.omdbapi.com/">www.omdbapi.com</a>
        </p>
      </div>
    </div>
  );
};

export default GameDescription;
