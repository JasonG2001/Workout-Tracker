import "./Tile.css";
import { Input } from "../Input/Input.jsx";

export const Tile = () => {
  return (
    <div className="container">
      <div className="workoutName">tricep</div>
      <div className="workoutData">
        <Input setNumber={1} />
      </div>
    </div>
  );
};
