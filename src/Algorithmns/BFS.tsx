import { Dispatch, SetStateAction } from "react";
import Queue from "../Queue/Queue";

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

interface NodeProps {
  row: number;
  column: number;
  isStart: boolean;
  isTarget: boolean;
  isVisited: boolean;
  isWall: boolean;
  previousNode: null;
}

type algorithmProps = {
  grid: NodeProps[][];
  setGrid: Dispatch<SetStateAction<NodeProps[][]>>;
  start: number[];
  target: number[];
};

function BFS({ grid, setGrid, start, target }: algorithmProps) {
  if (grid[target[0]][target[1]].isVisited) {
    return null;
  }
  let newGrid = [...grid];
  let queue = new Queue();
  queue.enqueue(start);

  while (queue.getSize() > 0) {
    let node = queue.dequeue();
    if (node === undefined || newGrid[node[0]][node[1]].isVisited) {
      continue;
    }
    newGrid[node[0]][node[1]].isVisited = true;
    if (node[0] === target[0] && node[1] === target[1]) {
      break;
    }
    for (let neighbor of getNeighbors(newGrid, node[0], node[1]) ?? []) {
      queue.enqueue(neighbor);
    }
  }
  setGrid(newGrid);
}

function getNeighbors(grid: NodeProps[][], row: number, column: number) {
  let neighbors = [];
  for (let direction of directions) {
    let newRow = row + direction[0];
    let newColumn = column + direction[1];
    if (
      0 <= newRow &&
      newRow < grid.length &&
      0 <= newColumn &&
      newColumn < grid[0].length &&
      !grid[newRow][newColumn].isVisited &&
      !grid[newRow][newColumn].isWall
    ) {
      {
        neighbors.push([newRow, newColumn]);
      }
    }
  }
  return neighbors;
}

export default BFS;
