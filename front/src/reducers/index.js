// main reducer
import userReducer from "./userReducer";
// user stuff
import LOGIN from "./userReducer/user/login";
import SIGNUP from "./userReducer/user/signup";
import LOGOUT from "./userReducer/user/logout";
// saving stuff
import SAVE_SETTINGS from "./userReducer/save/saveSettings";

// notifications
import notificationReducer from "./notificationReducer";
import POST_NOTIFICATION from "./notificationReducer/postNotification";
import CLEAR_NOTIFICATION from "./notificationReducer/clearNotification";
import SET_TIMEOUTID from "./notificationReducer/setTimoutID";

export default {
  userReducer,
  LOGIN,
  SIGNUP,
  LOGOUT,
  SAVE_SETTINGS,
  notificationReducer,
  POST_NOTIFICATION,
  CLEAR_NOTIFICATION,
  SET_TIMEOUTID,
};
