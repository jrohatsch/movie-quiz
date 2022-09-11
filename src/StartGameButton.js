import React from 'react';
import { useNavigate } from "react-router-dom";


const StartGameButton = () => {
    const navigate = useNavigate();

    return(
        <button 
        className="Button"
        onClick={()=>navigate("/game")}
        >
        Play the Game
      </button>
    );
}

export default StartGameButton;