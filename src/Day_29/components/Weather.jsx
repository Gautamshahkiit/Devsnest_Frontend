import { useSelector } from "react-redux";

import Card from "./Card";

const Weather = () => {
  const placeData = useSelector((state) => state.placeData);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  return (
    <div>
      {loading ? (
        <p className="weather-card">Loading ...</p>
      ) : error ? (
        <p className="weather-card">{error}</p>
      ) : placeData === "" ? (
        <div>{placeData}</div>
      ) : (
        <Card />
      )}
    </div>
  );
};

export default Weather;
