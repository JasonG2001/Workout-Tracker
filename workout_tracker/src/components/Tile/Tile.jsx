import "./Tile.css";
import { Input } from "../Input/Input.jsx";
import { PlusMinus } from "../PlusMinus/PlusMinus.jsx";
import PropTypes from "prop-types";
import { useState } from "react";

export const Tile = ({ handleClick, exercise }) => {
  const [sets, setSets] = useState(0);
  const handleAddAnotherSet = () => {
    setSets(() => sets + 1);
  };
  const handleSubtractAnotherSet = () => {
    setSets(() => sets - 1);
  };

  return (
    <div className="container">
      {exercise ? (
        <div className="workoutContainer">
          <div className="workoutName">
            <input type="text" />
          </div>
          <div className="workoutData">
            {sets ? (
              <div className="titles">
                <div className="hashTag">#</div>
                <div className="kg">weight</div>
                <div className="repetitions">reps</div>
                <div className="done">{"\u2713"}</div>
              </div>
            ) : (
              <div className="placeHolder"></div>
            )}
            {[...Array(sets).keys()].map((set) => (
              <Input key={`Set number ${set + 1}`} setNumber={set + 1} />
            ))}
            <PlusMinus
              handleAdd={handleAddAnotherSet}
              handleSubtract={handleSubtractAnotherSet}
              numberOfSets={sets}
            />
          </div>
        </div>
      ) : (
        <button className="addAnother" onClick={() => handleClick()}>
          +
        </button>
      )}
    </div>
  );
};

Tile.propTypes = {
  exercise: PropTypes.string,
  handleClick: PropTypes.func,
};
