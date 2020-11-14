import login from "./login";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      // TODO: save to redux store
      console.log(action.data);
      return action.data;
    case "LOGOUT":
      // TODO: empty store
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
      // TODO: send modified note to back and change state.user.notes.id.data
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

export default {
  userReducer,
  login,
};
