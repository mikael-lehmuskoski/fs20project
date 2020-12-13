import services from "../../../services";
import operations from "../../../operations";

const { mutations } = operations;

const LOGIN = (variables) => {
  return async (dispatch) => {
    try {
      const response = await services(mutations.LOGIN, variables)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          else if (res.errors) {
            res.errors.map((error) => {
              throw new Error(error.message);
            });
          } else {
            try {
              if (res.data.data.login.token.value) return res.data.data.login;
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
          type: "LOGIN",
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

export default LOGIN;
