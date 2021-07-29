import Calorie from "./calorieApp/CardContainer";
import Chess from "./chess/Chess";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <h1 className="header">Calorie Meter</h1>
        <div className="comp">
          <Chess />
          <Calorie />
        </div>
      </div>
    </>
  );
};

export default App;
