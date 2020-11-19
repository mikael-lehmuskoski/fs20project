import id from "./getID";

const postNotification = (message, timeout) => {
  return (dispatch) => {
    dispatch({
      type: "POST_NOTIFICATION",
      data: {
        id,
        message,
        timeout,
      },
    });
  };
};

export default postNotification;
