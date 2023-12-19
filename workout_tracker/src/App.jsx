import "./App.css";
import { TileRow } from "./components/TileRow/TileRow.jsx";
import { useState, useRef } from "react";

const App = () => {
  const [tileData, setTileData] = useState([[""]]);
  const rowCount = useRef(0);

  const handleClick = () => {
    let rowNumber = rowCount.current;
    const copy = [...tileData];
    if (copy[rowNumber].length === 4) {
      copy[rowNumber][0] = " ";
      rowCount.current++;
      copy.push([""]);
    } else {
      copy[rowNumber].push(" ");
    }
    setTileData(() => copy);
  };

  return tileData.map((rowData, row) => (
    <TileRow
      key={`Row ${row + 1}`}
      handleClick={handleClick}
      tileState={rowData}
    />
  ));
};

export default App;
