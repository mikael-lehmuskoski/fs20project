import React, { useState, useEffect } from "react";

import Analog from "./analog";

// ODOD: styling, lots and lots of styling
const Ticker = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const update = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(update);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <div className="Ticker">
      <Analog time={{ hours, minutes, seconds }} />
    </div>
  );
};

export default Ticker;
