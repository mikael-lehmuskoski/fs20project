import services from "../../services";

export const SIGNUP = (details) => {
  return async (dispatch) => {
    const response = await services
      .signup({
        variables: { ...details },
      })
      .then((res) => {
        if (res.errors) {
          res.errors.map((error) => {
            throw new Error(error.message);
          });
        }
        try {
          if (res.data.signup.token.value) return res.data.signup; // DODO: notification
        } catch (err) {
          throw new Error(
            "Didn't hear back from the server. Check your connection and try logging in with the username."
          );
        }
        return null;
      })
      .catch((error) => console.log(error.message)); // DODO: send error.message to notification
    if (response) {
      dispatch({
        type: "SIGNUP",
        data: response,
      });
      return response;
    }
    return null;
  };
};

export default SIGNUP;
