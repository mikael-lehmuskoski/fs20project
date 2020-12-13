import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const themes = [
  { text: "Dark mode", key: "dark-mode", value: "dark-mode" },
  { text: "Light mode", key: "light-mode", value: "light-mode" },
  { text: "Some colors", key: "some-colors", value: "some-colors" },
];

/**
 * Renders UI elements for selecting the theme
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const Theme = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);
  const subset = "interface";
  const key = "theme";

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
      {`Theme: `}
      <Dropdown
        placeholder="Theme"
        selection
        options={themes}
        value={current}
        onChange={(_, data) => sendToSettings(data.value)}
      />
    </div>
  );
};

export default Theme;
