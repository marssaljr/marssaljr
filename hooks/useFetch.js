import useSWR from "swr";
import base64 from "base-64";
import axios from "axios";

const username = process.env.username;
const password = process.env.password;

const useFetch = (url) => {
  const { data, error } = useSWR(url, async (url) => {
    const options = {
      method: "GET",
      url: url,
      headers: {
        Authorization: "Basic " + base64.encode(username + ":" + password),
      },
    };
    const response = await axios.request(options);
    const data = response.data;
    return data;
  });
  return { data, error };
};

export default useFetch;
