const userBidsReducer = (state = [], action) => {
  if (action.type === "ADD_BID_TO_USER") {
    console.log(state);
    return [...state, action.payload];
  } else if (action.type === "EDIT_BID_OF_USER") {
    console.log(state);
    const list = [...state];
    for (let i = 0; i < list.length; i++) {
      if (list[i].productId === action.payload.productId) {
        list[i].bid = action.payload.bid;
        list[i].top = true;
        return list;
      }
    }
    return list;
  }
  return state;
};
export default userBidsReducer;
