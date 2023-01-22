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
};

function Dijkstra({ grid }: algorithmProps) {
  console.log(grid);
}

export default Dijkstra;
