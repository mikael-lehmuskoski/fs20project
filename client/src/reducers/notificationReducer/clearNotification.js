const clearNotification = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_NOTIFICATION",
    });
  };
};

export default clearNotification;
