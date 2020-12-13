// main reducer
import userReducer from "./userReducer";
// user stuff
import LOGIN from "./userReducer/user/login";
import SIGNUP from "./userReducer/user/signup";
import LOGOUT from "./userReducer/user/logout";
import GET_USER from "./userReducer/user/getUser";
// saving settings
import SAVE_SETTINGS from "./userReducer/settings/saveSettings";
// note stuff
import SAVE_NOTE from "./userReducer/note/saveNote";
import MODIFY_NOTE from "./userReducer/note/modifyNote";
import REMOVE_NOTE from "./userReducer/note/removeNote";

// notifications reducer
import notificationReducer from "./notificationReducer";
import POST_NOTIFICATION from "./notificationReducer/postNotification";
import CLEAR_NOTIFICATION from "./notificationReducer/clearNotification";
import SET_TIMEOUTID from "./notificationReducer/setTimoutID";

export default {
  userReducer,
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_USER,
  SAVE_SETTINGS,
  SAVE_NOTE,
  MODIFY_NOTE,
  REMOVE_NOTE,
  notificationReducer,
  POST_NOTIFICATION,
  CLEAR_NOTIFICATION,
  SET_TIMEOUTID,
};
