import "./Input.css";
import PropTypes from "prop-types";

export const Input = ({ setNumber }) => {
  return (
    <div className="inputRow">
      <span className="setNumber">{setNumber}</span>
      <input type="text" className="weight" placeholder="kg" />
      <input type="text" className="reps" placeholder="reps" />
      <button className="complete">{"\u2713"}</button>
    </div>
  );
};

Input.propTypes = {
  setNumber: PropTypes.number,
};
