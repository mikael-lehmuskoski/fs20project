import loginService from "../services/loginService";

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      // TODO: empty local storage/cache etc.
      return [];
    case "LOGIN_STATE":
      return state;
    default:
      return null;
  }
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await loginService.createNew(content);
    dispatch({
      type: "NEW_NOTE",
      data: newNote,
    });
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: { id },
  };
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await loginService.getAll();
    dispatch({
      type: "INIT_NOTES",
      data: notes,
    });
  };
};

export default loginReducer;
