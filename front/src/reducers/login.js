import services from "../services";

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
        if (res) {
          if (res.data) {
            if (res.data.login) {
              return res.data.login;
            }
          }
        }
        throw new Error("Login data was not found.");
      })
      .catch((error) => console.log(error)); // DODO: send error.message to notification
    dispatch({
      type: "LOGIN",
      data: response,
    });
  };
};

export default LOGIN;
