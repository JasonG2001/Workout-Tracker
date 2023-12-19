import { Tile } from "../Tile/Tile.jsx";
import "./TileRow.css";

export const TileRow = () => {
  const slots = 4;

  return (
    <div className="tileRow">
      {[...Array(slots).keys()].map((key) => (
        <Tile key={`Tile ${key}`} />
      ))}
    </div>
  );
};
