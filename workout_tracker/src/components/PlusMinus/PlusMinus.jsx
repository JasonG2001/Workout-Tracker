import "./PlusMinus.css";
import PropTypes from "prop-types";

export const PlusMinus = ({ handleAdd, handleSubtract }) => {
  return (
    <div className="plusMinus">
      <button className="addSet" onClick={() => handleAdd()}>
        +
      </button>
      <button className="subtractSet" onClick={() => handleSubtract()}>
        -
      </button>
    </div>
  );
};

PlusMinus.propTypes = {
  handleAdd: PropTypes.func,
  handleSubtract: PropTypes.func,
};
