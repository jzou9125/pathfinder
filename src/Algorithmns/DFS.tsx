import { Dispatch, SetStateAction } from "react";

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

function DFS({ grid, setGrid, start, target }: algorithmProps) {
  if (grid[target[0]][target[1]].isVisited) {
    return null;
  }
  let newGrid = [...grid];
  recursion(newGrid, start, target);
  setGrid(newGrid);
}

function recursion(grid: NodeProps[][], start: number[], target: number[]) {
  grid[start[0]][start[1]].isVisited = true;
  console.log(start);
  if (start[0] === target[0] && start[1] === target[1]) {
    return true;
  }
  for (let neighbor of getNeighbors(grid, start[0], start[1]) ?? []) {
    if (recursion(grid, neighbor, target)) {
      return true;
    }
  }
  return false;
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

export default DFS;
