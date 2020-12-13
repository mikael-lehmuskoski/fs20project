import React, { useState, useEffect } from "react";
import Analog from "./analog";

/**
 *    Clock
 *
 * Returns a Clock applet.
 *
 * @function
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // setInterval returns an ID
    const update = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // clear the interval on unmount
    return () => {
      clearInterval(update);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="Clock">
      <Analog time={{ hours, minutes, seconds }} />
    </div>
  );
};

export default Clock;
