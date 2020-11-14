// TODO: services -> userservice
// import loginService from "../services/login";

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

// TODO: action creators
export const setUser = (details) => {
  console.log("setUser at Reducer!", details);
  return /* async */ (dispatch) => {
    console.log("inside dispatch!");
    // const newLogin = /* await */ loginService.login(details);
    // console.log(newLogin);
    dispatch({
      type: "LOGIN",
      data: details,
    });
  };
};

export default userReducer;
