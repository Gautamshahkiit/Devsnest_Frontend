const amountReducer = (state = 0.0, action) => {
  switch (action.type) {
    case "INCREASE_AMOUNT":
      return state + action.payload;
    case "DECREASE_AMOUNT":
      if (state < action.payload)
        console.log("Decreasing more amount than present in the wallet");
      return state - action.payload;
    default:
      return state;
  }
};
export default amountReducer;
