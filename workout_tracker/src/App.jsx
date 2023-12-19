import "./App.css";
import { TileRow } from "./components/TileRow/TileRow.jsx";
import { useState } from "react";

const App = () => {
  const [tileData, setTileData] = useState([""]);

  const handleClick = () => {
    setTileData(() => ["triceps", ""]);
  };

  return <TileRow handleClick={handleClick} tileState={tileData} />;
};

export default App;
