const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMEOUT":
      console.log(action.payload);
      return { ...state, timeOut: action.payload };

    case "CLEAR_TIMEOUT":
      clearTimeout(state?.timeOut);
      return state;
  }
};

export default reducer;
