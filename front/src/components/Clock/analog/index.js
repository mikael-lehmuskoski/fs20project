import React from "react";

import "./analog.css";

const Analog = ({ time }) => {
  const { hours, minutes, seconds } = time;

  const h = hours * 30 + minutes / 12;
  const m = minutes * 6 - 180; // rotate 180 bc CSS rules are weird
  const s = seconds * 6 - 180; // same as above

  const rotate = (unit) => {
    return {
      transform: `rotateZ(${unit}deg)`,
    };
  };

  return (
    <div className="analog">
      <div style={rotate(h)} className="hour" id="hour" />
      <div style={rotate(m)} className="min" id="min" />
      <div style={rotate(s)} className="sec" id="sec" />
    </div>
  );
};

export default Analog;
