import PropTypes from "prop-types";

export const Input = ({ setNumber }) => {
  return (
    <div className="inputRow">
      <span className="setNumber">{setNumber}</span>
      <input type="2kg" className="weight" />
      <input type="5" className="reps" />
    </div>
  );
};

Input.propTypes = {
  setNumber: PropTypes.number,
};
