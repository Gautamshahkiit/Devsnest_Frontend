const initialState = {
    name: "",
    email: "",
}
const userReducer = (state = initialState, action) =>{
    if(action.type==="userName"){
        const newState = {...state};
        newState.name = action.data;
        return newState;
    }else if(action.type==="userEmail"){
        const newState = {...state};
        newState.email = action.data;
        return newState;
    }
    return state
}

export default userReducer;