// TODO: services -> userservice
const userService = null;

// does reducer call services (backend) or do components call both services AND actioncreators?
// also might only need one reducer if user details are sent with token on login anyway

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      // TODO: save to local storage
      return action.data;
    case "LOGOUT":
      // TODO: empty local storage/cache etc.
      return null;
    case "SAVE_NOTE":
      // TODO: send note to backend and add to state.user.notes
      return {
        ...state,
        notes: { ...state.notes, action.data.id: { ...action.data } },
      };
    case "MODIFY_NOTE":
      // TODO: send modified note to back and change state.user.notes.NOTEID
      return {
        ...state,
        notes: { ...state.notes, action.data.id: action.data }
      };
    case "DELETE_NOTE":
      // TODO: remove note from backend and state
      return null;
    case "SAVE_SETTINGS":
      // TODO: save settings to user details
      return {
        ...state,
        user: {
          ...state.user,
          settings: { ...state.user.settings, value: null },
        },
      };
    case "USER_STATE":
      return state;
    default:
      return null;
  }
};

// TODO: action creators
export const login = (deets) => {
  return async (dispatch) => {
    const newLogin = await userService.login(deets);
    dispatch({
      type: "LOGIN",
      data: newLogin,
    });
  };
};

export default userReducer;
