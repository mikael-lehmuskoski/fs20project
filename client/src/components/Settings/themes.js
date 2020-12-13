import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const themes = [
  { text: "Dark mode", key: "dark-mode", value: "dark-mode" },
  { text: "Light mode", key: "light-mode", value: "light-mode" },
  { text: "Some colors", key: "some-colors", value: "some-colors" },
];

/**
 *    Theme
 *
 * Renders UI elements for selecting the theme
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
const Theme = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);
  const subset = "interface";
  const key = "theme";

  /**
   *    sendToSettings
   *
   * Sends the current value of the state to the eventhandler specified in the props.
   *
   * @function
   *
   * @author Mikael
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
