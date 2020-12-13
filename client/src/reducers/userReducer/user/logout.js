/**
 *    LOGOUT
 *
 * logs out
 *
 * @author Mikael
 */
const LOGOUT = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT",
      data: null,
    });
  };
};

export default LOGOUT;
