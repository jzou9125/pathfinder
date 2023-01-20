import { useEffect, useRef, useState } from "react";
import "./PathFinder.css";
import Node from "./Node/Node.js";

interface NodeProps {
  row: number;
  column: number;
  isStart: boolean;
  isFinish: boolean;
  isVisited: boolean;
  isWall: boolean;
}

function PathFinder() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState<NodeProps[][]>([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const square_size = 32;

  useEffect(() => {
    setGrid(initGrid(rows, columns));
  }, [rows, columns]);

  useEffect(() => {
    const resizeListener = () => {
      if (ref.current !== null) {
        setRows(Math.floor(ref.current.clientHeight / square_size));
        setColumns(Math.floor(ref.current.clientWidth / square_size));
      }
    };

    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const initGrid = (rows: number, columns: number) => {
    let newGrid = Array.from({ length: rows }, () => Array(columns).fill(null));
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        newGrid[row][column] = nodeProps(row, column);
      }
    }
    return newGrid;
  };

  const nodeProps = (row: number, column: number) => {
    return {
      row,
      column,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  return (
    <div className="graph-container" ref={ref}>
      {grid.map((row, x) =>
        row.map((node, y) => (
          <Node
            key={`${x}-${y}`}
            // isStart={node.row === start[0] && node.column === start[1]}
            // isFinish={node.row === target[0] && node.column === target[1]}
            isVisited={node.isVisited}
            isWall={node.isWall}
          />
        ))
      )}
    </div>
  );
}

export default PathFinder;
