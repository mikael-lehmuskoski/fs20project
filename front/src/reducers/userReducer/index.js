const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "LOGOUT":
      return null;
    case "SIGNUP":
      return action.data;
    default:
      return state;
  }
};

export default userReducer;
