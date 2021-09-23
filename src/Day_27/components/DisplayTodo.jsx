import { useSelector,useDispatch } from "react-redux"
import { deleteTodo } from "../actions"

export default function DisplayTodo (){
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
    // console.log(todos);
    return(
        <div className="content">
        {
            todos.map((todo,index)=>{
                return <div className="todo" key={index}>
                    <p>{todo.title}</p>
                    <button onClick={()=>{
                        dispatch(deleteTodo(index));
                    }}>Delete</button>

                </div>
            })
        }
        </div>
    )
}