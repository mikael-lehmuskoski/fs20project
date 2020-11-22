import services from "../../../services";

const SIGNUP = (details) => {
  return async (dispatch) => {
    try {
      const response = await services
        .signup({
          variables: { ...details },
        })
        .then((res) => {
          if (res.message) throw new Error(res.message);
          else if (res.errors) {
            res.errors.map((error) => {
              throw new Error(error.message);
            });
          } else {
            try {
              if (res.data.signup.token.value) return res.data.signup;
            } catch (_) {
              throw new Error("invalid data received");
            }
          }
          return null;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      if (response) {
        dispatch({
          type: "SIGNUP",
          data: response,
        });
        return response;
      }
    } catch (err) {
      return err;
    }
    return false;
  };
};

export default SIGNUP;
