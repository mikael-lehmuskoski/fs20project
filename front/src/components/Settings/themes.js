import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const themes = [
  { text: "Dark mode", key: "dark-mode", value: "dark-mode" },
  { text: "Light mode", key: "light-mode", value: "light-mode" },
  { text: "Some colors", key: "some-colors", value: "some-colors" },
];

const Theme = ({ handleChange, init }) => {
  const [current, setCurrent] = useState(init);

  const sendToSettings = (data) => {
    setCurrent(data);
    handleChange({
      subset: "interface",
      key: "theme",
      value: data,
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
