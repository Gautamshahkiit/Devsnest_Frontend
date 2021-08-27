import { Array } from "./components/Array";
import { useState } from "react";

const App = () => {
  const todos = useArray(["buy PS", "get calculator"]);
  const [item, setItems] = useState(null);

  return (
    <div className="app">
      <input
        value={item}
        onChange={(e) => {
          setItems(e.target.value);
          console.log(item);
        }}
      ></input>
      <button
        onClick={(e) => {
          todos.add(item);
          setItems("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.values.map((todo, index) => {
          return (
            <li key={index}>
              {tood} <button onClick={() => todos.delete(index)}>delete</button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          todos.clear();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default App;
