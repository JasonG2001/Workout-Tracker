import { Tile } from "../Tile/Tile.jsx";
import "./TileRow.css";
import PropTypes from "prop-types";

export const TileRow = ({ handleClick, tileState, subtractWorkout }) => {
  return (
    <div className="tileRow">
      {tileState
        .slice(0)
        .reverse()
        .map((exercise, key) => (
          <Tile
            key={`Tile ${key + 1}`}
            handleClick={handleClick}
            exercise={exercise}
            subtractWorkout={subtractWorkout}
          />
        ))}
    </div>
  );
};

TileRow.propTypes = {
  tileState: PropTypes.array,
  handleClick: PropTypes.func,
  subtractWorkout: PropTypes.func,
};
