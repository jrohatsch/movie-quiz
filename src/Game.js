import React from "react";
import GuessByPlot from "./GuessByPlot";
import GameEndModal from "./GameEndModal";
import resultType from "./resultTypes";

const MAX_ROUNDS = 5;

const movie_data = require("./movie_data.json");


const Game = () => {
  const [movieData, setMovieData] = React.useState({ title: "", plot: "" });
  const [results, setResults] = React.useState([]);
  const [showGameEndModal, setShowGameEndModal] = React.useState(false);

  const getMovieData = (id) => {
    let title = movie_data[id]["Title"];
    let plot = movie_data[id]["Plot"];

    setMovieData({ title: title, plot: plot });
  };

  const newRound = React.useCallback(() => {
    if(results.length === MAX_ROUNDS)
    {
      setShowGameEndModal(true);
      return;
    }

    let last_index = Object.keys(movie_data).length;

    getMovieData(
      Object.keys(movie_data).at(Math.floor(Math.random() * last_index))
    );
  }, [results.length]);



  const reset = React.useCallback(() => {
    setResults([]);
    newRound();
    setShowGameEndModal(false);
  }, [newRound]);

  const onResultCallback = React.useCallback((result)=> {
    let help = results;
    help.push(result);
    setResults(help);
  },[results]);

  const onSuccessCallback = React.useCallback(()=>{
    onResultCallback(resultType.success);
  },[onResultCallback]);

  const onFailCallback = React.useCallback(()=>{
    onResultCallback(resultType.failed);
  },[onResultCallback]);

  const onSkipCallback = React.useCallback(() => {
    onResultCallback(resultType.skipped);
    newRound();
  }, [onResultCallback, newRound]);

  const onNextRoundCallback = React.useCallback(() => {
    newRound();
  }, [newRound]);

  const onCloseGameEndModalCallback = React.useCallback(()=>{
    reset();
  },[reset]);

  React.useEffect(() => {
    newRound();
  }, [newRound]);

  return (
    <>
    <GuessByPlot
      title={movieData.title}
      plot={movieData.plot}
      onSuccessCallback={onSuccessCallback}
      onSkipCallback={onSkipCallback}
      onFailCallback={onFailCallback}
      onNextRoundCallback={onNextRoundCallback}
      results={results}
      disableInput={showGameEndModal === true}
    />
      {showGameEndModal && 
        <GameEndModal results={results} onCloseCallback={onCloseGameEndModalCallback}/>
      }
    </>
  );
};

export default Game;