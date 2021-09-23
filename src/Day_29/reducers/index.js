import { combineReducers } from "redux";
import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
