import { useSelector } from "react-redux";

const CurrentForecast = () => {
  const placeData = useSelector((state) => state.placeData);
  let d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="current-weather">
      <div className="place-info">
        <h1>{placeData.location.name}</h1>
        <p>
          {months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()}
        </p>
        <img src={placeData.current.condition.icon} alt="weather"></img>
        <div>{placeData.current.condition.text}</div>
      </div>
      <div className="stats">
        <div>{placeData.current.temp_c}°</div>
        <p>
          {placeData.forecast.forecastday[0].day.maxtemp_c}° /{" "}
          {placeData.forecast.forecastday[0].day.mintemp_c}°
        </p>
      </div>
    </div>
  );
};

export default CurrentForecast;
