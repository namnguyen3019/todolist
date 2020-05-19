import { combineReducers } from "redux";
import data from "./data";
import fetchData from "./firebaseReducer";

export default combineReducers({
  data: data,
  itemList: fetchData,
});
