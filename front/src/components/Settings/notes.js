import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

/**
 * Renders UI elements for selecting the theme
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const Notes = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init === "true");
  const subset = "notes";
  const key = "autodelete";

  /**
   * Sends the current value of the state to the eventhandler specified in the props.
   * @param {String} value value of the UI element
   */
  const sendToSettings = () => {
    setCurrent((prev) => !prev);
    const value = !current ? "true" : "false";
    handleChange({
      subset,
      key,
      value,
    });
  };

  return (
    <div>
      {`Autodelete notes: `}
      <Checkbox
        toggle
        defaultChecked={current}
        onChange={() => sendToSettings()}
      />
    </div>
  );
};

export default Notes;
