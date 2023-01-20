import { useState } from "react";
import "./PathFinder.css";

function PathFinder() {
  const [count, setCount] = useState(0);
  const [graph, setGraph] = useState([[]]);

  console.log(window.innerHeight);
  console.log(document.body.clientHeight);
  return <div className="App">yes</div>;
}

export default PathFinder;
