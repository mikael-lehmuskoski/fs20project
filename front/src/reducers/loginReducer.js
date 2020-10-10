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
    console.log("login at loginReducer!", details);
    const newLogin = await loginService(details);
    dispatch({
      type: "LOGIN",
      data: newLogin,
    });
  };
};

export default loginReducer;
