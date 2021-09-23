import "./App.css";
import Input from "./components/Input";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <Input />
      <Weather />
    </div>
  );
}

export default App;

// Api key : d9714335618d4d118ab45619212807
// Api Endpoint : http://api.weatherapi.com/v1/current.json
