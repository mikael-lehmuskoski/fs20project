const setTimeoutID = (timeoutID) => {
  return (dispatch) => {
    dispatch({
      type: "SET_TIMEOUTID",
      data: timeoutID || null,
    });
  };
};

export default setTimeoutID;
