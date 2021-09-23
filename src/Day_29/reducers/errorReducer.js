const errorReducer = (state = "", action) => {
  if (action.type === "UPDATE_ERROR") {
    return action.payload;
  }

  return state;
};

export default errorReducer;
