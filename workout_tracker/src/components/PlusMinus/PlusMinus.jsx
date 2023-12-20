import "./PlusMinus.css";
import PropTypes from "prop-types";

export const PlusMinus = ({ handleAdd, handleSubtract, numberOfSets }) => {
  return (
    <div className="plusMinus">
      {numberOfSets === 0 ? (
        <button className="addSet" onClick={() => handleAdd()}>
          +
        </button>
      ) : numberOfSets === 5 ? (
        <button className="subtractSet" onClick={() => handleSubtract()}>
          -
        </button>
      ) : (
        <>
          <button className="addSet" onClick={() => handleAdd()}>
            +
          </button>
          <button className="subtractSet" onClick={() => handleSubtract()}>
            -
          </button>
        </>
      )}
    </div>
  );
};

PlusMinus.propTypes = {
  handleAdd: PropTypes.func,
  handleSubtract: PropTypes.func,
  numberOfSets: PropTypes.number,
};
