// user stuff
import userReducer from "./userReducer";
import login from "./userReducer/login";
import signup from "./userReducer/signup";
import logout from "./userReducer/logout";

// saving stuff
import saveReducer from "./saveReducer";

// notifications
import notificationReducer from "./notificationReducer";
import postNotification from "./notificationReducer/postNotification";
import clearNotification from "./notificationReducer/clearNotification";
import setTimeoutID from "./notificationReducer/setTimoutID";

export default {
  userReducer,
  login,
  signup,
  logout,
  saveReducer,
  notificationReducer,
  postNotification,
  clearNotification,
  setTimeoutID,
};
