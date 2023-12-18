import "./input.css";
import PropTypes from "prop-types";

export const Input = ({ setNumber }) => {
  return (
    <div className="inputRow">
      <span className="setNumber">{setNumber}</span>
      <input type="text" className="weight" />
      <input type="text" className="reps" />
      <button className="complete">{"\u2713"}</button>
    </div>
  );
};

Input.propTypes = {
  setNumber: PropTypes.number,
};
