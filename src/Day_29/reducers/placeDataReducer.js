const placeDataReducer = (state = "", action) => {
  if (action.type === "UPDATED_PLACEDATA") {
    return action.payload;
  }
  return state;
};

export default placeDataReducer;
