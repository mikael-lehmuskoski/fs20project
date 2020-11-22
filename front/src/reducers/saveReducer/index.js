import init from "../default";

const saveReducer = (state = init, action) => {
  switch (action.type) {
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
      // use: delete notes[action.data.id]
      return {
        ...state,
        user: {
          ...state.user,
          notes: { ...state.user.notes, [action.data.id]: null },
        },
      };
    case "SAVE_SETTINGS":
      // TODO: send settings to back and save to state
      console.log("reducer: ", action.data);
      return {
        ...state,
        user: {
          ...state.user,
          user: {
            ...state.user.user,
            settings: { ...action.data },
          },
        },
      };
    default:
      return state;
  }
};

export default saveReducer;
