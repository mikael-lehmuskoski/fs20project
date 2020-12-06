import services from "../../../services";
import operations from "../../../operations";

const { mutations } = operations;

const SIGNUP = (variables) => {
  return async (dispatch) => {
    try {
      const response = await services(mutations.SIGNUP, variables)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          else if (res.errors) {
            res.errors.map((error) => {
              throw new Error(error.message);
            });
          } else {
            try {
              if (res.data.data.signup.token.value) return res.data.data.signup;
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
