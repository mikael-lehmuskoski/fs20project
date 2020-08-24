// TODO: services -> userservice
const userService = null;

// might only need one reducer if user details are sent with token anyway

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      // TODO: empty local storage/cache etc.
      return null;
    case "SAVE_NOTE":
      // TODO: send note to backend and concat to state.notes
      return null;
    case "MODIFY_NOTE":
      // TODO: send modified note to back and change state.note
      return null;
    case "DELETE_NOTE":
      // TODO: remove note from backend and state
      return null;
    case "SAVE_SETTINGS":
      return { ...state, settings: { value: null } };
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
