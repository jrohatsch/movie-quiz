import "./App.css";
import getDataByID from "./getDataByID";
import React from "react";
import { addProcessedMovie } from "./cookie_handler";

const allowed_chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const filter_string = (inputString, ignoreSpaces) => {
  let filteredInput = "";
  // remove not allowed characters
  for (let char of inputString) {
    if (allowed_chars.includes(char)) {
      filteredInput += char;
    }
  }
  return filteredInput;
};

function App() {
  const [counter1, setCounter1] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);
  const [counter3, setCounter3] = React.useState(0);
  const [counter4, setCounter4] = React.useState(0);
  const [counter5, setCounter5] = React.useState(0);

  return (
    <div className="App">
      <div style={{ border: "solid black thick" }}>
        <p>Nein {counter1}</p>
        <button onClick={() => setCounter1((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter1((prev) => prev - 1)}>-</button>
      </div>

      <div style={{ border: "solid black thick" }}>
        <p>Eher Nein {counter2}</p>
        <button onClick={() => setCounter2((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter2((prev) => prev - 1)}>-</button>
      </div>

      <div style={{ border: "solid black thick" }}>
        <p>Weder noch {counter3}</p>
        <button onClick={() => setCounter3((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter3((prev) => prev - 1)}>-</button>
      </div>

      <div style={{ border: "solid black thick" }}>
        <p>Eher Ja {counter4}</p>
        <button onClick={() => setCounter4((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter4((prev) => prev - 1)}>-</button>
      </div>

      <div style={{ border: "solid black thick" }}>
        <p>Ja {counter5}</p>
        <button onClick={() => setCounter5((prev) => prev + 1)}>+</button>
        <button onClick={() => setCounter5((prev) => prev - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
