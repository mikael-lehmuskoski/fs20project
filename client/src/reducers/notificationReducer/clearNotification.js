/**
 *    clearNotification
 *
 * Sets notification to null in the reducer.
 *
 * @function
 *
 * @author Mikael
 */
const clearNotification = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_NOTIFICATION",
    });
  };
};

export default clearNotification;
