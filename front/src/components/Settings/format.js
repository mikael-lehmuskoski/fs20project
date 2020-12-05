import React, { useState } from "react";
import { Checkbox } from "semantic-ui-react";

/**
 * Renders UI elements for selecting the time format
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const Format = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init === "24h");
  const subset = "clock";
  const key = "format";

  /**
   * Sends the current value of the state to the eventhandler specified in the props.
   * @param {String} value value of the UI element
   */
  const sendToSettings = () => {
    setCurrent((prev) => !prev);
    const value = !current ? "24h" : "12h";
    handleChange({
      subset,
      key,
      value,
    });
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {`24h clock: `}
      <Checkbox
        toggle
        defaultChecked={current}
        onChange={() => sendToSettings()}
      />
    </div>
  );
};

export default Format;
