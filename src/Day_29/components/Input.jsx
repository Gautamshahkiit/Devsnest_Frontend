import { useSelector, useDispatch } from "react-redux";
import { setPlace, getPlaceData, setLoading } from "../actions";

const Input = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();

  function fetchData() {
    dispatch(setLoading(true));
    dispatch(getPlaceData(place));
    dispatch(setPlace(""));
  }

  return (
    <div className="input-city">
      <div className="place">
        <input
          type="text"
          placeholder="City"
          value={place}
          onChange={(e) => {
            dispatch(setPlace(e.target.value));
          }}
        ></input>
        <button onClick={fetchData}>Submit</button>
      </div>
    </div>
  );
};

export default Input;
