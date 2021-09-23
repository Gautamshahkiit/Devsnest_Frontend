const hellReducer = (state = "", action) => {
  if (action.type === "CALL_HELL") {
    console.log("This is hell reducer");
  }
  return state;
};

export default hellReducer;
