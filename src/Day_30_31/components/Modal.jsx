import "./modal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBid,
  decreaseAmount,
  addTransaction,
  addBidtoUser,
  editBidofUser,
  increaseBid,
} from "../actions";

export default function Modal({
  show,
  setShow,
  productId = 10,
  name = "Raju",
  highest_bid = 0.66,
  productName = "sexyNFT",
  bidExists,
  existingBid,
}) {
  const placeBid = (amount = 100, productName = "sexy NFT") => {
    if (amount > 0) {
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
      dispatch(decreaseAmount(amount));
      dispatch(
        addTransaction({
          transactionID: Math.floor((Math.random() + 1) * 1000000000),
          description: "Placed in bid",
          amount: amount,
          increment: false,
          product: productName, //Add product
          date: date + " " + time,
        })
      );
    }
  };

  const dispatch = useDispatch();
  const wallet_amt = useSelector((state) => state.wallet_amt);
  const [bid, setBid] = useState(0);
  return (
    <>
      <div id="modal" class={show ? " " : "hide"}>
        <span id="close_button" onClick={() => setShow(false)}>
          +
        </span>
        <div
          className="container info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <div className="wallet_display">Wallet : {wallet_amt} ETH </div>
          {bidExists ? (
            <>
              <div>
                Your Previous Bid : {existingBid.bid} ETH{" "}
                <div>
                  Total : {parseFloat(wallet_amt) + parseFloat(existingBid.bid)}{" "}
                  ETH
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="bid_display">
            Current Highest Bid : {highest_bid} ETH{" "}
          </div>
          <div className="inputs">
            <label> Amount : </label>
            <input
              id="bid_amount"
              type="number"
              placeholder="Enter Amount"
              onChange={(e) => {
                setBid(e.target.value);
              }}
            ></input>
            <br />
            <div>
              {bidExists ? "" : <input id="anony" type="checkbox"></input>}
              {bidExists ? (
                ""
              ) : (
                <span style={{ fontSize: "0.9rem" }}> Bid Anonymously</span>
              )}
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              if (
                bidExists &&
                bid > highest_bid &&
                bid <= parseFloat(existingBid.bid) + parseFloat(wallet_amt)
              ) {
                placeBid(bid - parseFloat(existingBid.bid), productName);
                dispatch(increaseBid(productId, bid));
                dispatch(editBidofUser(productId, bid));
                setShow(false);
              } else if (bid > highest_bid && bid <= wallet_amt) {
                const anonymous = document.getElementById("anony").checked;
                if (anonymous) dispatch(addBid(productId, bid, "Anonymous"));
                else dispatch(addBid(productId, bid, name));
                setShow(false);
                placeBid(bid, productName);
                dispatch(addBidtoUser(productId, bid));
              }
            }}
          >
            Place Bid
          </button>
        </div>
        <div>
          <br></br>
          {bid <= highest_bid ? (
            <li style={{ color: "red" }}>
              The Bid Amount must be greater than current Highest Bid
            </li>
          ) : (
            ""
          )}
          <br></br>
          {bid > wallet_amt && !bidExists ? (
            <li style={{ color: "red" }}>Not enough money in the wallet</li>
          ) : (
            ""
          )}
          <br></br>
          {bidExists &&
          bid > parseFloat(wallet_amt) + parseFloat(existingBid.bid) ? (
            <li style={{ color: "red" }}>Not enough money in the wallet</li>
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="modal_bg" class={show ? " " : "hide"}></div>
    </>
  );
}
