import services from "../../../services";
import operations from "../../../operations";

const { mutations } = operations;

const SIGNUP = (variables) => {
  return async (dispatch) => {
    try {
      const response = await services(mutations.SIGNUP, variables)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          if (res.data.errors) {
            res.data.errors.map((error) => {
              if (error.message.includes("unique"))
                throw new Error(`Username is already in use.`);
              throw new Error(error.message);
            });
          } else {
            try {
              if (res.data.data.signup.token.value) return res.data.data.signup;
            } catch (err) {
              throw new Error(err || "invalid data received");
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
