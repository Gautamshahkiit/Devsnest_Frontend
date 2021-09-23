import "./App.css";

import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [placeData, setPlaceData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d9714335618d4d118ab45619212807&q=${value}`
    )
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setLoading(false);
        if (body.location) {
          setPlaceData(body);
          setError("");
        } else {
          setError("Wrong Query");
          setPlaceData("");
        }
      });
    setValue("");
  }

  return (
    <div className="app">
      <h1>Weather App.</h1>
      <input
        type="text"
        placeholder="City"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={fetchData}>Submit</button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !placeData ? (
          <div>{placeData}</div>
        ) : (
          <div>
            <p>Place : {placeData.location.name}</p>
            <p>Temperature : {placeData.current.temp_c} °C</p>
            <p>Wind Speed : {placeData.current.wind_kph} kph</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// Api key : d9714335618d4d118ab45619212807
// Api Endpoint : http://api.weatherapi.com/v1/current.json
