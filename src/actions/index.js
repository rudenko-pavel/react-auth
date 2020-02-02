import headermenu from "../apis/headermenu";
import { SIGN_IN, SIGN_OUT } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const fetchMenuitems = () => async dispatch => {
  const responce = await headermenu.get("/headermenu.json");
  dispatch({ type: "FETCH_MENUITEMS", payload: responce.data.headermenu });
};

// for auth
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
