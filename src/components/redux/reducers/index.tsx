import { combineReducers } from "redux";
import { reducerCards } from "./cards";

const reducer = combineReducers({
  cards: reducerCards!,
});
export default reducer;
