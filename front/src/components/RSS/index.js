import React, { useEffect, useState } from "react";
import ReactList from "react-list";
import { connect } from "react-redux";

import fetchFeed from "./fetchFeed";

// TODO: list only valid urls in settings, list items with ReactList or sumn, connect RSS to reducer, pass url to fetchFeed
const RSS = (props) => {
  const settings = props.user ? props.user.settings : null;
  const [items, setItems] = useState(null);
  const url = settings ? settings.rss.src : null;

  const renderItem = (index, key) => {
    return (
      <input
        key={key}
        type="button"
        className="rssListItem"
        value={items[index].title}
        onClick={() => window.open(items[index].link, "_blank")}
      />
    );
  };

  const renderList = () => {
    return (
      <ReactList
        className="rssList"
        id="rssList"
        itemRenderer={renderItem}
        length={items.length}
        type="uniform"
        style={{ overflow: "auto" }}
      />
    );
  };

  useEffect(() => {
    fetchFeed(
      url || "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
    ).then((result) => {
      setItems(result);
    });
  }, [props.user]); // eslint-disable-line

  if (items && items.error) return <div className="RSS" id="RSS"> {items.error} </div> // eslint-disable-line
  if (!items) return <div className="RSS" id="RSS">loading...</div>; // eslint-disable-line
  return (
    <div className="RSS" id="RSS">
      {items && items.loaded ? renderList() : "Loading feed..."}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user ? state.user.user : null };
};

export default connect(mapStateToProps)(RSS);
