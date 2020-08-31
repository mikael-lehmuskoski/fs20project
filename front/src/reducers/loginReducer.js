import loginService from "../services/loginService";

// might only need one reducer if user details are sent with token anyway

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

export const login = (details) => {
  return async (dispatch) => {
    const newLogin = await loginService(details);
    dispatch({
      type: "LOGIN",
      data: newLogin,
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
