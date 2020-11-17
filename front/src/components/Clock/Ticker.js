import React, { useEffect, useState } from "react";

// TODO: stop updating if view not active!!! MEMORY LEAK!!!
// ODOD: styling, lots and lots of styling
const Ticker = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  });

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return <div className="Ticker">{`${hours}:${minutes}:${seconds}`}</div>;
};

export default Ticker;
