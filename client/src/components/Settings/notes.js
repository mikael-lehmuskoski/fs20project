import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

/**
 *    Notes
 *
 * Renders UI elements for selecting the autodelete setting
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
const Notes = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init === "true");
  const subset = "notes";
  const key = "autodelete";

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
