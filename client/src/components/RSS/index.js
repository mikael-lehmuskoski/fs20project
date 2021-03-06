import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import fetchFeed from "./fetchFeed";
import sources from "./sources";

/**
 *    renderItem
 *
 * Renders a link element
 *
 * @function
 *
 * @param {object} item
 * @param {String} item.title title for the element
 * @param {String} item.link href value for the element
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const renderItem = (item) => {
  return (
    <a key={item.title} href={item.link} className="rssListItem">
      {item.title}
    </a>
  );
};

/**
 *    renderList
 *
 * Renders a list of links with renderItem.
 *
 * @function
 *
 * @param {Array} items an array of items
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const renderList = (items) => {
  return (
    <div className="rssList" id="rssList">
      {items.map((item) => renderItem(item))}
    </div>
  );
};

/**
 *    RSS
 *
 * Renders the RSS applet
 *
 * @function
 *
 * @param {object} props
 * @param {object} props.user the main user object. mainly used for getting the nested settings object.
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const RSS = (props) => {
  const [items, setItems] = useState(null);
  const settings = props.user ? props.user.settings : null;
  const url = settings ? settings.rss.src : null;
  const header = url
    ? sources.find((s) => (s.value === url ? s : null)).text
    : null;

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
          header || "Yle Pääuutiset" // eslint-disable-line
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
