import { combineReducers } from "redux";

import authReducer from "./authReducer";
import menuitemsReducer from "./menuitemsReducer";

export default combineReducers({
  menuitems: menuitemsReducer,
  auth: authReducer
});
