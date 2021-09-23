const getProducts = () => {
  return (dispatch) => {
    fetch("/assets/database.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: data,
        });
      });
  };
};

//Used when adding money to wallet or returning bid amount
const increaseAmount = (increment) => {
  return {
    type: "INCREASE_AMOUNT",
    payload: increment,
  };
};

//Used to deduct money when NFT is bought
const decreaseAmount = (decrement) => {
  return {
    type: "DECREASE_AMOUNT",
    payload: decrement,
  };
};

//As the name says
const addTransaction = (transaction) => {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction,
  };
};

const addBid = (productId, amount, name) => {
  return {
    type: "ADD_BID",
    payload: {
      productId: productId,
      entry: {
        name: name,
        bid: amount,
        user: true,
      },
    },
  };
};

const increaseBid = (productId, amount) => {
  return {
    type: "INCREASE_BID",
    productId: productId,
    payload: {
      bid: amount,
    },
  };
};

const editBidofUser = (productId, amount) => {
  return {
    type: "EDIT_BID_OF_USER",
    payload: {
      productId: productId,
      bid: amount,
      top: true,
    },
  };
};

const addBidtoUser = (productId, amount) => {
  return {
    type: "ADD_BID_TO_USER",
    payload: {
      productId: productId,
      bid: amount,
      top: true,
    },
  };
};

const login = () => {
  return {
    type: "TOGGLE_LOGIN",
  };
};

const userInfo = (data) => {
  return {
    type: "USER_INFO",
    payload: data,
  };
};
export {
  getProducts,
  increaseAmount,
  decreaseAmount,
  addTransaction,
  addBid,
  addBidtoUser,
  increaseBid,
  editBidofUser,
  login,
  userInfo,
};
