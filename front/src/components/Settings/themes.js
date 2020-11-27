import React from "react";
import { Dropdown } from "semantic-ui-react";

const themes = [
  { text: "Dark mode", key: "dark-mode", value: "dark-mode" },
  { text: "Light mode", key: "light-mode", value: "light-mode" },
  { text: "Some colors", key: "some-colors", value: "some-colors" },
];

const Theme = ({ handleChange }) => {
  return (
    <div>
      {`Theme: `}
      <Dropdown
        placeholder="Theme"
        selection
        options={themes}
        onChange={(_, data) => {
          handleChange({
            subset: "interface",
            key: "theme",
            value: data.value,
          });
        }} // eslint-disable-line
      />
    </div>
  );
};

export default Theme;
