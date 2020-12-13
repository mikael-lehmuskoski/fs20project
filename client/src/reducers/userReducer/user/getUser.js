import services from "../../../services";
import operations from "../../../operations";

const { queries } = operations;

const GET_USER = (token) => {
  return async (dispatch) => {
    try {
      const response = await services(queries.GET_USER, null, token)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          else if (res.errors) {
            res.errors.map((error) => {
              throw new Error(error.message);
            });
          } else {
            try {
              if (res.data.data.user) return res.data.data.user;
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
          type: "GET_USER",
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

export default GET_USER;
