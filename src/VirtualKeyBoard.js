import React from "react";

export const allowed_chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const row0 = "1234567890";
const row1 = "QWERTYUIOP";
const row2 = "ASDFGHJKL";
const row3 = "ZXCVBNM";

const VirtualKeyBoard = ({ onKeyPress, disable }) => {
  const handleRealKeyBoard = React.useCallback((event) => {
    if(disable) return;
    
    event.preventDefault();

    let key = event.key.toUpperCase();

    if(key === "BACKSPACE"){
        onKeyPress("DEL")
    } else if(allowed_chars.includes(key)){
        onKeyPress(key)
    }
  },[onKeyPress,disable]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleRealKeyBoard);

    return () => {
        document.removeEventListener("keydown", handleRealKeyBoard);
    }
  }, [handleRealKeyBoard]);

  const renderKey = (key, idx) => {
    return (
      <div key={idx} className="Key" onClick={() => onKeyPress(key)}>
        {key}
      </div>
    );
  };

  return (
    <div>
      <div className="KeyBoard">{Array.from(row0).map(renderKey)}</div>

      <div className="KeyBoard">{Array.from(row1).map(renderKey)}</div>

      <div className="KeyBoard" style={{ marginLeft: 20 }}>
        {Array.from(row2).map(renderKey)}
      </div>

      <div className="KeyBoard">
        <div className="Key" onClick={() => onKeyPress(" ")} style={{width: 50}}>
          SPACE
        </div>
        {Array.from(row3).map(renderKey)}

        <div className="Key Delete" onClick={() => onKeyPress("DEL")} style={{width: 35, borderColor: "red"}}>
          DEL
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyBoard;
