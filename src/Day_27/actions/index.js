const addTodo = (data)=>{
    return{
        type: "addTodo",
        payload: data
    }
}

const deleteTodo = (id) =>{
    return{
        type: "deleteTodo",
        payload: id
    }
}

const loadTodos = () =>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(body=>{
            return dispatch({
                type: "loadTodos",
                payload: body
            })
        })
    }
}

export {addTodo, deleteTodo, loadTodos};