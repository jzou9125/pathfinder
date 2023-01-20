import "./Node.css";

type NodeProps = {
  row?: number;
  column?: number;
  isStart?: boolean;
  isFinish?: boolean;
  isVisited?: boolean;
  isWall?: boolean;
};

const Node = ({
  row,
  column,
  isStart,
  isFinish,
  isVisited,
  isWall,
}: NodeProps) => {
  const extraClassName = isStart
    ? "node-start"
    : isFinish
    ? "node-finish"
    : isWall
    ? "wall"
    : isVisited
    ? "visited"
    : "";
  return <div className={`node ${extraClassName}`}> </div>;
};
export default Node;
