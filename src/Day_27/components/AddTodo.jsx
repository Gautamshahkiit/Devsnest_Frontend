import { useDispatch } from "react-redux"
import { useState } from "react";
import { addTodo, loadTodos } from "../actions";

export default function AddTodo (){
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input type="text" value = {value} placeholder="Add Task" onChange={(e)=>{
                setValue(e.target.value);
            }}></input>
            <button onClick={()=>{
                dispatch(addTodo({
                    title: value,
                    completed: false,
                }));
                setValue("");
            }}>Add</button>
            <button onClick={()=>{
                dispatch(loadTodos());
            }}>Load Todos</button>
        </div>
    )
}