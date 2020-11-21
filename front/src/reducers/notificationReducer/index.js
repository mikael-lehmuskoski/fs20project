const init = { message: "", id: null, timeout: 0, timeoutID: null };

const notificationReducer = (state = init, action) => {
  switch (action.type) {
    case "POST_NOTIFICATION":
      return {
        ...state,
        message: action.data.message,
        id: action.data.id,
        error: action.data.error,
        timeout: action.data.timeout,
      };
    case "CLEAR_NOTIFICATION":
      return init;
    case "SET_TIMEOUTID":
      return {
        ...state,
        timeoutID: action.data,
      };
    default:
      return state;
  }
};

export default notificationReducer;
