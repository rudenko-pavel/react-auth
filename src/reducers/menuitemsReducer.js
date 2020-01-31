export default (state = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "FETCH_MENUITEMS":
      return action.payload;

    default:
      return state;
  }
};
