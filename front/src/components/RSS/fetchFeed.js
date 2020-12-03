import Parser from "rss-parser";

const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const fetchFeed = async (url) => {
  const target =
    process.env.NODE_ENV === "production" ? url : `${CORS_PROXY}${url}`;

  return parser.parseURL(target).then((rawFeed) => {
    if (!rawFeed || !rawFeed.items) return { error: "Cannot load RSS feed" };
    const parsedResult = rawFeed.items.map((entry) => ({
      title: entry.title,
      link: entry.link,
    }));
    parsedResult.loaded = true;
    return parsedResult;
  });
};

export default fetchFeed;
