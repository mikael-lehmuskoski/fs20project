import services from "../../../services";
import operations from "../../../operations";

const { mutations } = operations;

/**
 *    REMOVE_NOTE
 *
 * sends the note to backend and then to the reducer
 *
 * @function
 *
 * @param {object} note a note object to be sent to the backend
 * @param {string} token user's token for authentication
 *
 * @author Mikael
 */
const REMOVE_NOTE = (note, token) => {
  return async (dispatch) => {
    try {
      const response = await services(mutations.REMOVE_NOTE, { note }, token)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          try {
            if (res.data.data) return res.data.data.removeNote;
            throw new Error();
          } catch (_) {
            throw new Error("invalid data received");
          }
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      if (response) {
        dispatch({
          type: "REMOVE_NOTE",
          data: response,
        });
        return { ...response };
      }
      return false;
    } catch (err) {
      return err;
    }
  };
};

export default REMOVE_NOTE;
