import Parser from "rss-parser";

const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; // TODO: remove in production or sumn

const fetchFeed = async () => {
  return parser
    .parseURL(
      `${CORS_PROXY}https://rss.nytimes.com/services/xml/rss/nyt/World.xml`
    )
    .then((rawFeed) => {
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
