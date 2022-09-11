import React from "react";
import movie_data from "./movie_data.json";
import { allowed_chars } from "./VirtualKeyBoard";

const movie_data_array = Object.values(movie_data);

const SuggestedTitle = ({ input, onSelect }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (input.length === 0) {
      setSuggestions([]);
      setShow(false);
      return;
    }
    let new_suggestions = [];

    for (let i = 0; i < movie_data_array.length; i++) {
      let entry = movie_data_array[i];
      let title = ""
      // remove not supported characters
      for(let char of entry.Title.toUpperCase()){
        if(allowed_chars.includes(char)){
          title += char;
        }
      }

      if (title != null && title.includes(input.toUpperCase())) {
        new_suggestions.push(entry.Title);
      }
    }

    setSuggestions(new_suggestions);
    setShow(true);
  }, [input]);

  let filtered = suggestions.slice(0, 3);

  const onClick = (title) => {
    onSelect(title);
    setShow(false);
  };

  const isExactMatch = suggestions.length === 1 && suggestions[0] === input;

  if (isExactMatch && show === true) {
    setShow(false);
  }

  if (show && suggestions.length > 0) {
    return (
      <div className="Suggested">
        {filtered.map((title, idx) => (
          <div key={idx}>
            <div className="SuggestedTitle" onClick={() => onClick(title)}>
              {title}
            </div>
            {idx < filtered.length - 1 && (
              <div key={"sep-" + idx} className="Separator" />
            )}
          </div>
        ))}
        <div className="CloseButton" onClick={() => setShow(false)}>
          X
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SuggestedTitle;
