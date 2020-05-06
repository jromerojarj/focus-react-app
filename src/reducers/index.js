// Reducers
import { combineReducers } from "redux";
import calls from "./callsReducer";
import vmboxes from "./vmboxesReducer";

export default combineReducers({
  vmboxes,
  calls,
});
