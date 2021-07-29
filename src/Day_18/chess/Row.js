import Box from "./Box";
import "./Styles/Row.css";

const Row = (props) => {
  const newRow = props.row.map((square, i) => {
    return square === 0 ? (
      <Box colorClass="white" key={i} />
    ) : (
      <Box colorClass="black" key={i} />
    );
  });

  return <div className="row">{newRow}</div>;
};

export default Row;
