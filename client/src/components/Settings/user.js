import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

/**
 *    User
 *
 * Renders UI elements for selecting the session persistence setting
 *
 * @function
 *
 * @param {function} handleChange eventhandler for updating the parent's state
 * @param {string} init initial value of the UI element
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const User = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init === "persist");
  const subset = "user";
  const key = "session";

  /**
   *    sendToSettings
   *
   * Sends the current value of the state to the eventhandler specified in the props.
   *
   * @function
   *
   * @author Mikael
   */
  const sendToSettings = () => {
    setCurrent((prev) => !prev);
    const value = !current ? "persist" : "logout";
    handleChange({
      subset,
      key,
      value,
    });
  };

  return (
    <div>
      {`Stay logged in: `}
      <Checkbox
        toggle
        defaultChecked={current}
        onChange={() => sendToSettings()}
      />
    </div>
  );
};

export default User;
