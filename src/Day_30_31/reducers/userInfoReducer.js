const userInfoReducer = (state = {}, action) => {
  if (action.type === "USER_INFO") {
    return action.payload;
  }
  return state;
};

export default userInfoReducer;
