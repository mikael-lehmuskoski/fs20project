import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

/**
 * Renders UI elements for selecting the session persistence setting
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const User = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init === "persist");
  const subset = "user";
  const key = "session";

  /**
   * Sends an updated value ("persist" or "logout") based on the state to the eventhandler specified in the props.
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
