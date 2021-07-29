import Row from "./Row";
import "./Styles/Chess.css";

const arr = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
];

const Chess = () => {
  const newArr = arr.map((row, i) => {
    return <Row row={row} key={i} />;
  });
  // console.log(newArr);
  return <div className="chess">{newArr}</div>;
};

export default Chess;
