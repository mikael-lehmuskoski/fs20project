import id from "./getID";

/**
 *    postNotification
 *
 * @function
 *
 * @param {string} message message
 * @param {number} timeout timeout length
 * @param {boolean} error if notification is an error
 *
 * @author Mikael
 */
const postNotification = (message, timeout, error) => {
  return (dispatch) => {
    dispatch({
      type: "POST_NOTIFICATION",
      data: {
        id,
        message,
        error,
        timeout,
      },
    });
  };
};

export default postNotification;
