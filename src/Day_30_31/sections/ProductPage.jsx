import "./productpage.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Modal from "../components/Modal";
export default function ProductPage({ setPage }) {
  // Fetch image,productName,productOwner, productId, description, username, endTime
  const { id } = useParams();
  const product = useSelector((state) => state.products)[id - 1];
  const image = product.Image;
  const productName = product.Name;
  const productOwner = product.Owner;
  const productId = product.ID;
  const description = product.Description;
  const endTime =
    new Date(2021, 7, 25).getTime() / 1000 - new Date().getTime() / 1000;
  const username = "Hero"; //Add here
  const userBids = useSelector((state) => state.userBids);
  let bidExists = false;
  let existingBid = null;
  const [counter, setCounter] = useState(endTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  for (let i = 0; i < userBids.length; i++) {
    if (userBids[i].productId === productId) {
      bidExists = true;
      existingBid = userBids[i];
      break;
    }
  }

  const bidsList = useSelector((state) => state.bidsList)[productId - 1];
  let highest = -1;
  for (let i = 0; i < bidsList.length; i++) {
    highest = Math.max(highest, bidsList[i].bid);
  }

  const [show, setShow] = useState(false);

  return (
    <div className="productpage">
      <div className="top">
        <div className="image">
          <img src={image} alt="" height="100%"></img>
        </div>
        <div className="productinfo">
          <h1 style={{ display: "inline-block" }}>
            {productName} #{productId}
          </h1>
          <span> by {productOwner}</span>
          <hr style={{}} />
          <div className="buyingdiv">
            <div className="left">
              <div style={{ fontSize: "1.5rem" }}>Current Highest Bid : </div>
              <div style={{ transform: "translateX(-10%)" }}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/ethereum-1-283135.png"
                  alt=""
                  size="100"
                  style={{ width: "60px", transform: "translateY(-20%)" }}
                ></img>
                <span
                  style={{
                    color: "black",
                    fontSize: "3rem",
                    fontWeight: "500",
                  }}
                >
                  {highest}
                </span>
              </div>
              <div>
                <button className="button" onClick={() => setShow(true)}>
                  {bidExists ? "Increase Bid" : "Place a Bid"}
                </button>
              </div>
            </div>
            <div className="right">
              <div style={{ fontSize: "1.5rem" }}>Ends in:</div>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                {Math.floor(counter / (60 * 60))}:
                {Math.floor((counter % (60 * 60)) / 60)}:
                {Math.ceil((counter % (60 * 60)) % 60)}
              </h1>
            </div>
          </div>
          <div className="description">
            <div
              style={{
                padding: "10px 0px 0px 20px",
                fontWeight: "700",
                fontSize: "1.2rem",
              }}
            >
              <img
                src="https://static.thenounproject.com/png/138376-200.png"
                alt=""
                width="25px "
                style={{ transform: "translateY(-8%)", marginRight: "10px" }}
              ></img>
              Description
            </div>
            <hr />
            <div className="desc" style={{ padding: "0px 0px 20px 20px" }}>
              {description}
            </div>
          </div>
        </div>
      </div>
      <div className="listings">
        <div
          style={{
            padding: "15px 0px 0px 20px",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          <img
            src="https://icons-for-free.com/iconfiles/png/512/format+list+icon-1320183326433350365.png"
            alt=""
            width="25px "
            style={{ transform: "translateY(-8%)", marginRight: "10px" }}
          ></img>
          <span style={{ fontSize: "1.3rem" }}>Offers</span>
        </div>
        <hr></hr>
        <table
          className="table table-striped"
          stlye={{ borderCollapse: "initial" }}
        >
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Amount</th>
              <th>In INR</th>
              <th>Bidder</th>
            </tr>
          </thead>
          <tbody>
            {bidsList.map((item, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <th>
                    {" "}
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/ethereum-1-283135.png"
                      alt=""
                      size="100"
                      style={{ width: "20px", transform: "translateY(-10%)" }}
                    ></img>{" "}
                    {item.bid}
                  </th>
                  <th><span style = {{fontFamily:"Arial, Helvetica, sans-serif"}}>₹</span>{(item.bid * 243974.0).toFixed(2)}</th>
                  <th>{item.name}</th> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        show={show}
        setShow={setShow}
        highest_bid={highest}
        name={username}
        productId={productId}
        productName={productName}
        bidExists={bidExists}
        existingBid={existingBid}
      />
      {/* <button
        onClick={() => setPage("wallet")}
        style={{ position: "absolute", marginLeft: "0px", padding: "10px" }}
      >
        Wallet
      </button> */}
    </div>
  );
}
