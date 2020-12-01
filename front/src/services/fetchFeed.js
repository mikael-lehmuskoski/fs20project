import axios from "axios";

const fetchFeed = (url) => {
  const options = {
    url,
    method: "GET",
  };

  axios(options).then((response) => {
    console.log(response.status);
  });
};

export default fetchFeed;
