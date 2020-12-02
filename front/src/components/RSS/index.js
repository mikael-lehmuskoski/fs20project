import React, { useEffect, useState } from "react";

import fetchFeed from "./fetchFeed";

// TODO: list only valid urls in settings, list items with ReactList or sumn, connect RSS to reducer, pass url to fetchFeed
const RSS = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchFeed().then((result) => {
      setItems(result);
    });
  }, []);

  if (items && items.error) return <div className="RSS" id="RSS"> {items.error} </div> // eslint-disable-line
  return (
    <div className="RSS" id="RSS">
      {items && items.loaded
        ? items.map((entry) => (
        <div> {entry.title} </div> // eslint-disable-line
          ))
        : "Loading"}
    </div>
  );
};

export default RSS;
