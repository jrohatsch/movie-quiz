import React from "react";
import VirtualKeyBoard from "./VirtualKeyBoard";
import SuggestedTitle from "./SuggestedTitle";
import NextRoundButton from "./NextRoundButton";
import { useNavigate } from "react-router-dom";
import ResultList from "./ResultList";

const GuessByPlot = ({
  title,
  plot,
  onSkipCallback,
  onSuccessCallback,
  onFailCallback,
  onNextRoundCallback,
  results,
  disableInput,
  movieData
}) => {
  const [showTitle, setShowTitle] = React.useState(false);
  const [inputTitle, setInputTitle] = React.useState("");
  const [guessed, setGuessed] = React.useState(false);
  const navigate = useNavigate();

  const onKeyPress = (key) => {
    if (guessed || disableInput) return;

    if (key === "DEL") {
      setInputTitle((prev) => prev.substring(0, prev.length - 1));
    } else {
      setInputTitle((prev) => {
        // restrict for muliple spaces
        if (key === " " && prev[prev.length - 1] === " ") {
          return prev;
        } else {
          return prev + key;
        }
      });
    }
  };

  const onSuggestSelect = (title) => {
    if (guessed) return;

    setInputTitle(title);
  };

  const checkInput = () => {
    setShowTitle(true);
    setInputTitle("");
    setGuessed(true);
    if (title.toUpperCase() === inputTitle.toUpperCase()) {
      onSuccessCallback();
    } else {
      onFailCallback();
    }
  };

  let displayedTitle = "";
  let isPlaceholder = false;
  if (showTitle) {
    displayedTitle = title;
  } else if (inputTitle.length > 0) {
    displayedTitle = inputTitle;
  } else {
    displayedTitle = "Enter your guess";
    isPlaceholder = true;
  }

  const newRound = () => {
    if (guessed) {
      onNextRoundCallback();
    } else {
      onSkipCallback();
    }

    setGuessed(false);
    setShowTitle(false);
    setInputTitle("");
  };

  let mainButtonText="Skip";
  let mainButtonOnClick=newRound;

  if(inputTitle !== "" && guessed === false){
    mainButtonText = "Guess";
    mainButtonOnClick=checkInput;
  }
  if(guessed){
    mainButtonText="Next";
  }


  return (
    <div className="App">
      <h2 onClick={() => navigate("/")}>
        <i>Which Movie is that?</i>
      </h2>

      <div className="Wrap">
        <div className="TitleBox">
          <div
            className="Input"
            style={{ fontWeight: isPlaceholder ? "normal" : "bold" }}
          >
            {displayedTitle}
          </div>
          {isPlaceholder === false && guessed === false && (
            <div className="ClearInputButton" onClick={() => setInputTitle("")}>
              X
            </div>
          )}
        </div>
        <SuggestedTitle input={inputTitle} onSelect={onSuggestSelect} movieData={movieData} />
      </div>

      <div
        style={{
          display: "relative",
          flexGrow: 1,
          maxHeight: "50vh",
          overflow: "auto",
        }}
      >
        <div className="PlotWrapper">{plot}</div>
      </div>

      <div>
        <div className="Results">
          <ResultList results={results} />
        </div>

        <NextRoundButton
          onClick={mainButtonOnClick}
          text={mainButtonText}
          disabled={disableInput}
        />
      </div>

      <VirtualKeyBoard onKeyPress={onKeyPress} disable={disableInput} />
    </div>
  );
};

export default GuessByPlot;
