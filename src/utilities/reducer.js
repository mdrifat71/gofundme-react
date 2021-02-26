const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TIMEOUT":
      console.log(action.payload);
      return { ...state, timeOut: action.payload };

    case "CLEAR_TIMEOUT":
      clearTimeout(state?.timeOut);
      return state;

    case "HIDE_VIDEO":
      document.querySelector("body").style.height = "auto";
      document.querySelector("body").style.overflow = "auto";

      return {
        ...state,
        video: false,
      };

    case "OPEN_VIDEO":
      document.querySelector("body").style.height = "100vh";
      document.querySelector("body").style.overflow = "hidden";
      return {
        ...state,
        video: true,
      };
  }
};

export default reducer;
