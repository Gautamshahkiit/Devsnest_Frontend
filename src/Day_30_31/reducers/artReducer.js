const artReducer = (state = "", action) => {
    switch (action.type) {
        case "UPDATE_ART":
            return action.payload;
        default:
            return state;
    };
};
export default artReducer;