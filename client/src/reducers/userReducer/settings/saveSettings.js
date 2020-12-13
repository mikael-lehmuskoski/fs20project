import services from "../../../services";
import operations from "../../../operations";

const { mutations } = operations;

/**
 *    SAVE_SETTINGS
 *
 * sends the settings object to the backend and then to the reducer
 *
 * @function
 *
 * @param {object} settings settings is ALL of the settings every time 100% of the time
 * @param {string} token user's token for authentication
 *
 * @author Mikael
 */
const SAVE_SETTINGS = (settings, token) => {
  return async (dispatch) => {
    try {
      const response = await services(
        mutations.SAVE_SETTINGS,
        { ...settings },
        token
      )
        .then((res) => {
          if (res.message) throw new Error(res.message);
          try {
            if (res.data.data) return res.data.data;
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
          type: "SAVE_SETTINGS",
          data: settings,
        });
        return response;
      }
      return false;
    } catch (err) {
      return err;
    }
  };
};

export default SAVE_SETTINGS;
