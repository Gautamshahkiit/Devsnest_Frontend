const placeReducer = (state = "Mumbai", action) => {
  if (action.type === "UPDATE_VALUE") {
    return action.payload;
  }
  return state;
};

export default placeReducer;
