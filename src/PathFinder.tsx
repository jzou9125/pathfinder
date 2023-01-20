import { useEffect, useRef, useState } from "react";
import "./PathFinder.css";

function PathFinder() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [graph, setGraph] = useState([[]]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const square_size = 32;

  useEffect(() => {
    setRows(Math.floor(height / square_size));
    setColumns(Math.floor(width / square_size));
  }, [height, width]);

  useEffect(() => {
    const resizeListener = () => {
      if (ref.current !== null) {
        console.log(ref);
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
      }
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="graph-container" ref={ref}>
      {" "}
      yes
    </div>
  );
}

export default PathFinder;
