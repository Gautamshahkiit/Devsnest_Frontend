import "./Wallet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, addTransaction } from "../actions";
export default function Wallet({ setPage }) {
  const addToWallet = () => {
    const add = parseFloat(document.getElementById("add-amount").value);
    if (add > 0) {
      const now = new Date();
      const date =
        now.getDate() +
        "/" +
        parseInt(now.getMonth() + 1) +
        "/" +
        now.getFullYear();
      const time =
        ("0" + now.getHours()).slice(-2) +
        ":" +
        ("0" + now.getMinutes()).slice(-2) +
        ":" +
        ("0" + now.getSeconds()).slice(-2) +
        " " +
        "UTC" +
        +now.getTimezoneOffset() / 60;
      dispatch(increaseAmount(add));
      dispatch(
        addTransaction({
          transactionID: Math.floor((Math.random() + 1) * 1000000000),
          description: "Added to wallet",
          amount: add,
          increment: true,
          date: date + " " + time,
        })
      );
    }
  };
  // Add and product variables
  // const RefundFromBid = (amount = 100, productName = "sexy NFT") => {
  //   //Export add form somewhere
  //   const add = amount;
  //   if (add > 0) {
  //     const now = new Date();
  //     const date =
  //       now.getDate() +
  //       "/" +
  //       parseInt(now.getMonth() + 1) +
  //       "/" +
  //       now.getFullYear();
  //     const time =
  //       ("0" + now.getHours()).slice(-2) +
  //       ":" +
  //       ("0" + now.getMinutes()).slice(-2) +
  //       ":" +
  //       ("0" + now.getSeconds()).slice(-2) +
  //       " " +
  //       "UTC" +
  //       +now.getTimezoneOffset() / 60;
  //     dispatch(increaseAmount(add));
  //     dispatch(
  //       addTransaction({
  //         transactionID: Math.floor((Math.random() + 1) * 1000000000),
  //         description: "Refund from Bid",
  //         amount: add,
  //         increment: true,
  //         product: productName, //Fetch product
  //         date: date + " " + time,
  //       })
  //     );
  //   }
  // };

  //Deduct & product variable
  // const placedBid = (amount = 100, productName = "sexy NFT") => {
  //   // Fetch deduct from somewhere
  //   const deduct = amount;
  //   if (deduct > 0) {
  //     const now = new Date();
  //     const date =
  //       now.getDate() +
  //       "/" +
  //       parseInt(now.getMonth() + 1) +
  //       "/" +
  //       now.getFullYear();
  //     const time =
  //       ("0" + now.getHours()).slice(-2) +
  //       ":" +
  //       ("0" + now.getMinutes()).slice(-2) +
  //       ":" +
  //       ("0" + now.getSeconds()).slice(-2) +
  //       " " +
  //       "UTC" +
  //       +now.getTimezoneOffset() / 60;
  //     dispatch(decreaseAmount(deduct));
  //     dispatch(
  //       addTransaction({
  //         transactionID: Math.floor((Math.random() + 1) * 1000000000),
  //         description: "Placed in bid",
  //         amount: deduct,
  //         increment: false,
  //         product: productName, //Add product
  //         date: date + " " + time,
  //       })
  //     );
  //   }
  // };
  const dispatch = useDispatch();
  const walletAmount = useSelector((state) => state.wallet_amt);
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className="wallet">
      <div className="add_money">
        <h1 style={{ fontSize: "5rem" }}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/ethereum-1-283135.png"
            alt=""
            size="100"
            style={{ width: "80px", marginBottom: "20px" }}
          ></img>{" "}
          {walletAmount}
        </h1>
        <h1>Add Amount</h1>
        <hr></hr>
        <input type="decimal" placeholder="Amount" id="add-amount"></input>
        <button
          onClick={() => {
            addToWallet();
            // placedBid(0.1, "NFT");
            // RefundFromBid(0.5, "Template");
          }}
          className="button"
        >
          Add
        </button>
      </div>
      <div className="transactions">
        <h2 style={{ marginLeft: "10px" }}>Transactions</h2>
        <hr />

        <div>
          {transactions.length ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Transaction ID</th>
                  <th>Date & Time</th>
                  <th>Process</th>
                  <th>Amount</th>
                  <th>Product</th>
                  <th>Report</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((trans, idx) => {
                  const colour = trans.increment ? "green" : "red";
                  const sign = trans.increment ? "+" : "-";
                  return (
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <th>{trans.transactionID}</th>
                      <th>{trans.date}</th>
                      <th>{trans.description}</th>
                      <th style={{ color: colour }}>
                        {sign + trans.amount}{" "}
                        <span style={{ color: "black" }}></span>
                      </th>
                      <th>{trans.product ? trans.product : "-"}</th>
                      <th>
                        <button> report</button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <li style={{ color: "grey" }}>No previous transactions</li>
          )}
        </div>
      </div>
    </div>
  );
}
