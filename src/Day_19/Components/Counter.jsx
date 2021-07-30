import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return <button onClick={increaseCount}>{count}</button>;
};

export default Counter;
