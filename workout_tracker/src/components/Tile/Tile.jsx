import "./Tile.css";
import { Input } from "../Input/Input";

export const Tile = () => {
  return (
    <div className="container">
      <div className="workoutName">tricep</div>

      <Input setNumber={1} />
    </div>
  );
};
