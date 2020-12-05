import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import timezones from "./timezones";

/**
 * Renders UI elements for selecting the timezone
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const Timezone = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);
  const subset = "clock";
  const key = "timezone";

  /**
   * Sends the current value of the state to the eventhandler specified in the props.
   * @param {String} value value of the UI element
   */
  const sendToSettings = (value) => {
    setCurrent(value);
    handleChange({
      subset,
      key,
      value,
    });
  };

  return (
    <div>
      {`Timezone: `}
      <Dropdown
        placeholder="Search timezones"
        selection
        search
        options={timezones}
        labeled
        value={current}
        onChange={(_, data) => sendToSettings(data.value)}
      />
    </div>
  );
};

export default Timezone;
