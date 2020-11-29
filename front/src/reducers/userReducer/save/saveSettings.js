import services from "../../../services";

const { saveSettings } = services;

/**
 * sends the settings object to state
 * @param {*} settings settings is ALL of the settings every time 100% of the time
 */
const SAVE_SETTINGS = (settings, token) => {
  return async (dispatch) => {
    try {
      const response = await saveSettings({ ...settings }, token)
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
