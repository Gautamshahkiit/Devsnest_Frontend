// import React, { useState } from "react";
// import { BidsData } from "./BidsData";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bids.css";

const Bids = () => {
  // const [rank, setRank] = useState(1);
  // const rank = []
  // BidsData.map((item, index) => {
  //   rank.push(item.bidamt)
  // })
  // rank.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(rank)

  const dated = (dt) => {
    dt += 2;
    if (dt === 32) {
      dt = 1;
    } else if (dt === 33) {
      dt = 2;
    }
    return dt;
  };

  var today = new Date();

  var date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    dated(today.getDate());

  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date;

  const products = useSelector((state) => state.products);
  const userBids = useSelector((state) => state.userBids);
  const styleArray = [
    "table-primary",
    "table-secondary",
    "table-success",
    "table-info",
    "table-warning",
  ];
  console.log(products, userBids);
  return (
    <div
      className="your-bids"
      style={{ height: "100vh", width: "60vw", margin: "0 auto" }}
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S No. </th>
            <th scope="col">Item</th>
            <th scope="col">Highest Bidder</th>
            <th scope="col">bidamt</th>
            <th scope="col">Expires-in</th>
          </tr>
        </thead>
        <tbody>
          {userBids.map((item, index) => {
            return (
              <tr
                // className={styleArray[index % styleArray.length]}
                key={index}
                // style={{
                //   border: "1px solid black",
                // }}
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={products[item.productId - 1].Image}
                    alt="item picture"
                    style={{ height: "222px", width: "154px" }}
                  ></img>
                </td>
                <td>You</td>
                <td>{item.bid}</td>
                <td>{dateTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
