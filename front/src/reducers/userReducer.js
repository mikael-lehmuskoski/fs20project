// TODO: services -> userservice
const userService = null;

// does reducer call services (backend) or do components call both services AND actioncreators?
// also might only need one reducer if user details are sent with token on login anyway

const userReducer = (state = null, action) => {
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
        user: {
          ...state.user,
          notes: { ...state.user.notes, [action.data.id]: { ...action.data } },
        },
      };
    case "MODIFY_NOTE":
      // TODO: send modified note to back and change state.user.notes.NOTEID
      return {
        ...state,
        user: {
          ...state.user,
          notes: { ...state.user.notes, [action.data.id]: { ...action.data } },
        },
      };
    case "DELETE_NOTE":
      // TODO: remove note from backend AND STATE (id too)
      return {
        ...state,
        user: {
          ...state.user,
          notes: { ...state.user.notes, [action.data.id]: null },
        },
      };
    case "SAVE_SETTINGS":
      // TODO: send settings to back and save to state
      return {
        ...state,
        user: {
          ...state.user,
          settings: { ...action.data },
        },
      };
    case "USER":
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
