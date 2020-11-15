import services from "../services";

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
        console.log(res);
        if (res) {
          if (res.data) {
            if (res.data.signup) {
              // ODOD: send a notification
              return res.data.signup;
            }
          }
        }
        throw new Error("Login data was not found.");
      })
      .catch((error) => console.log(error.message)); // DODO: send error.message to notification
    if (response) {
      dispatch({
        type: "SIGNUP",
        data: response,
      });
    }
  };
};

export default SIGNUP;
