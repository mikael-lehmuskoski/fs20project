import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

import sources from "../RSS/sources";

// TODO: validate input url
/**
 * Renders UI elements for selecting the RSS feed source
 * @param {Function} handleChange eventhandler for updating the parent's state
 * @param {String} init initial value of the UI element
 */
const Rss = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);
  const subset = "rss";
  const key = "src";

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
      {`Source URL: `}
      <Dropdown
        placeholder="Select RSS source"
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
