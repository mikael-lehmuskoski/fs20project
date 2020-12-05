import services from "../../../services";

const { saveNote } = services;

/**
 * sends the note to backend and then to the reducer
 * @param {String} note a string to be sent to the backend
 * @param {String} token user's token for authentication
 */
const SAVE_NOTE = (note, token) => {
  return async (dispatch) => {
    try {
      const response = await saveNote({ note }, token)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          try {
            if (res.data.data) return { ...res.data.data.saveNote };
            throw new Error();
          } catch (_) {
            throw new Error("invalid data received");
          }
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      if (response) {
        dispatch({
          type: "SAVE_NOTE",
          data: { ...response },
        });
        return { ...response };
      }
      return false;
    } catch (err) {
      return err;
    }
  };
};

export default SAVE_NOTE;
