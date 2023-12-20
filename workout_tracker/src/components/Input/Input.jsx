import "./Input.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const Input = ({ setNumber }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const handleCheck = () => {
    const newBackgroundColor =
      backgroundColor === "transparent" ? "#45fa3c" : "transparent";
    setBackgroundColor(() => newBackgroundColor);
  };
  return (
    <div className="inputRow" style={{ backgroundColor: `${backgroundColor}` }}>
      <span className="setNumber">{setNumber}</span>
      <input type="text" className="weight" placeholder="kg" />
      <input type="text" className="reps" placeholder="reps" />
      <button className="complete" onClick={handleCheck}>
        {"\u2713"}
      </button>
    </div>
  );
};

Input.propTypes = {
  setNumber: PropTypes.number,
};
