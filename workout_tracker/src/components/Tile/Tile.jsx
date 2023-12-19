import "./Tile.css";
import { Input } from "../Input/Input.jsx";
import PropTypes from "prop-types";
import { useState } from "react";

export const Tile = ({ handleClick, exercise }) => {
  const [sets, setSets] = useState(0);
  const handleAddAnotherSet = () => {
    setSets(() => sets + 1);
  };
  return (
    <div className="container">
      {exercise ? (
        <div className="workoutContainer">
          <div className="workoutName">
            <input type="text" />
          </div>
          <div className="workoutData">
            {[...Array(sets).keys()].map((set) => (
              <Input key={`Set number ${set + 1}`} setNumber={set + 1} />
            ))}
            <button className="addSet" onClick={() => handleAddAnotherSet()}>
              +
            </button>
          </div>
        </div>
      ) : (
        <div className="addAnotherContainer">
          <button className="addAnother" onClick={() => handleClick()}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

Tile.propTypes = {
  exercise: PropTypes.string,
  handleClick: PropTypes.func,
};
