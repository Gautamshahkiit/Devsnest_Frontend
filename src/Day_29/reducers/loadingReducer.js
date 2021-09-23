const loadingReducer = (state = false, action) => {
  if (action.type === "UPDATE_LOADING") {
    return action.payload;
  }

  return state;
};

export default loadingReducer;
