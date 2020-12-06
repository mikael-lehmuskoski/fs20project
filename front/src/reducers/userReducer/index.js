import init from "../default";

const userReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return null;
    case "SIGNUP":
      return action.data;
    case "SAVE_NOTE":
      return {
        ...state,
        user: {
          ...state.user,
          notes: [...state.user.notes, { ...action.data }],
        },
      };
    case "MODIFY_NOTE":
      const updatedNotes = state.user.notes.map((n) =>
        n.id === action.data.id ? action.data : n
      );
      return {
        ...state,
        user: {
          ...state.user,
          notes: [...updatedNotes],
        },
      };
    case "REMOVE_NOTE":
      const filteredNotes = state.user.notes.filter(
        (n) => n.id !== action.data
      );
      return {
        ...state,
        user: {
          ...state.user,
          notes: [...filteredNotes],
        },
      };
    case "SAVE_SETTINGS":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.data,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
