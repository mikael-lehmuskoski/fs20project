const init = { message: "", notifyID: null, timeout: 0, timeoutID: null };

const notificationReducer = (state = init, action) => {
  switch (action.type) {
    case "POST_NOTIFICATION":
      return {
        ...state,
        message: action.data.message,
        id: action.data.id,
        timeout: action.data.timeout,
      };
    case "CLEAR_NOTIFICATION":
      return init;
    case "SET_TIMEOUTID":
      console.log("inside reducer, state: ", { ...state }, " action.data: ", {
        ...action.data,
      });
      return {
        ...state,
        timeoutID: action.data,
      };
    default:
      return state;
  }
};

export default notificationReducer;
