import "./Node.css";

type NodeProps = {
  row?: number;
  column?: number;
  isStart?: boolean;
  isTarget?: boolean;
  isVisited?: boolean;
  isWall?: boolean;
};

const Node = ({
  row,
  column,
  isStart,
  isTarget: isTarget,
  isVisited,
  isWall,
}: NodeProps) => {
  const extraClassName = isStart
    ? "node-start"
    : isTarget
    ? "node-finish"
    : isWall
    ? "wall"
    : isVisited
    ? "visited"
    : "";
  return <div className={`node ${extraClassName}`}> </div>;
};
export default Node;
