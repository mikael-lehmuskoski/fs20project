import services from "../../services";

export const LOGIN = (details) => {
  return async (dispatch) => {
    const response = await services
      .login({
        variables: { ...details },
      })
      .then((res) => {
        if (res.errors) {
          res.errors.map((error) => {
            throw new Error(error.message);
          });
        }
        try {
          if (res.data.login.token.value) return res.data.login; // DODO: notification
        } catch (err) {
          throw new Error(
            "Didn't hear back from the server. Check your connection and try again!"
          );
        }
        return null;
      })
      .catch((error) => console.log(error)); // DODO: send error.message to notification
    if (response) {
      dispatch({
        type: "LOGIN",
        data: response,
      });
    }
  };
};

export default LOGIN;
