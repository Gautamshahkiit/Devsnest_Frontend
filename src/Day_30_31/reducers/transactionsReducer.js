const transactionsReducer = (state = [], action) => {
  if (action.type === "ADD_TRANSACTION") return [action.payload, ...state];
  return state;
};
export default transactionsReducer;

// transaction : {
//   transactionID : Number,
//  amount: Number,
//  description : (Added to wallet, Refund from bidding, Placed in a bid)
//   product : (None, NFT, NFT)
// increment : boolean
// date & time: Date()
// }
