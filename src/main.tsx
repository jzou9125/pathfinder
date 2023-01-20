import React from "react";
import ReactDOM from "react-dom/client";
import PathFinder from "./PathFinder";
import "./index.css";

ReactDOM.createRoot(document.getElementById("graph") as HTMLElement).render(
  <React.StrictMode>
    <PathFinder />
  </React.StrictMode>
);
