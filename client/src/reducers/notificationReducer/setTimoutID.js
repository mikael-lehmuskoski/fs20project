/**
 *    setTimeoutID
 *
 * @function
 *
 * @param {number} timeoutID id of the timeout
 *
 * @author Mikael
 */
const setTimeoutID = (timeoutID) => {
  return (dispatch) => {
    dispatch({
      type: "SET_TIMEOUTID",
      data: timeoutID || null,
    });
  };
};

export default setTimeoutID;
