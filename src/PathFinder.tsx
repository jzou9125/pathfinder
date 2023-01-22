import { useEffect, useRef, useState } from "react";
import "./PathFinder.css";
import Node from "./Node/Node.js";
import DFS from "./Algorithmns/DFS.js";
import anime from "animejs/lib/anime.es.js";

interface NodeProps {
  row: number;
  column: number;
  isStart: boolean;
  isTarget: boolean;
  isVisited: boolean;
  isWall: boolean;
  previousNode: null;
}

function PathFinder() {
  const ref = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState<NodeProps[][]>([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [start, setStart] = useState([0, 0]);
  const [target, setTarget] = useState([0, 0]);
  const [pathAnimation, setPathAnimation] = useState<anime.AnimeParams>({
    animation: null,
  });
  const square_size = 32;

  useEffect(() => {
    if (grid.length !== 0) {
      let animation = anime({
        targets: ".visited",
        backgroundColor: "rgb(0, 0, 255)",
        scale: [
          { value: 0.1, easing: "linear", duration: 150 },
          { value: 1, easing: "linear", duration: 200 },
        ],
        delay: anime.stagger(50, {
          grid: [grid[0].length, grid.length],
          from: "first",
        }),
      });
      animation.play();
      setPathAnimation(animation);
    }
  }, [grid]);

  useEffect(() => {
    setGrid([...initGrid(rows, columns)]);
  }, [start, target]);

  useEffect(() => {
    anime.set(".visited", { backgroundColor: "transparent" });
    setStart([Math.floor(rows / 3), Math.floor(columns / 3)]);
    setTarget([Math.floor(rows / 3), Math.floor((columns / 3) * 2)]);
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
    return Array.from({ length: rows }, (_, row) =>
      Array.from({ length: columns }, (_, column) => nodeProps(row, column))
    );
  };

  const nodeProps = (row: number, column: number) => {
    return {
      row: row,
      column: column,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
      isStart: row === start[0] && column === start[1],
      isTarget: row === target[0] && column === target[1],
    };
  };

  return (
    <>
      <div id="container">
        <nav>
          <button onClick={() => DFS({ grid, setGrid, start, target })}>
            {" "}
            DFS
          </button>
        </nav>
        <div className="graph-container" ref={ref}>
          {grid.map((row, x) =>
            row.map((node, y) => (
              <Node
                key={`${x}-${y}`}
                isStart={node.isStart}
                isTarget={node.isTarget}
                isVisited={node.isVisited}
                isWall={node.isWall}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default PathFinder;
