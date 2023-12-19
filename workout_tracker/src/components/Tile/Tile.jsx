import "./Tile.css";
import { Input } from "../Input/Input.jsx";
import PropTypes from "prop-types";

export const Tile = ({ handleClick, exercise }) => {
  return (
    <div className="container">
      {exercise ? (
        <div className="workoutContainer">
          <div className="workoutName">
            <input type="text" />
          </div>
          <div className="workoutData">
            <Input setNumber={1} />
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
