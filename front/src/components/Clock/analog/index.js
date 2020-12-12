import React from "react";

import "./analog.css";

/**
 * Renders an analog clock.
 *
 * The hands (hour, min & sec) are rotated by their respective formulae.
 * Minutes and seconds are simply rotated six degrees per unit of time.
 * The hour hand is slightly more complicated.
 *
 * @param {Object} time
 * @param {number} time.hours
 * @param {number} time.minutes
 * @param {number} time.seconds
 *
 * @returns JSX element
 */
const Analog = ({ time }) => {
  const { hours, minutes, seconds } = time;

  const h = hours * 30 + minutes / 12;
  const m = minutes * 6 - 180; // rotate 180 bc CSS rules are weird
  const s = seconds * 6 - 180; // same as above

  /**
   * Returns a React inline style object to rotate an element by its z-axis.
   *
   * @param {number} deg degrees of rotation
   *
   * @returns React inline style object
   */
  const rotate = (deg) => {
    return {
      transform: `rotateZ(${deg}deg)`,
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
