import React from "react";

const NextRoundButton = ({onClick, text, disabled }) => {
    return (
      <button id="SkipButton" className="Button NextRound" onClick={onClick} disabled={disabled} block>
        {text}
      </button>
    );
};

export default NextRoundButton;
