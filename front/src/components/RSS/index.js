import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import fetchFeed from "./fetchFeed";
import sources from "./sources";

const renderItem = (item) => {
  return (
    <a key={item.title} href={item.link} className="rssListItem">
      {item.title}
    </a>
  );
};

const renderList = (items) => {
  return (
    <div className="rssList" id="rssList">
      {items.map((item) => renderItem(item))}
    </div>
  );
};

const RSS = (props) => {
  const settings = props.user ? props.user.settings : null;
  const [items, setItems] = useState(null);
  const url = settings ? settings.rss.src : null;

  useEffect(() => {
    fetchFeed(
      url || "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss"
    ).then((result) => {
      setItems(result);
    });
  }, [props.user]); // eslint-disable-line

  if (items && items.error) return <div className="RSS" id="RSS"> {items.error} </div> // eslint-disable-line
  return (
    <div className="RSS" id="RSS">
      <h2 className="rssHeader">
        {
          sources.map((s) => (s.value === url ? s : null)).find((s) => s).text || "Yle Pääuutiset" // eslint-disable-line
        }
      </h2>
      {items && items.loaded ? renderList(items) : "Loading feed..."}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user ? state.user.user : null };
};

export default connect(mapStateToProps)(RSS);
