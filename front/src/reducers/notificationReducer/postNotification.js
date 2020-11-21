import id from "./getID";

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
