import React from "react";

const ResultList = ({ results }) => {
  let resultSquares = [];

  for (let i = 0; i < results.length; ++i) {
    console.log("here");
    resultSquares.push(
      <div className={"ResultSquare " + results[i].className} key={i}/>
    );
  }

  for (let i = results.length; i < 5; ++i) {
    resultSquares.push(<div className="ResultSquare" key={i}/>);
  }

  return <div className="ResultSquaresContainer">{resultSquares}</div>;
};

export default ResultList;
