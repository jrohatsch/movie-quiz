import React from "react";
import { resultType } from "./Game";

const GameEndModal = ({ results, onCloseCallback }) => {
  const [userCopied, setUserCopied] = React.useState(false);
  let correct_results = 0;
  let skipped_results = 0;
  let failed_results = 0;

  results.forEach((eachResult) => {
    if (eachResult === resultType.success) {
      correct_results++;
    } else if (eachResult === resultType.skipped) {
      skipped_results++;
    } else if (eachResult === resultType.failed) {
      failed_results++;
    }
  });

  let success_sum = resultType.success.value * correct_results;
  let skipped_sum = resultType.skipped.value * skipped_results;
  let failed_sum = resultType.failed.value * failed_results;

  // const copyToClipboard = () => {
  //   let buffer = "";

  //   results.forEach((eachResult) => {
  //     buffer += eachResult.render;
  //   });

  //   buffer += " ";

  //   buffer +=
  //     "I got " + String(success_sum + skipped_sum + failed_sum) + " points on ";

  //   buffer += "https://whichmovieisthat.com";

  //   navigator.clipboard.writeText(buffer).then(
  //     function () {
  //       console.log("Async: Copying to clipboard was successful!");
  //       setUserCopied(true);
  //       let timer = setTimeout(() => {
  //         setUserCopied(false);
  //         clearTimeout(timer);
  //       }, 2000);
  //     },
  //     function (err) {
  //       console.error("Async: Could not copy text: ", err);
  //     }
  //   );
  // };

  return (
    <div className="GameEndModalContainer">
      <h2>Results</h2>
      <div className="PointsContainer">
        You guessed {correct_results} correct:
        <div className="PointsResult">
          <b>{success_sum} Points</b>
        </div>
      </div>
      <br></br>
      <div className="PointsContainer">
        You skipped {skipped_results} movies:
        <div className="PointsResult">
          <b>{skipped_sum} Points</b>
        </div>
      </div>
      <br></br>
      <div className="PointsContainer">
        You guessed {failed_results} incorrect:
        <div className="PointsResult">
          <b>{failed_sum} Points</b>
        </div>
      </div>
      <br></br>
      <h2>Score</h2>
      <h1>{success_sum + skipped_sum + failed_sum}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="Button" onClick={onCloseCallback}>
          Play Again
        </div>
      </div>
    </div>
  );
};

export default GameEndModal;
