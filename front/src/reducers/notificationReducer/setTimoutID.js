const setTimeoutID = (timeoutID) => {
  return (dispatch) => {
    dispatch({
      type: "SET_TIMEOUTID",
      timeoutID: timeoutID || null,
    });
  };
};

export default setTimeoutID;
