import './App.css';


import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
