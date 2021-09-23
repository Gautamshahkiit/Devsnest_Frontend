const todoReducer = (state = [], action) =>{
    if(action.type === "addTodo"){
        let newState = [...state, action.payload];
        return newState;
    }else if(action.type === "deleteTodo"){
        let newState = state.filter((todo,index)=> index !== action.payload);
        return newState; 
    }else if(action.type === "loadTodos"){
        return action.payload;
    }
    return state;
}

export default todoReducer;