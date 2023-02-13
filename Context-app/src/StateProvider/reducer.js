export const initialState = {
  logIndata: [{ userName: "", isLogin: false }],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOG_IN":
      return {
        logIndata: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
