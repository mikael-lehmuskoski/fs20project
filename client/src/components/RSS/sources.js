/**
 *    sources
 *
 * @file Contains all of the available RSS feeds. Formatted for the Semantic UI dropdown component.
 *
 * @author Mikael
 */

const sources = [
  {
    text: "New York Times",
    key: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    value: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
  },
  {
    text: "Yle Pääuutiset",
    key: "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss",
    value: "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss",
  },
  {
    text: "Yle Tuoreimmat Uutiset",
    key: "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET",
    value:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET",
  },
  {
    text: "Yle Kotimaa",
    key:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34837",
    value:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34837",
  },
  {
    text: "Yle Tiede",
    key:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-819",
    value:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-819",
  },
  {
    text: "Yle Ulkomaat",
    key:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34953",
    value:
      "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET&concepts=18-34953",
  },
  {
    text: "CNN Top Stories",
    key: "http://rss.cnn.com/rss/cnn_topstories.rss",
    value: "http://rss.cnn.com/rss/cnn_topstories.rss",
  },
  {
    text: "Wired",
    key: "http://feeds.wired.com/wired/index",
    value: "http://feeds.wired.com/wired/index",
  },
];

export default sources;
