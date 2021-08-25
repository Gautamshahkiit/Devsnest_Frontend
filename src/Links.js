import {Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <h1>Devsnest React</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link to="./Day_15">Day 15</Link>
        <Link to="./Day_16">Day 16</Link>
        <Link to="./Day_17">Day 17</Link>
        <Link to="./Day_18">Day 18</Link>
        <Link to="./Day_19">Day 19</Link>
        <Link to="./Day_20">Day 20</Link>
        <Link to="./Day_21">Day 21</Link>
      </div>
    </div>
  );
};

export default Links;
