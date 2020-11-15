import login from "./login";
import signup from "./signup";

const reducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      if (!action.data || !action.data.token || !action.data.token.value)
        return null;
      return action.data;
    case "LOGOUT":
      return null;
    case "SIGNUP":
      if (!action.data || !action.data.token || !action.data.token.value)
        return null;
      return action.data;
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
  reducer,
  login,
  signup,
};
