import Parser from "rss-parser";

const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

/**
 *    fetchFeed
 *
 * Fetches an RSS feed, returns an array of rss feed items
 *
 * @function
 * @requires rss-parser
 *
 * @param {String} url user specified RSS url
 *
 * @returns {Array} array of news feed items with fields title and link
 *
 * @author Mikael
 */
const fetchFeed = async (url) => {
  // const target =
  //   process.env.NODE_ENV === "production" ? url : `${CORS_PROXY}${url}`;
  const target = `${CORS_PROXY}${url}`; // todo: figure out why cors blocks all requests (even in production)

  try {
    return parser.parseURL(target).then((rawFeed) => {
      if (!rawFeed || !rawFeed.items) return { error: "Cannot load RSS feed" };
      const parsedResult = rawFeed.items.map((entry) => ({
        title: entry.title,
        link: entry.link,
      }));
      parsedResult.loaded = true;
      return parsedResult;
    });
  } catch (err) {
    return err;
  }
};

export default fetchFeed;
