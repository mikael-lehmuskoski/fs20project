// TODO: services: import services from "../../services";

/**
 * sends the settings object to state
 * @param {*} settings settings is ALL of the settings every time 100% of the time
 */
const SAVE_SETTINGS = (settings) => {
  return async (dispatch) => {
    // TODO: save to backend
    dispatch({
      type: "SAVE_SETTINGS",
      data: settings,
    });
  };
};

export default SAVE_SETTINGS;
