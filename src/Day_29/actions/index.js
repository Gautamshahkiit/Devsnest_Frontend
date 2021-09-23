const setPlace = (place) => {
  return {
    type: "UPDATE_VALUE",
    payload: place,
  };
};

const getError = (msg) => {
  return {
    type: "UPDATE_ERROR",
    payload: msg,
  };
};

const setLoading = (load) => {
  return {
    type: "UPDATE_LOADING",
    payload: load,
  };
};

const getPlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d9714335618d4d118ab45619212807&q=${place}`
    )
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        dispatch(setLoading(false));
        if (body.location) {
          dispatch(getError(""));
          return dispatch({
            type: "UPDATED_PLACEDATA",
            payload: body,
          });
        } else {
          dispatch(getError("WRONG QUERY"));
          return dispatch({
            type: "UPDATED_PLACEDATA",
            payload: "",
          });
        }
      });
  };
};

export { setPlace, getPlaceData, getError, setLoading };

// fetch(
//     `http://api.weatherapi.com/v1/current.json?key=d9714335618d4d118ab45619212807&q=${value}`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((body) => {
//       setLoading(false);
//       if (body.location) {
//         setPlaceData(body);
//         setError("");
//       } else {
//         setError("Wrong Query");
//         setPlaceData("");
//       }
//     });
