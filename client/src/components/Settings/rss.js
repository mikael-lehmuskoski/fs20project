import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import sources from "../RSS/sources";

/**
 *    Rss
 *
 * Renders UI elements for selecting the RSS feed source
 *
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const Rss = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);
  const subset = "rss";
  const key = "src";

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
      {`Source: `}
      <Dropdown
        selection
        search
        options={sources}
        labeled
        value={current}
        onChange={(_, data) => sendToSettings(data.value)}
      />
    </div>
  );
};

export default Rss;
