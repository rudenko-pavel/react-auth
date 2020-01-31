import { combineReducers } from "redux";

import menuitemsReducer from "./menuitemsReducer";

export default combineReducers({
  menuitems: menuitemsReducer
});
